import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import ListingEditScreen from './screens/ListingEditScreen';
import ViewImageScreen from './screens/ViewImageScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ViewImageScreen/>
    </GestureHandlerRootView>
  );
}
