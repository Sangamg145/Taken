/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './src/screens/auth/Login';
import RNBootSplash from "react-native-bootsplash";
import Signup from './src/screens/auth/Signup';
// import MyMapComponent from './MyMapComp';
import MapView, { Marker } from 'react-native-maps';
import DetailsScreens from './Loca';
function HomeScreen({navigation}:any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  const [region, setRegion] = React.useState<any>({
    latitude: 28.45630,   // Example latitude
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
        onRegionChangeComplete={onRegionChange}
       
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title={"Your Location"}
          draggable
        />
      </MapView>
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {

  React.useEffect(() => {
    const init = async () => {
    };

    init().finally(() => {
      setTimeout(async () => {
        await RNBootSplash.hide({ fade: true });
      }, 2000); // 3000 milliseconds = 3 seconds
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
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
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen name="Details" component={DetailsScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});