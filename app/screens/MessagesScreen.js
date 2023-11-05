import { FlatList } from 'react-native';
import { useState } from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/userImages/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/userImages/mosh.jpg')
  }
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  
  function handleDelete(message) {
    setMessages(messages.filter((m) => m.id !== message.id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()} renderItem={({item}) => 
          <ListItem 
            title={item.title}
            subtitle={item.description}
            image={item.image}
            renderRightActions={() => 
              <ListItemDeleteAction onPress={() => handleDelete(item)}/>
            }
          />
        }
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  ); 
}
