import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  PhotoFile,
} from 'react-native-vision-camera';

const {width, height} = Dimensions.get('window');

const FaceDetection: React.FC = () => {
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

  const resetCapture = () => {
    setCapturedPhoto(null);
  };

  return (
    <View style={styles.container}>
      {!capturedPhoto ? (
        <>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
          />
          {/* Face Frame Overlay */}
          <View style={styles.overlay}>
            <View style={styles.faceFrame}>
              <Text style={styles.frameText}>
                Align your face within the frame
              </Text>
            </View>
          </View>
        </>
      ) : (
        <View style={styles.previewContainer}>
          <Image
            source={{uri: `file://${capturedPhoto.path}`}}
            style={styles.preview}
          />
          <TouchableOpacity style={styles.closeButton} onPress={resetCapture}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Header with Preview and Toggle Icons */}
      {/* Capture Icon */}
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
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: width * 0.8,
    height: height * 0.8,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
  },
  faceFrame: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: -30,
  },
});

export default FaceDetection;
