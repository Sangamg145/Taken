import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import MainNavigator from './src/navigators';

function App() {
  React.useEffect(() => {
    const init = async () => {};

    init().finally(() => {
      setTimeout(async () => {
        await RNBootSplash.hide({fade: true});
      }, 2000); // 3000 milliseconds = 3 seconds
    });
  }, []);
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
export default App;
