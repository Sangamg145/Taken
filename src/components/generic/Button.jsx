import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
export default function Button({
  title,
  height,
  width,
  filled,
  onPress,
  backgroundColor,
  size,
  radius,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: width ? width : 64,
          height: height ? height : 24,
          backgroundColor: filled ? '#FFCCEA' : 'transparent',
          borderRadius: radius ? radius : 20,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.title,
          {color: filled ? '#191919' : '#FFCCEA', fontSize: size ? size : 9},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 0,
    borderWidth: 1,
    borderColor: '#FFCCEA',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    fontWeight: '400',
    textAlign: 'center',
  },
});
