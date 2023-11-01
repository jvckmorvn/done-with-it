import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListingEditScreen from './screens/ListingEditScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ListingEditScreen/>
    </GestureHandlerRootView>
  );
}
