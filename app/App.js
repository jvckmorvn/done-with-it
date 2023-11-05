// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import ListingsScreen from './screens/ListingsScreen';
import { Button } from 'react-native';
import getListings from './api/listings';

export default function App() {

  return (
    // <GestureHandlerRootView>
      <NavigationContainer theme={navigationTheme}>
        {/* <AuthNavigator/> */}
        <AppNavigator/>
        {/* <Button title='Click me!' onPress={getListings}/> */}
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
}
