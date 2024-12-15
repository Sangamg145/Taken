import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {API_URL, headers} from '../../../store/constants';

// ChatItem component
const ChatItem = ({name, lastMessage, profilePic, time, onPress}) => (
  <TouchableOpacity style={styles.chatItem} onPress={onPress}>
    <Image source={{uri: profilePic}} style={styles.profilePic} />
    <View style={styles.chatDetails}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.lastMessage} numberOfLines={1}>
        {lastMessage}
      </Text>
    </View>
  </TouchableOpacity>
);

// ChatList component
const ChatList = ({navigation}) => {
  const [chatData, setChatData] = useState([]);

  // Handle chat press to navigate with specific item data
  const handleChatPress = item => {
    navigation.navigate('ChatDetails', {
      receiverId: item?.userId,
      name: item?.name,
      lastMessage: item?.lastMessage,
      profile_image: item?.image,
      lastTime: item?.lastMessageTime,
    });
  };
  useEffect(() => {
    const fetchList = async () => {
      try {
        const config = {headers: await headers()};
        const response = await axios.get(`${API_URL}chatList`, config);
        setChatData(response?.data?.data); // Assuming response.data contains the array of chat data
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchList();
  }, []);

  const renderChatItem = ({item}) => (
    <ChatItem
      name={item?.name}
      lastMessage={item?.lastMessage}
      profilePic={item?.image}
      time={item?.lastMessageTime}
      onPress={() => handleChatPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={item => item._id} // Use unique ID
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 3,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
});

export default ChatList;
