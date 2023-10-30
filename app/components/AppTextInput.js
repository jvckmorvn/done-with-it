import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colours.medium} style={styles.icon}/>}
      <TextInput style={defaultStyles.text} {...otherProps}/>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colours.light,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
});
