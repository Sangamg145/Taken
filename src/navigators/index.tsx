import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LogIn from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import OTPVerificationScreen from '../screens/auth/OtpScreen';
import FaceDetection from '../screens/auth/FaceDetection';
import HomeScreen from '../screens/home';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, Text, View} from 'react-native';

function DetailsScreen() {
  const [region, setRegion] = React.useState<any>({
    latitude: 28.4563, // Example latitude
    longitude: 77.07392, // Example longitude
    latitudeDelta: 0.0922, // Example delta
    longitudeDelta: 0.0421, // Example delta
  });

  const onMapReady = React.useCallback(() => {
    // Handle map ready event
    console.log('Map is ready');
  }, []);

  const onRegionChange = React.useCallback((newRegion: any) => {
    // Handle region change event
    setRegion(newRegion);
    console.log('Region changed:', newRegion);
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,   // Example latitude
            longitude: -122.4324, // Example longitude
            latitudeDelta: 0.0922, // Example delta
            longitudeDelta: 0.0421, // Example delta
          }}
        /> */}
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        onMapReady={onMapReady}
        onRegionChangeComplete={onRegionChange}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title={'Your Location'}
          draggable
        />
      </MapView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LogIn}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={Signup}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="OtpScreen"
        component={OTPVerificationScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="FaceDetection"
        component={FaceDetection}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
export default MainNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9dd6eb',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});
