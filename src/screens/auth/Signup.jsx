/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/generic/Button';
import RadioButtonGroup from './RadioComponent';

const Signup = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        // justifyContent: "space-between",
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40,
        }}>
        <Image
         source={require('../../assets/images.png')}
          style={{ width: 100, height: 100, marginBottom: 10,borderRadius:12 }}
        />
       
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#1111111A',
          borderRadius: 8,
          paddingHorizontal: 12,
          width: '94%',
        }}>
        <Image
          source={require('../../assets/mobile.png')}
          style={{width: 24, height: 24}}
        />
        <TextInput
          placeholder="Enter your full name"
          style={{flex: 1, marginLeft: 10}}
          placeholderTextColor={'#11111166'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#1111111A',
          borderRadius: 8,
          paddingHorizontal: 12,
          width: '94%',
        }}>
        <Image
          source={require('../../assets/mobile.png')}
          style={{width: 24, height: 24}}
        />
        <TextInput
          placeholder="Enter your email"
          style={{flex: 1, marginLeft: 10}}
          placeholderTextColor={'#11111166'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#1111111A',
          borderRadius: 8,
          paddingHorizontal: 12,
          width: '94%',
        }}>
        <Image
          source={require('../../assets/mobile.png')}
          style={{width: 24, height: 24}}
        />
        <TextInput
          placeholder="Enter your Phone"
          style={{flex: 1, marginLeft: 10}}
          placeholderTextColor={'#11111166'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#1111111A',
          borderRadius: 8,
          paddingHorizontal: 12,
          width: '94%',
        }}>
        <Image
          source={require('../../assets/mobile.png')}
          style={{width: 24, height: 24}}
        />
        <TextInput
        type="date"
          placeholder="Enter date of birth"
          style={{flex: 1, marginLeft: 10}}
          placeholderTextColor={'#11111166'}
        />
      </View>
      <RadioButtonGroup />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#1111111A',
          borderRadius: 8,
          paddingHorizontal: 12,
          width: '94%',
        }}>
        <Image
          source={require('../../assets/mobile.png')}
          style={{width: 24, height: 24}}
        />
        <TextInput
          placeholder="Enter your password"
          style={{flex: 1, marginLeft: 10}}
          placeholderTextColor={'#11111166'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#1111111A',
          borderRadius: 8,
          paddingHorizontal: 12,
          width: '94%',
        }}>
        <Image
          source={require('../../assets/mobile.png')}
          style={{width: 24, height: 24}}
        />
        <TextInput
          placeholder="Confirm password"
          style={{flex: 1, marginLeft: 10}}
          placeholderTextColor={'#11111166'}
        />
      </View>
      <Button
        onPress={() => navigation.navigate('OtpScreen')}
        title="Signup"
        filled
        width={'94%'}
        height={48}
        size={16}
        radius={8}
      />
      <View style={{marginBottom: 10}}>
        <Text style={{fontSize: 15, fontWeight: '400', marginTop: 20}}>Or</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
          display: 'flex',
          gap: 15,
          bottom: 0,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#d4d9d6',
            borderRadius: 8,
            width: '45%',
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 12,
          }}>
          <Image source={require('../../assets/facebook.png')} style={{ width: 24, height: 24 }} />
          <Text style={{fontSize: 16, fontWeight: '600', color: '#191919'}}>
            Facebook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: '#d4d9d6',
            borderRadius: 8,
            width: '45%',
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 12,
          }}>
          <Image source={require('../../assets/google.png')} style={{ width: 24, height: 24 }} />

          <Text style={{fontSize: 16, fontWeight: '600', color: '#191919'}}>
            Google
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          display: 'flex',
          gap: 4,
          position: 'absolute',
          bottom: 24,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            textAlign: 'center',
            color: '#111111',
          }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              textAlign: 'center',
              color: '#111111',
            }}>
            LogIn
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
