/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import TakenBottomSheet from '../../../components/generic/CustomBottomSheet';
// import TakenBottomSheet from '../../../components/generic/BottomSheet';
// A reusable component for event card
const EventCard = ({event, index, colors}) => {
  const backgroundColor = colors[index % colors.length]; // Cycle through colors array
  return (
    <View style={[styles.eventCard, {backgroundColor}]}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventTime}>{event.time}</Text>
      <Image
        source={require('../../../assets/men1.webp')}
        style={styles.eventImage}
      />
    </View>
  );
};

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [showEvents, setShowEvents] = useState(false);
  const refRBSheet = useRef();

  // Sample events for specific dates
  const events = {
    '2024-09-20': [
      {title: "John's Birthday", time: 'All day'},
      {title: 'Party all night', time: 'All day'},
      {title: 'Office tomorrow', time: 'All day'},
      {title: 'Happy Holi', time: 'All day'},
      {title: 'Test', time: 'All day'},
      {title: 'Test123', time: 'All day'},
    ],
    '2024-09-21': [{title: 'Team Meeting', time: '10:00 AM'}],
    '2024-09-22': [{title: 'Project Deadline', time: '5:00 PM'}],
  };

  // Array of background colors for event cards
  const colors = [
    '#FFECB3',
    '#C8E6C9',
    '#FFCDD2',
    '#BBDEFB',
    '#F8BBD0',
    '#D1C4E9',
    '#FFE0B2',
  ];

  // Show events when a day is pressed
  const handleDayPress = day => {
    setSelectedDate(day.dateString);
    setShowEvents(true); // Show the events list when the date is selected
  };

  // Render each event item using EventCard component
  const renderEvent = ({item, index}) => (
    <EventCard event={item} index={index} colors={colors} />
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/men1.webp')}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>January, 2020</Text>
        <View style={styles.headerRight}>
          <Image
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png',
            }}
            style={styles.icon}
          />
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: 'blue',
          },
        }}
        dayComponent={({date, state}) => {
          // Custom day for specific date (e.g., 2024-09-20)
          if (date.dateString === '2024-09-20') {
            return (
              <TouchableOpacity onPress={() => handleDayPress(date)}>
                <View style={styles.cakeIconContainer}>
                  <Image
                    source={{
                      uri: 'https://img.icons8.com/emoji/48/000000/birthday-cake-emoji.png',
                    }}
                    style={styles.cakeIcon}
                  />
                </View>
              </TouchableOpacity>
            );
          }

          // Default day rendering
          return (
            <TouchableOpacity onPress={() => handleDayPress(date)}>
              <View style={styles.dateContainer}>
                <Text
                  style={[
                    styles.dateText,
                    state === 'today' && styles.todayText,
                  ]}>
                  {date.day}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Event List */}
      {showEvents && (
        <View style={styles.eventList}>
          <Text style={styles.eventHeader}>Events on {selectedDate}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={events[selectedDate] || []}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderEvent}
            ListEmptyComponent={() => (
              <Text style={styles.noEventsText}>No events for this day.</Text>
            )}
          />
        </View>
      )}
      <TakenBottomSheet refRBSheet={refRBSheet}>
        <TouchableOpacity
          style={{width: 30}}
          onPress={() => refRBSheet.current.close()}>
          <View style={{marginTop: 8, marginLeft: 12}}>
            <Image
              source={{
                uri: 'https://static-00.iconduck.com/assets.00/circle-cross-icon-1024x1024-8o50movz.png',
              }}
              style={styles.cakeIcon}
            />
          </View>
        </TouchableOpacity>
        <View style={{padding: 12, height: 500}}>
          <Text
            style={{
              color: '#000',
              fontSize: 24,
              fontWeight: '600',
              marginBottom: 16,
            }}>
            Lunch with Developer
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 12}}>
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
                backgroundColor: '#B7E0FF',
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 16,
              }}>
              Birthday
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
                backgroundColor: '#EECAD5',
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 16,
              }}>
              Workout
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 12,
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{width: '100%', marginTop: 320}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: '500',
                  textAlign: 'center',
                  backgroundColor: '#A594F9',
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                  width: '100%',
                  position: 'absolute',
                  top: 0,
                  borderRadius: 16,
                }}>
                Add Event
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TakenBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  headerImage: {
    width: 28,
    height: 28,
    borderRadius: 20,
  },
  headerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 12,
  },
  cakeIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cakeIcon: {
    width: 24,
    height: 24,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  todayText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  eventList: {
    marginTop: 20,
    padding: 16,
    marginBottom: 50,
  },
  eventHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventCard: {
    width: '80%',
    alignSelf: 'flex-end',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  eventTime: {
    fontSize: 14,
    color: '#777',
  },
  eventImage: {
    width: 24,
    height: 24,
    borderRadius: 20,
    marginTop: 10,
  },
  noEventsText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MyCalendar;
