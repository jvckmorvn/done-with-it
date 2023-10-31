import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colours from '../config/colours';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>Red jacket for sale</AppText>
        <AppText style={styles.price} numberOfLines={1}>£100</AppText>
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
