import Swiper from 'react-native-swiper';
import {useCameraDevice, useCameraPermission} from 'react-native-vision-camera';
import ChatScreen from './ChatScreen';
import CameraComponent from './CameraScreen';
import {Button, StyleSheet, Text, View} from 'react-native';

function HomeScreen({navigation}: any) {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) return <Text>Permission check...</Text>;
  if (device == null) return <Text>back cam Loading...</Text>;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Swiper index={1} showsPagination={false} loop={false}>
        <View style={{flex: 1}}>
          <ChatScreen />
        </View>
        <CameraComponent />
        <View style={styles.container}>
          <Text style={styles.text}>Story Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      </Swiper>
    </View>
  );
}
export default HomeScreen;

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
