import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
// import { Icon } from 'react-native-elements'; // Uncomment if you're using react-native-elements
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({chatUser}: any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => {
            navigation.goBack();
          }}>
          {/* Uncomment and use the Icon component if needed */}
          {/* <Icon
            name='angle-left'
            type='font-awesome'
            size={30}
            color='#fff'
          /> */}
        </TouchableOpacity>
        <Image
          style={{width: 28, height: 28}}
          source={require('../../../assets/google.png')}
        />
        <View
          style={{
            paddingLeft: 10,
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>
            {chatUser.name}
          </Text>
          <Text style={{color: '#fff', fontWeight: '300'}}>
            {chatUser.last_seen}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{paddingRight: 10}}
        onPress={() => {
          Alert.alert('Audio Call', 'Audio Call Button Pressed');
        }}>
        {/* Uncomment and use the Icon component if needed */}
        {/* <Icon name='call' size={28} color='#fff' /> */}
        <Image
          style={{width: 28, height: 28}}
          source={{
            uri: 'https://cdn-icons-png.freepik.com/256/724/724664.png?semt=ais_hybrid',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#9dd6eb', // Change to match your header's background color
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // Add any other styles here
});

export default CustomHeader;
