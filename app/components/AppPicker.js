import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import { useState } from 'react';
import Screen from './Screen';
import PickerItem from './PickerItem';

export default function AppPicker({icon, items, onSelectItem, numberOfColumns = 1, PickerItemComponent = PickerItem, placeholder, selectedItem, width = '100%'}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width}]}>
          {icon && 
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colours.medium}
              style={styles.icon}
            />
          }
          {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
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
            numColumns={numberOfColumns}
            renderItem={({item}) => 
              <PickerItemComponent
                item={item}
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
    padding: 16,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  placeholder: {
    color: defaultStyles.colours.medium,
    flex: 1
  },
  text: {
    flex: 1
  }
});
