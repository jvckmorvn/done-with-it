import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <GestureHandlerRootView>
      <LoginScreen/>
    </GestureHandlerRootView>
  );
}
