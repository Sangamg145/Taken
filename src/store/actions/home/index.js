import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {API_URL, GET_USER, headers} from '../../constants';

export const getUser = () => {
  return async dispatch => {
    try {
      // Fetch headers dynamically
      const config = {headers: await headers()};

      const res = await axios.get(`${API_URL}user/profile`, config);

      if (res.status === 200) {
        // Dispatch the profile data if the request is successful
        dispatch({type: GET_USER, data: res.data});
      } else {
        // Display an error message in case of non-200 status codes
        ToastAndroid.show('Error while login!', ToastAndroid.SHORT);
      }
    } catch (error) {
      // Handle network errors
      if (error.isAxiosError && !error.response) {
        ToastAndroid.show(
          'Network Error! Please check your connection.',
          ToastAndroid.SHORT,
        );
      } else {
        // Handle other types of errors safely
        const errorMessage =
          error?.response?.data?.message || 'An unexpected error occurred';
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      }
    }
  };
};
