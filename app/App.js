// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';

export default function App() {

  return (
    // <GestureHandlerRootView>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator/>
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
}
