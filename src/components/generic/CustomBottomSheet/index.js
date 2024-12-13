import React from 'react';
import {View, Button, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function TakenBottomSheet({refRBSheet, height}) {
  return (
    <View>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
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
        <Text>dfgdfgb</Text>
      </RBSheet>
    </View>
  );
}
