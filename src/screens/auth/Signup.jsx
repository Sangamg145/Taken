/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import CheckboxExample from '../../components/generic/CustomCheckbox';
import { useDispatch } from 'react-redux';
import { authSignup } from '../../store/actions/auth';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [name1, setName1] = useState('');

  const getBackgroundColor = (selectedGender) => {
    if (gender === selectedGender) {
      if (selectedGender === 'Male') return '#ADD8E6'; // Blue
      if (selectedGender === 'Female') return '#FFC0CB'; // Pink
      return '#D3D3D3'; // Gray for 'Other'
    }
    return '#FFFFFF'; // Default background color
  };

  const handleSubmit = () => {
    if (name && email && phone && dob && password) {
      dispatch(authSignup(name, email, phone, dob, password, gender, navigation));
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      <ScrollView contentContainerStyle={{alignItems: 'center', paddingVertical: 20}}>
        {/* Top Section */}
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 40}}>
            <Image
              source={require('../../assets/images.png')}
              style={{width: 100, height: 100, marginBottom: 10, borderRadius: 12}}
            />
          </View>
          {name1 && <Text>{name1} is awesome name</Text>}
          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/mobile.png')} style={styles.iconStyle} />
            <TextInput
              placeholder="Enter your full name"
              style={styles.textInput}
              placeholderTextColor={'#11111166'}
              onChangeText={(text) => setName(text)} // Update the name as the user types
              onBlur={() => setName1(name)}
              value={name}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/mobile.png')} style={styles.iconStyle} />
            <TextInput
              placeholder="Enter your email"
              style={styles.textInput}
              placeholderTextColor={'#11111166'}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/mobile.png')} style={styles.iconStyle} />
            <TextInput
              placeholder="Enter your Phone"
              style={styles.textInput}
              placeholderTextColor={'#11111166'}
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/mobile.png')} style={styles.iconStyle} />
            <TextInput
              placeholder="Enter date of birth"
              style={styles.textInput}
              placeholderTextColor={'#11111166'}
              onChangeText={(text) => setDob(text)}
              value={dob}
            />
          </View>

          {/* Gender Selection */}
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <TouchableOpacity
              style={{
                backgroundColor: getBackgroundColor('Male'),
                padding: 10,
                borderRadius: 8,
                marginHorizontal: 5,
                width: '28%',
                alignItems: 'center',
              }}
              onPress={() => setGender('Male')}>
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: getBackgroundColor('Female'),
                padding: 10,
                borderRadius: 8,
                marginHorizontal: 5,
                width: '28%',
                alignItems: 'center',
              }}
              onPress={() => setGender('Female')}>
              <Text>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: getBackgroundColor('Other'),
                padding: 10,
                borderRadius: 8,
                marginHorizontal: 5,
                width: '28%',
                alignItems: 'center',
              }}
              onPress={() => setGender('Other')}>
              <Text>Other</Text>
            </TouchableOpacity>
          </View>

          {gender === 'Male' && <CheckboxExample />}

          {/* Password Field */}
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/mobile.png')} style={styles.iconStyle} />
            <TextInput
              placeholder="Enter your password"
              style={styles.textInput}
              placeholderTextColor={'#11111166'}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>

          {/* Signup Button */}
          <Button
            onPress={handleSubmit}
            title="Signup"
            color="#0066CC"
            style={styles.signupButton}
          />

          <View style={{marginBottom: 10}}>
            <Text style={{fontSize: 15, fontWeight: '400', marginTop: 20}}>Or</Text>
          </View>

          {/* Social Buttons */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../../assets/facebook.png')} style={styles.socialIcon} />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../../assets/google.png')} style={styles.socialIcon} />
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomTextContainer}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>LogIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
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
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    width: '94%',
    gap: 15,
  },
  socialButton: {
    borderWidth: 2,
    borderColor: '#d4d9d6',
    borderRadius: 8,
    width: '45%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  socialText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#191919',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  accountText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#111111',
  },
  loginText: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 4,
    color: '#111111',
  },
  signupButton: {
    width: '94%',
    height: 48,
    borderRadius: 8,
  },
};

export default Signup;
