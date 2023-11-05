import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colours from "../config/colours";

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={35} color={colours.white}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.danger,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
