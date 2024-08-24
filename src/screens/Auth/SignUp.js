import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
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
    <View style={styles.container}>
      <Icon name="Logo" width={wp(25)} height={hp(10)} />
      <Text style={styles.signUp}>Sign Up</Text>

      <spacer.s5 />
      <OutlinedTextField
        containerStyle={{ padding: 0, width: '90%', margin: 0 }}
        inputContainerStyle={{ backgroundColor: color.White, padding: 0 }}
        lineWidth={0}
        value={email}
        label="Email"
        placeholder="Email"
        keyboardType="email-address"
        maxWidth={25}
        autoCapitalize="none"
        baseColor={color.White}
        // tintColor={"#BBBBBB"}
        onChangeText={(text) => {
          setEmail(text)
        }}
      />

      <spacer.s1 />
      <OutlinedTextField
        containerStyle={{padding: 0, width: '90%', margin: 0}}
        inputContainerStyle={{backgroundColor: color.White, padding: 0}}
        lineWidth={0}
        value={password}
        label="Password"
        placeholder="Password"
        keyboardType="default"
        maxWidth={25}
        autoCapitalize="none"
        secureTextEntry={true}
        baseColor={color.White}
        // tintColor={"#BBBBBB"}
        onChangeText={(text) => setPassword(text)}
      />

      <spacer.s1 />
      <OutlinedTextField
        containerStyle={{padding: 0, width: '90%', margin: 0}}
        inputContainerStyle={{backgroundColor: color.White, padding: 0}}
        lineWidth={0}
        value={confirmPassword}
        label="Confirm Password"
        placeholder="Confirm Password"
        keyboardType="default"
        maxWidth={25}
        autoCapitalize="none"
        secureTextEntry={true}
        baseColor={color.White}
        // tintColor={"#BBBBBB"}
        onChangeText={(text) => setConfirmPassword(text)}
      />

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
      <Button title="Sign Up" onClick={() => handleSignIn()} />
      {/* <Button title="Sign Up" onClick={() => handleSubmit()} /> */}
      <spacer.s2 />

      <Text style={styles.signupText}>or Signup with</Text>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleSignIn}
        disabled={googleDisabled}
/>

      {/* SignUp with facebook and google */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Icon name="Facebook" width={wp(15)} height={hp(15)} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="Google" width={wp(15)} height={hp(15)} />
        </TouchableOpacity>
      </View>

      <spacer.s2 />
      {/* login text */}
      <Text onPress={() => navigation.navigate(ROUTES.LOGIN)}>
        Already have an account? <Text style={[style.fourBold]}>Log In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(8),
    alignItems: 'center',
  },
  signUp: {
    marginTop: hp(3),
    fontSize: fontSize.font9,
    fontWeight: '600',
  },
  signupText: {},
  textInput: {
    borderRadius: wp(2),
    height: hp(5),
  },
  inputContainer: {
    backgroundColor: color.White,
    // paddingHorizontal: 10,
    marginBottom: 20,
    width: '90%',
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
});

export default SignUp;
