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

const LogIn = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,

        alignItems: 'center',
        paddingTop: 60,
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
          style={{ width: 100, height: 100, marginBottom: 40,borderRadius:12,marginTop:30 }}
        />
        <Text style={{fontSize: 20, fontWeight: '700', color: '#111111'}}>
          Hello Again
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#111111',
            marginTop: 6,
          }}>
          Welcome back, you've been missed
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
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
          marginBottom: 20,
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
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Login"
        filled
        width={'94%'}
        height={48}
        size={16}
        radius={8}
      />
      <View style={{marginBottom: 20}}>
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
          Dont have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              textAlign: 'center',
              color: '#111111',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;
