// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import { useState } from 'react';
import AuthContext from './auth/context';

export default function App() {
  const [currentUser, setCurrentUser] = useState();

  // setCurrentUser({
  //   id: 1,
  //   name: "Mosh",
  //   email: "mosh@domain.com",
  //   password: "12345",
  //   imageUrl: '../assets/userImages/mosh.jpg'
  // });

  return (
    // <GestureHandlerRootView>
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      <NavigationContainer theme={navigationTheme}>
        {currentUser ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
    // </GestureHandlerRootView>
  );
}
