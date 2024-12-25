import {View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';

// packages
import CheckBox from 'react-native-check-box';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

//utilities
import {color} from '../../theme/colors';
import {fontSize, fontWeight} from '../../theme/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme/metrics';
import * as spacer from '../../utils/spacer';
import Icon from '../../assets/icons/Icon';
import * as ROUTES from '../../constants/routes.json';
import useSignupForm from './hooks/useSignupForm';

//screens
import Button from '../../components/commons/Button';
import {style} from '../../utils/globalStyles';

const SignUp = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useSignupForm();

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [googleDisabled, setGooglDisabled] = useState(false)
  // const [errors, setErrors] = useState({
  //   email: false,
  //   password: false,
  //   confirmPassword: false,
  // })

  useEffect(() => {
    GoogleSignin.configure()
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo", userInfo)
      // setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("cancelled")
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log("inn progress")
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log("google service not avaiable")
      } else {
        console.log("Error", error)
        // some other error happened
      }
    }
  }

  const handleSignIn = () => {

      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          ToastAndroid.show('Account Created', ToastAndroid.SHORT);
        })
        .catch(error => {
          console.error('Error signing up:', error);
        });

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
      <Icon name="Logo" width={wp(25)} height={hp(10)} />
      </View>
      <Text style={{ color: color.primary, fontSize: 28, fontWeight:'500', marginBottom:hp(3)}}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          placeholderTextColor="#aaaaaa"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={acceptedTerms}
          onClick={() => setAcceptedTerms(!acceptedTerms)}
          isChecked={acceptedTerms}
          checkBoxColor={'black'}
        />
        <Text style={styles.label}>
          I accept all the
          <Text style={[style.fourBold]}> Terms & Conditions</Text>
        </Text>
      </View>

      <spacer.s2 />
      <TouchableOpacity style={styles.signUpButton} onPress={() => handleSignIn()} >
        <Text style={styles.signUpButtonText}>SignUp</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>Or</Text>

      {/* SignUp with facebook and google */}
      <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: color.primary, width: '90%', justifyContent: 'center', alignItems: 'center', padding: wp(2), borderRadius: 30,  marginBottom: hp(1.5) }} >
        <Icon name="Google" height={wp(7)} width={wp(7)} />
        <Text style={[styles.signUpButtonText, { marginLeft: wp(3) }]}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: color.primary, width: '90%', justifyContent: 'center', alignItems: 'center', padding: wp(2), borderRadius: 30, marginBottom: hp(1.5) }} >
        <View style={{ backgroundColor: 'white', borderRadius: 1000 }}>
          <Icon name="Facebook" height={wp(8)} width={wp(8)} />
        </View>
        <Text style={[styles.signUpButtonText, { marginLeft: wp(3) }]}>Continue with Facebook</Text>
      </TouchableOpacity>

      <spacer.s2 />
      {/* login text */}
      <Text onPress={() => navigation.navigate(ROUTES.LOGIN)}>
        Already have an account? <Text style={[style.fourBold]}>Log In</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: hp(8),
    backgroundColor: color.tertiary,
    alignItems: 'center',
  },
  signUp: {
    marginTop: hp(3),
    fontSize: fontSize.font9,
    fontWeight: '600',
  },
  signupText: {
    marginBottom: 10
  },
  textInput: {
    borderRadius: wp(2),
    height: hp(5),
  },
  inputContainer: {
    backgroundColor: color.White,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "90%"
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '35%',
  },
  signUpButton: {
    backgroundColor: color.primary,
    borderRadius: 30,
    paddingVertical: hp(1.4),
    marginBottom: 10,
    width: '90%',
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    marginVertical: 50,
    borderRadius: wp(20),
  },
});

export default SignUp;
