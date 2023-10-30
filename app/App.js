import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './components/Screen';
import { useState } from 'react';
import AppPicker from './components/AppPicker';

const categories =[
  {
    label: 'Furniture',
    value: 1
  },
  {
    label: 'Clothing',
    value: 2
  },
  {
    label: 'Electronics',
    value: 3
  }
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <GestureHandlerRootView>
      <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          items={categories}
          icon='apps'
          placeholder='Category'
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
