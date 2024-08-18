import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  PhotoFile,
} from 'react-native-vision-camera';

const CameraComponent: React.FC = () => {
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
    'back',
  );
  const [capturedPhoto, setCapturedPhoto] = useState<PhotoFile | null>(null);
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice(cameraPosition);

  const permission = useCameraPermission();

  useEffect(() => {
    if (permission !== 'authorized') {
      (async () => {
        await Camera.requestCameraPermission();
      })();
    }
  }, [permission]);

  if (!device) {
    return (
      <View style={styles.container}>
        <Text>Loading Camera...</Text>
      </View>
    );
  }

  const toggleCamera = () => {
    setCameraPosition(prev => (prev === 'back' ? 'front' : 'back'));
  };

  const capturePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      setCapturedPhoto(photo);
    }
  };

  const openGallery = () => {
    // Since react-native-vision-camera does not include gallery functionality,
    // you can only handle captured photos and their preview within this component.
    // You could implement your own gallery view if needed, but it would require managing storage access manually.
    console.log('Gallery button pressed');
  };

  return (
    <View style={styles.container}>
      {!capturedPhoto ? (
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
        />
      ) : (
        <View style={styles.previewContainer}>
          <Image
            source={{uri: `file://${capturedPhoto.path}`}}
            style={styles.preview}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setCapturedPhoto(null)}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Header with Preview and Toggle Icons */}
      {!capturedPhoto && (
        <View style={styles.header}>
          <TouchableOpacity style={styles.previewIcon} onPress={openGallery}>
            <Image
              style={{width: 32, height: 32}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1040/1040241.png', // gallery icon
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleIcon} onPress={toggleCamera}>
            <Image
              style={{width: 32, height: 32}}
              source={{
                uri: 'https://static.thenounproject.com/png/78816-200.png',
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      {/* Capture Icon */}
      {!capturedPhoto && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.captureIcon} onPress={capturePhoto}>
            <Image
              style={{width: 64, height: 64}}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2022/05/27/11/17/camera-7224946_1280.png',
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 16,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  previewIcon: {
    padding: 10,
  },
  toggleIcon: {
    padding: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  captureIcon: {
    padding: 10,
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CameraComponent;
