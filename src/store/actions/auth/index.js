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

export const authSignup = (
  name,
  email,
  phone,
  dob,
  password,
  gender,
  navigation,
) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${API_URL}register/`, {
        name,
        email,
        phone,
        dob,
        password,
        gender,
      });
      if (res.status === 201) {
        // navigation.replace('Home');
        if (res?.data?.status_code === 200) {
          ToastAndroid.show('Signup successful!', ToastAndroid.SHORT);
          navigation.navigate('OtpScreen');
        } else {
          ToastAndroid.show(res?.data?.status_code, ToastAndroid.SHORT);
        }
        // storeData(res?.data?.accessToken); // Store the token after signup
        // dispatch(authSuccess(res?.data?.accessToken)); // Dispatch the token to the store
      } else {
        ToastAndroid.show('Error during signupp!', ToastAndroid.SHORT);
      }
    } catch (error) {
      // If the error is a network issue, display a toast and log it
      if (error.isAxiosError && !error.response) {
        ToastAndroid.show(
          'Network Error! Please check your connection.',
          ToastAndroid.SHORT,
        );
      } else {
        ToastAndroid.show(
          error.response?.data?.message || 'Error during signupp!',
          ToastAndroid.SHORT,
        );
      }
    }
  };
};
