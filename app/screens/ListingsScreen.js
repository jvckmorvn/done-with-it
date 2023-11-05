import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colours from '../config/colours';
import routes from '../navigation/routes';
import getListings from '../api/listings';
import { useEffect, useState } from 'react';

export default function ListingsScreen({navigation}) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, [])
  
  async function loadListings() {
    const data = getListings();
    setListings(data);
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Object.values(listings)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`£${item.price.toString()}`}
            imageUrl={item.images[0].fileName}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  ); 
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colours.light
  }
});
