import AsyncStorage from '@react-native-async-storage/async-storage';
export const API_URL = 'http://10.0.2.2:5000/api/';
export const headers = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }
    return {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    };
  } catch (error) {
    console.error('Error fetching token:', error);
    return {
      'Content-Type': 'application/json',
    };
  }
};

export const GET_USER = 'GET_USER';
