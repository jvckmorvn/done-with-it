import { Image, StyleSheet, View } from 'react-native';
import colours from '../config/colours';
import AppText from './AppText';

export default function Card({title, subtitle, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    backgroundColor: colours.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
  },
  subtitle: {
    color: colours.secondary,
    fontWeight: 'bold'
  },
  title: {
    marginBottom: 6
  }
});
