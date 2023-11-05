import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import colours from '../config/colours';
import routes from '../navigation/routes';
import api from '../api/listings';
import LoadingWheel from '../components/LoadingWheel';
import useApi from '../hooks/useApi';

export default function ListingsScreen({navigation}) {
  const { data: listings, loading, request: loadListings } = useApi(api.getListings);

  useEffect(() => {
    const listings = loadListings();
  }, [])

  return (
    <>
      <LoadingWheel visible={loading}/>
      {!loading && (
        <View style={styles.listContainer}>
          <FlatList
            data={listings}
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
        </View>
      )}
    </>
  ); 
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colours.light,
    padding: 12,
    paddingBottom: 0,
    marginTop: 24
  }
});
