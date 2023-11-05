import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colours from '../config/colours';
import { useContext } from 'react';
import AuthContext from '../auth/context';

const menuItems = [
  {
    title: 'Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColour: colours.primary
    }
  },
  {
    title: 'Messages',
    icon: {
      name: 'email',
      backgroundColour: colours.secondary
    },
    targetScreen: 'Messages'
  }
];

export default function AccountScreen() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={currentUser.name}
          subtitle={currentUser.email}
          image={currentUser.image}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => 
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColour={item.icon.backgroundColour}
                />
              }
            />
          }
        >
        </FlatList>
      </View>
      <ListItem
        title='Logout'
        IconComponent={
          <Icon
            name='logout'
            backgroundColour='#ffe66d'
          />
        }
        onPress={() => setCurrentUser(null)}
      />
    </Screen>
  );  
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colours.light
  }
});
