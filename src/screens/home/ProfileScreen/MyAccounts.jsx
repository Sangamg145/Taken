import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountsScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profileImage}
        />
        <Text style={[styles.profileName, isDarkMode && styles.darkText]}>
          John Doe
        </Text>
        <Text style={[styles.profileEmail, isDarkMode && styles.darkText]}>
          john.doe@example.com
        </Text>
      </View>

      {/* Account Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem}>
          <Icon
            name="person-outline"
            size={24}
            color={isDarkMode ? '#fff' : '#333'}
          />
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Icon
            name="lock-closed-outline"
            size={24}
            color={isDarkMode ? '#fff' : '#333'}
          />
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Icon
            name="card-outline"
            size={24}
            color={isDarkMode ? '#fff' : '#333'}
          />
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            Payment Methods
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Icon
            name="receipt-outline"
            size={24}
            color={isDarkMode ? '#fff' : '#333'}
          />
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            Orders
          </Text>
        </TouchableOpacity>
      </View>

      {/* Settings and Logout */}
      <View style={styles.settingsContainer}>
        <View style={styles.toggleContainer}>
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            Dark Mode
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <TouchableOpacity style={styles.optionItem}>
          <Icon
            name="help-circle-outline"
            size={24}
            color={isDarkMode ? '#fff' : '#333'}
          />
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            Help Center
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Icon
            name="log-out-outline"
            size={24}
            color={isDarkMode ? '#fff' : '#333'}
          />
          <Text style={[styles.optionText, isDarkMode && styles.darkText]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
  optionsContainer: {
    marginVertical: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  settingsContainer: {
    marginVertical: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  darkText: {
    color: '#fff',
  },
});

export default AccountsScreen;
