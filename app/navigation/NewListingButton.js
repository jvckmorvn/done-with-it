import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colours from '../config/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colours.white} size={44}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colours.primary,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: colours.white,
    borderWidth: 10,
    bottom: 24
  }
});
