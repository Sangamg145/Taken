import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import MainNavigator from './src/navigators';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App() {
  React.useEffect(() => {
    const init = async () => {};

    init().finally(() => {
      setTimeout(async () => {
        await RNBootSplash.hide({fade: true});
      }, 2000);
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
