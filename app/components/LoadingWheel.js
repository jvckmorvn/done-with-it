import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function LoadingWheel({ visible = false}) {
  if (!visible) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size='large'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});
