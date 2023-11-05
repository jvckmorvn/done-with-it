import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colours from '../config/colours';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size={30}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color='white' size={34}/>
      </View>
      <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 20
  },
  container: {
    backgroundColor: colours.black,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    left: 20
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
