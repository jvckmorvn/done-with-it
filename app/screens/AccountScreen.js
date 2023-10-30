import { FlatList, StyleSheet, View } from 'react-native';
import Icon from '../components/Icon';
import ListItem from "../components/ListItem";
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from "../components/Screen";
import colours from '../config/colours';

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
    }
  }
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='My title'
          subtitle='My subtitle'
          IconComponent={<Icon name='email'/>}
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