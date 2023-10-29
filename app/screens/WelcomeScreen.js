import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/log-red.png')}/>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title='Login'/>
        <AppButton title='Signup' colour='secondary'/>
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
