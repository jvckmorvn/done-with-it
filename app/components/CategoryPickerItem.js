import { StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

export default function CategoryPickerItem({item, onPress}) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    alignItems: 'center',
    width: '33%'
  },
  label: {
    marginTop: 6,
    textAlign: 'center'
  }
});
