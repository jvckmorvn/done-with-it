import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colours from '../config/colours';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen({route}) {
  const listing = route.params;

  return (
    <View>
      {listing.images.map(image => 
        <Image
          key={listing.images.indexOf(image)}
          style={styles.image}
          source={image.fileName}
        />
      )}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>{listing.title}</AppText>
        <AppText style={styles.price} numberOfLines={1}>£{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem image={require('../assets/mosh.jpg')} title='Jack Moran' subtitle='5 listings'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  price: {
    color: colours.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  userContainer: {
    marginVertical: 34
  }
});
