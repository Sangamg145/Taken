import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const OTPVerificationScreen: React.FC = () => {
  const [phoneOtp, setPhoneOtp] = useState<string>('');
  const [emailOtp, setEmailOtp] = useState<string>('');
  // const refRBSheet = useRef();
  const handleOtpChange =
    (setOtp: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string) => {
      if (/^\d*$/.test(value) && value.length <= 6) {
        setOtp(value);
      }
    };

  const handleVerify = () => {
    // Handle OTP verification logic here
    console.log('Phone OTP entered:', phoneOtp);
    console.log('Email OTP entered:', emailOtp);
    // navigation.navigate('FaceDetection');
    // refRBSheet.current.open();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images.png')} // Update with your image path
        style={styles.logo}
      />
      <Text style={styles.title}>Enter the 6-digit code</Text>
      <Text style={styles.subtitle}>
        We've sent it to your mobile number and email.
      </Text>

      <Text style={styles.label}>Phone OTP</Text>
      <TextInput
        style={styles.otpInput}
        keyboardType="number-pad"
        maxLength={6}
        value={phoneOtp}
        onChangeText={handleOtpChange(setPhoneOtp)}
        textAlign="center"
      />

      <Text style={styles.label}>Email OTP</Text>
      <TextInput
        style={styles.otpInput}
        keyboardType="number-pad"
        maxLength={6}
        value={emailOtp}
        onChangeText={handleOtpChange(setEmailOtp)}
        textAlign="center"
      />

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
      {/* <TakenBottomSheet refRBSheet={refRBSheet} height={280}>
        <ScrollView style={{padding: 12}}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 14,
            }}>
            Create password
          </Text>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/mobile.png')}
              style={styles.iconStyle}
            />
            <TextInput
              placeholder="Enter your password"
              style={styles.textInput}
              placeholderTextColor={'#11111166'}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/mobile.png')}
              style={styles.iconStyle}
            />
            <TextInput
              placeholder="Confirm password"
              style={styles.textInput}
              placeholderTextColor={'#11111166'}
            />
          </View>
        </ScrollView>
      </TakenBottomSheet> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // White background
  },
  logo: {
    width: 80, // Adjusted size
    height: 80, // Adjusted size
    marginBottom: 20,
  },
  title: {
    fontSize: 22, // Smaller font size
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 14, // Smaller font size
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16, // Smaller font size
    fontWeight: '600',
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: '#555',
  },
  otpInput: {
    width: '80%',
    height: 45, // Smaller height
    fontSize: 20, // Smaller font size
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    letterSpacing: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  verifyButton: {
    width: '80%',
    height: 45, // Smaller height
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16, // Smaller font size
    fontWeight: 'bold',
  },
  resendText: {
    marginTop: 20,
    color: '#3b5998',
    fontSize: 14, // Smaller font size
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1111111A',
    borderRadius: 8,
    paddingHorizontal: 12,
    width: '94%',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
  },
});

export default OTPVerificationScreen;
