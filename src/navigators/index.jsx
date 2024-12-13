/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import LogIn from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import OTPVerificationScreen from '../screens/auth/OtpScreen';
import FaceDetection from '../screens/auth/FaceDetection';
// import MapView, {Marker} from 'react-native-maps';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/home/ChatScreen';
import CameraComponent from '../screens/home/CameraScreen';
import ProfileScreen from '../screens/home/ProfileScreen';
import MyCalendar from '../screens/home/CalendarScreen';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authSuccess} from '../store/actions/auth';
import {Image, Text} from 'react-native';
import ChatList from '../screens/home/ChatScreen/ChatList';

// function DetailsScreen() {
//   const [region, setRegion] = React.useState({
//     latitude: 28.4563,
//     longitude: 77.07392,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const onMapReady = React.useCallback(() => {
//     console.log('Map is ready');
//   }, []);

//   const onRegionChange = React.useCallback(newRegion => {
//     setRegion(newRegion);
//     console.log('Region changed:', newRegion);
//   }, []);

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <MapView
//         style={styles.map}
//         initialRegion={region}
//         showsUserLocation={true}
//         onMapReady={onMapReady}
//         onRegionChangeComplete={onRegionChange}>
//         <Marker
//           coordinate={{
//             latitude: region.latitude,
//             longitude: region.longitude,
//           }}
//           title={'Your Location'}
//           draggable
//         />
//       </MapView>
//     </View>
//   );
// }
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function MyBottomTabs() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconUrl;

          if (route.name === 'Chat') {
            iconUrl = 'https://cdn-icons-png.flaticon.com/512/5962/5962463.png';
          } else if (route.name === 'Camera') {
            iconUrl =
              'https://icons.iconarchive.com/icons/iconarchive/outline-camera/512/Flat-Orange-Big-Camera-icon.png';
          } else if (route.name === 'Profile') {
            iconUrl =
              'https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg';
          } else if (route.name === 'Calendar') {
            iconUrl = 'https://cdn-icons-png.flaticon.com/512/1869/1869397.png';
          }

          // Return the Image component with opacity adjustment for non-focused state
          return (
            <Image
              source={{uri: iconUrl}}
              style={{
                width: 22,
                height: 22,
              }}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let label;
          if (route.name === 'Chat') {
            label = 'Messages';
          } else if (route.name === 'Camera') {
            label = 'Snap';
          } else if (route.name === 'Profile') {
            label = 'Account';
          } else if (route.name === 'Calendar') {
            label = 'Events';
          }

          return <Text style={{color: '#000', fontSize: 12}}>{label}</Text>;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatList} />
      <Tab.Screen name="Camera" component={CameraComponent} />
      <Tab.Screen name="Calendar" component={MyCalendar} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const getData = async () => {
    try {
      const tokens = await AsyncStorage.getItem('token');
      dispatch(authSuccess(tokens));
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    if (!token) {
      getData();
    }
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!token ? (
        <>
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen
            name="OtpScreen"
            component={OTPVerificationScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen name="FaceDetection" component={FaceDetection} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={MyBottomTabs} />
          <Stack.Screen name="ChatDetails" component={ChatScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default MainNavigator;
