import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate(routes.LOGIN)}/>
        <AppButton title='Signup' colour='secondary' onPress={() => navigation.navigate(routes.SIGNUP)}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center'
  },
  tagline: {
    fontSize: 24,
    fontWeight: '600',
    paddingVertical: 24
  }
});
