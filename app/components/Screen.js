import { SafeAreaView, View } from 'react-native';

export default function Screen({children, style}) {
  return (
    <SafeAreaView style={style}>
      <View style={style}>
        {children}
      </View>
    </SafeAreaView>
  );
}
