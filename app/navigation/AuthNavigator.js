import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Signup' component={SignupScreen}/>
    </Stack.Navigator>
  );
}
