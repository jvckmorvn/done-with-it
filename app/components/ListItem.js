import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colours from "../config/colours";

export default function ListItem({image, title, subtitle}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subtitle: {
    color: colours.medium
  },
  title: {
    fontWeight: '500'
  }
});
