import React from 'react';
import {View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function TakenBottomSheet({refRBSheet, height, children}) {
  return (
    <View>
      <RBSheet
        height={height}
        ref={refRBSheet}
        useNativeDriver={false} // Disable native driver for animations
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        {children}
      </RBSheet>
    </View>
  );
}
