/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {authLogin} from '../../store/actions/auth';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!email || !password) {
      ToastAndroid.show('Please enter email and password.', ToastAndroid.SHORT);
      return;
    }
    dispatch(authLogin(email, password));
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: 60,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}>
            <Image
              source={require('../../assets/images.png')}
              style={{
                width: 100,
                height: 100,
                marginBottom: 40,
                borderRadius: 12,
                marginTop: 30,
              }}
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

          <View style={{width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
                borderWidth: 1,
                borderColor: '#1111111A',
                borderRadius: 8,
                paddingHorizontal: 12,
                width: '100%',
              }}>
              <Image
                source={require('../../assets/mobile.png')}
                style={{width: 24, height: 24}}
              />
              <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
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
                width: '100%',
              }}>
              <Image
                source={require('../../assets/mobile.png')}
                style={{width: 24, height: 24}}
              />
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{flex: 1, marginLeft: 10}}
                placeholderTextColor={'#11111166'}
              />
            </View>

            <Button
              onPress={handleLogin}
              title="Login"
              filled
              width={'100%'}
              height={48}
              size={16}
              radius={8}
            />

            <View style={{marginBottom: 20, alignItems: 'center'}}>
              <Text style={{fontSize: 15, fontWeight: '400', marginTop: 20}}>
                Or
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderColor: '#d4d9d6',
                  borderRadius: 8,
                  width: '48%',
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/facebook.png')}
                  style={{width: 24, height: 24}}
                />
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#191919'}}>
                  Facebook
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderColor: '#d4d9d6',
                  borderRadius: 8,
                  width: '48%',
                  height: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/google.png')}
                  style={{width: 24, height: 24}}
                />
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#191919'}}>
                  Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
                textAlign: 'center',
                color: '#111111',
              }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  textAlign: 'center',
                  color: '#111111',
                  marginLeft: 4,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogIn;
