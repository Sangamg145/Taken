/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect } from 'react';
import { View, Text,  StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service'; // Import Geolocation service

const DetailsScreens: React.FC<any> = () => {
  const [region, setRegion] = useState<any>({
    latitude: 28.45630,   // Example latitude
          longitude: 77.07392, // Example longitude
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
  });

  useEffect(() => {
    // Function to request location permission
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission Required',
            message: 'This app needs access to your location to show it on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // If permission is granted, get current location
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    // Call the function to request permission when component mounts
    requestLocationPermission();

    // Clean up function
    return () => {
      Geolocation.stopObserving(); // Stop observing when component unmounts
    };
  }, []);

  // Function to get current location
  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion((prevRegion:any) => ({
          ...prevRegion,
          latitude,
          longitude,
        }));
      },
      (error) => {
        console.error('Error getting current location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  const onMapReady = useCallback(() => {
    console.log('Map is ready');
  }, []);

  const onRegionChange = useCallback((newRegion:any) => {
    setRegion(newRegion);
    console.log('Region changed:', newRegion);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Details Screen: {region?.latitude}</Text>
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
          title="Your Location"
          draggable
        />
      </MapView>
    </View>
  );
};

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

export default DetailsScreens;
