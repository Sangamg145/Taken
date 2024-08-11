/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

const MyMapComponent = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
  });

  const onMapReady = () => {
    // Handle map ready event
  };

  const onRegionChange = (newRegion:any) => {
    // Handle region change event
    setRegion(newRegion);
  };

  return (
    <View style={styles.container}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MyMapComponent;
