import { FlatList, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import { useState } from 'react';
import Screen from './Screen';

export default function AppPicker({icon, items, onSelectItem, placeholder, selectedItem}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && 
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colours.medium}
              style={styles.icon}
            />
          }
          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colours.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)}/>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => 
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}/>
            }
          />
        </Screen>
      </Modal>
    </>
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
  },
  text: {
    flex: 1
  }
});