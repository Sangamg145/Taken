/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {authSuccess} from '../../../store/actions/auth';
import {getUser} from '../../../store/actions/home';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user?.user?.data);
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch(authSuccess(null));
    } catch (error) {
      console.error('Failed to remove the token:', error);
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My{'\n'}Profile 😁</Text>
      <View style={styles.profileContainer}>
        <View style={styles.smallCircle}>
          <Image
            source={{
              uri: 'https://cdn.vectorstock.com/i/1000v/02/30/photo-icon-vector-21180230.jpg',
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.largeCircle}>
          <Image
            source={require('../../../assets/men1.webp')}
            style={styles.profileImage}
          />
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.smallCircle}>
          <Image
            source={{
              uri: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{user?.name}</Text>
      <View style={styles.menuItem}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/021/079/672/non_2x/user-account-icon-for-your-design-only-free-png.png',
          }}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>My Account</Text>
      </View>
      <View style={styles.menuItem}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/6302/6302741.png',
          }}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Notifications</Text>
      </View>
      <View style={styles.menuItem}>
        <Image
          source={{
            uri: 'https://static.thenounproject.com/png/2502966-200.png',
          }}
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Help Center</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 24,
    backgroundColor: '#fff',
    height: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#636363',
    lineHeight: 40,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 36,
  },
  smallCircle: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#949494',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeCircle: {
    width: 170,
    height: 170,
    borderWidth: 6,
    borderColor: '#ef89fa',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  name: {
    color: '#636363',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 24,
    fontWeight: '500',
  },
  menuItem: {
    display: 'flex',
    marginTop: 24,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
    borderRadius: 20,
  },
  menuText: {
    color: '#636363',
    fontSize: 14,
    fontWeight: '500',
  },
});
