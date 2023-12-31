import { Image, Platform, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import { 
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton 
} from '../components/forms';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function SignupScreen() {
  return (
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
        <Form
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon='account'
            name='name'
            placeholder='Name'
          />
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
          />
          <SubmitButton title='Signup' />
        </Form>
      </Screen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 40
  }
});
