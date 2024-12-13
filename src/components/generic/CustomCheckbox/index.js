import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {Ionicons} from '@expo/vector-icons'; // You can replace this with other icons

const CustomCheckbox = ({label, checked, onChange}) => {
  return (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={onChange}
      activeOpacity={0.8}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {/* {checked && <Ionicons name="checkmark" size={16} color="#fff" />} */}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <View style={styles.container}>
      <CustomCheckbox
        label="Are you belongs to the community for which you can be with more than one Female"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    paddingHorizontal: 28,
    marginBottom: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#007BFF', // You can change this to any color you like
    borderColor: '#007BFF',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default CheckboxExample;
