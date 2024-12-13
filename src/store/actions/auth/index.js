import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

const API_URL = 'http://10.0.2.2:5000/api/';

export const authSuccess = token => {
  return {
    type: 'AUTH_SUCCESS',
    token: token,
  };
};

const storeData = async value => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (e) {
    // saving error
  }
};

export const authLogin = (email, password) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${API_URL}login/`, {
        email,
        password,
      });
      if (res.status === 200) {
        // navigation.replace('Home');
        ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
        storeData(res?.data?.accessToken);
        dispatch(authSuccess(res?.data?.accessToken));
      } else {
        ToastAndroid.show('Error while login!', ToastAndroid.SHORT);
      }
    } catch (error) {
      // If the error is a network issue, display a toast and log it
      if (error.isAxiosError && !error.response) {
        ToastAndroid.show(
          'Network Error! Please check your connection.',
          ToastAndroid.SHORT,
        );
      } else {
        ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
      }
    }
  };
};
