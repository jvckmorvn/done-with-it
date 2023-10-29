import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colours from '../config/colours';

export default function AppButton({title, onPress, colour = 'primary'}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colours[colour]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );  
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.primary,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginVertical: 10,
    width: '100%'
  },
  text: {
    color: colours.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});
