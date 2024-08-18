import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const OTPVerificationScreen: React.FC = ({navigation}: any) => {
  const [phoneOtp, setPhoneOtp] = useState<string>('');
  const [emailOtp, setEmailOtp] = useState<string>('');

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
    navigation.navigate('FaceDetection');
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  otpInput: {
    width: '80%',
    height: 50,
    fontSize: 24,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    letterSpacing: 10,
  },
  verifyButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    marginTop: 20,
    color: '#007bff',
    fontSize: 16,
  },
});

export default OTPVerificationScreen;
