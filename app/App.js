import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <LoginScreen/>
    </GestureHandlerRootView>
  );
}
