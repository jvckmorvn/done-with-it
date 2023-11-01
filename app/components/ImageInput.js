import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import colours from '../config/colours';
import { useEffect } from 'react';

export default function ImageInput({imageUri, onChangeImage}) {
  useEffect(() => {
    requestPermission();
  }, [])

  async function requestPermission() {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert('Enable camera permissions in order to use this feature.');
    }
  }

  function handlePress() {
    if (!imageUri) {
      selectImage();
    }
  }

  async function selectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      } else {
        Alert.alert('Delete', 'Are you sure you want to delete this image?', [
          { text: 'Cancel' },
          { text: 'Confirm', onPress: () => onChangeImage(null) }
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? <Image source={{uri: imageUri}} style={styles.image}/> : <MaterialCommunityIcons name='camera' size={40} color={colours.medium}/>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.light,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
