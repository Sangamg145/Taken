/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import Swiper from 'react-native-swiper';
import {useCameraDevice, useCameraPermission} from 'react-native-vision-camera';
import ChatScreen from './ChatScreen';
import CameraComponent from './CameraScreen';
import { Text, TouchableOpacity, View} from 'react-native';
// import MyCalendar from '.';
import {useRef, useState} from 'react';
import MyCalendar from './CalendarScreen';
import ProfileScreen from './ProfileScreen';
function HomeScreen({navigation}) {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();
  const [selectedTab, setSelectedTab] = useState(0); // Default selected tab

  const tabs = [
    {id: 1, name: 'Chat'},
    {id: 2, name: 'Camera'},
    {id: 3, name: 'Calendar'},
    {id: 4, name: 'Profile'},
  ];
  const panelRef = useRef<any>(null);
  if (!hasPermission) return <Text>Permission check...</Text>;
  if (device == null) return <Text>back cam Loading...</Text>;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Swiper index={selectedTab} showsPagination={false} loop={true}>
        {/* chat */}
        <View style={{flex: 1}}>
          <ChatScreen />
        </View>
        {/* camera */}
        <View style={{flex: 1}}>
          <CameraComponent />
        </View>
        {/* profile */}
        <ProfileScreen navigation={navigation} />

        {/* calendar */}
        <View style={{flex: 1}}>
          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              alignItems: 'center',
              padding: 16,
            }}>
            <Image
              source={require('../../assets/men1.webp')}
              style={{width: 28, height: 28, borderRadius: 20}}
            />
            <Text
              style={{
                color: '#000',
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              January, 2020
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'center',
              }}>
              <Image
                source={{uri:"https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"}}
                style={{width: 28, height: 28}}
              />
              <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
                <Image
                 source={{uri:"https://cdn-icons-png.flaticon.com/512/992/992651.png"}}
                  style={{width: 30, height: 30, borderRadius: 20}}
                />
              </TouchableOpacity>
            </View>
          </View> */}
          <MyCalendar />
          {/* <BottomSheet sliderMinHeight={0} sliderMaxHeight={500} ref={(ref:any) => panelRef.current = ref}>
            <View style={{padding: 0,height:500}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 24,
                  fontWeight: '600',marginBottom:16
                }}>
                Lunch with Developer
              </Text>
<View style={{display:'flex',flexDirection:'row',gap:12}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: '500',
                  textAlign: 'center',
                  backgroundColor:'#B7E0FF',
                  paddingVertical:4,
                  paddingHorizontal:12,borderRadius:16
                }}>
                Birthday
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: '500',
                  textAlign: 'center',
                  backgroundColor:'#EECAD5',
                  paddingVertical:4,
                  paddingHorizontal:12,borderRadius:16
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
            
                <TouchableOpacity style={{width:'100%',marginTop:320,}}>
                <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: '500',
                  textAlign: 'center',
                  backgroundColor:'#A594F9',
                  paddingVertical:4,
                  paddingHorizontal:12,width:'100%',position:'absolute',top:0,borderRadius:16
                }}>
               Add Event
              </Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheet> */}
        </View>
      </Swiper>
      <View style={{height: 50, width: '100%', flexDirection: 'row'}}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.id}
            style={{
              width: '25%', // Equally distributes the tabs
              alignItems: 'center',
              justifyContent: 'center',
              borderTopWidth: tab.id === selectedTab ? 1 : 0,
              borderTopColor: tab.id === selectedTab ? '#f0f' : '#fff',
            }}
            onPress={() => setSelectedTab(tab.id)} // Set the selected tab on press
          >
            <Text style={{paddingVertical: 12}}>{tab.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
export default HomeScreen;
