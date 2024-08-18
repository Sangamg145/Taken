/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.box,
          selectedGender === 'Male' && styles.selectedBox,
        ]}
        onPress={() => setSelectedGender('Male')}
      >
        <Text style={[
          styles.text,
          selectedGender === 'Male' && styles.selectedText,
        ]}>
          Male
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.box,
          selectedGender === 'Female' && styles.selectedBox,
        ]}
        onPress={() => setSelectedGender('Female')}
      >
        <Text style={[
          styles.text,
          selectedGender === 'Female' && styles.selectedText,
        ]}>
          Female
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent:'space-between',
    gap:12
  },
  box: {
    padding: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  selectedBox: {
    borderColor: '#1E90FF',
    backgroundColor: '#E6F7FF',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  selectedText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});

export default GenderSelection;
