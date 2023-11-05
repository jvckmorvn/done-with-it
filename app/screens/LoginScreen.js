import { Image, StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import authApi from '../api/auth';
import AuthContext from '../auth/context';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

export default function LoginScreen() {
  const { setCurrentUser } = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  function handleSubmit({email, password}) {
    const user = authApi.login({email, password});

    if (!user) {
      return setLoginFailed(true);
    }

    setLoginFailed(false);
    setCurrentUser(user)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
      <AppForm
       initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email address'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='key'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Login'/>
      </AppForm>
    </Screen>
  ); 
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 40
  }
});
