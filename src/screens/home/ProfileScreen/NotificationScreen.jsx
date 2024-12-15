import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const notifications = [
  {
    id: '1',
    title: 'New Feature Available!',
    description: 'Check out the latest update in your app.',
    time: '2 hours ago',
    icon: 'ios-gift-outline',
  },
  {
    id: '2',
    title: 'Profile Updated',
    description: 'Your profile has been successfully updated.',
    time: '1 day ago',
    icon: 'ios-person-outline',
  },
  {
    id: '3',
    title: 'Welcome to the App!',
    description: 'We are glad to have you onboard.',
    time: '3 days ago',
    icon: 'ios-happy-outline',
  },
];

const NotificationScreen = () => {
  const renderNotificationItem = ({item}) => (
    <View style={styles.notificationItem}>
      <Icon
        name={item.icon}
        size={28}
        color="#4CAF50"
        style={styles.notificationIcon}
      />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        {notifications.length > 0 && (
          <TouchableOpacity>
            <Text style={styles.markAllRead}>Mark All as Read</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Notification List */}
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={renderNotificationItem}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyState}>
          <Image
            source={{uri: 'https://via.placeholder.com/150'}}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>No Notifications</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  markAllRead: {
    fontSize: 14,
    color: '#4CAF50',
  },
  listContainer: {
    paddingVertical: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  notificationIcon: {
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default NotificationScreen;
