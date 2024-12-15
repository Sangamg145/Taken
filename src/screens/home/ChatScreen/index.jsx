/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import CustomHeader from './ChatHeader';
import axios from 'axios';
import io from 'socket.io-client';
import {API_URL} from '../../../store/constants';
import {useSelector} from 'react-redux';

// Replace with your Socket.IO server URL
const SOCKET_SERVER_URL = 'http://10.0.2.2:5000';

export default function ChatScreen({route}) {
  const user = useSelector(state => state.user?.user?.data);
  const {name, receiverId, profile_image} = route.params;
  const socket = useRef(null); // Ref to store socket instance

  const [chatUser] = useState({
    userId: receiverId, // Unique ID for the chat user (recipient)
    name: name,
    profile_image: profile_image,
    last_seen: 'I`m here',
  });

  const [currentUser] = useState({
    userId: user?._id, // Unique ID for the current user
    name: user?.name,
  });
  // Messages state will be initially empty and filled by API data
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Fetch messages from the API when the component is mounted
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // `/messages?sender=${encodeURIComponent(sender)}&receiver=${encodeURIComponent(receiver)}`
        const response = await axios.get(
          `${API_URL}chat/messages?sender=${encodeURIComponent(
            user?._id,
          )}&receiver=${encodeURIComponent(receiverId)}`,
        );
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messagesss:', error);
      }
    };

    fetchMessages();
  }, []);

  // Setup Socket.IO connection and listeners
  useEffect(() => {
    socket.current = io(SOCKET_SERVER_URL);

    // Join the room with the current user's unique ID
    socket.current.emit('join_room', currentUser?.userId);

    // Listen for new messages from the server
    socket.current.on('receive_message', message => {
      // Only add the message to state if the receiver matches the current user's ID
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // Cleanup on component unmount
    return () => {
      socket.current.disconnect();
    };
  }, [currentUser.userId]);

  // Utility function to format time
  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  // Send message to a specific user
  const sendMessage = async () => {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());

    const newMessage = {
      sender: user?._id,
      message: inputMessage,
      receiver: chatUser.userId,
      time: t,
    };

    try {
      // await axios.post(`${API_URL}chat/messages`, newMessage);

      // Emit the new message to the server via Socket.IO
      socket.current.emit('send_message', newMessage);

      // Update local state with the new message
      // setMessages([...messages, newMessage]);
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <CustomHeader chatUser={chatUser} />
        <FlatList
          style={{backgroundColor: '#f2f2ff'}}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({item}) => (
            <TouchableWithoutFeedback>
              <View style={{marginTop: 6}}>
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor:
                      item.sender === currentUser.userId
                        ? '#316FF6'
                        : '#FF43A0',
                    alignSelf:
                      item.sender === currentUser.userId
                        ? 'flex-end'
                        : 'flex-start',
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                      item.sender === currentUser.userId ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.userId ? 0 : 8,
                  }}>
                  <Text style={{color: '#fff', fontSize: 16}}>
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color: '#dfe4ea',
                      fontSize: 14,
                      alignSelf: 'flex-end',
                    }}>
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View style={{paddingVertical: 10}}>
          <View style={styles.messageInputView}>
            <TextInput
              value={inputMessage}
              style={styles.messageInput}
              placeholder="Message"
              onChangeText={text => setInputMessage(text)}
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={sendMessage}>
              <Image
                style={{width: 24, height: 24}}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1477/1477051.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {height: '100%', aspectRatio: 1, borderRadius: 100},
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
