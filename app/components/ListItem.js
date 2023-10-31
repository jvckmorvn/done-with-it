import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import AppText from './AppText';
import colours from '../config/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListItem({image, IconComponent, title, subtitle, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colours.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image}/>}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
          </View>
          <MaterialCommunityIcons name='chevron-right' size={24} color={colours.medium}/>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    backgroundColor: colours.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  subtitle: {
    color: colours.medium
  },
  title: {
    fontWeight: '500'
  }
});
