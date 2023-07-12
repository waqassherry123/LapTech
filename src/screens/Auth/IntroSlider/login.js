import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import logo from "../../../assets/icons/logo.png";
import facebook from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import { color } from '../../../theme/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../../theme/metrics';
import { useNavigation } from '@react-navigation/native'
import SignUp from './SignUp';
import Home from '../../Home/Home';
 

const LoginScreen = () => {
  const navigation = useNavigation()


  return (
    <View style={styles.container}>
          {/* Logo */}
          <Image source={logo} style={styles.logo} />

      {/* Email input */}
      <View style={styles.inputContainer}>
        {/* <Image style={styles.inputIcon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaaaaa"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
        />
      </View>

      {/* Password input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
        />
      </View>

      {/* Forgot password text */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login button */}
      <TouchableOpacity style={styles.loginButton}
       onPress={() =>
        navigation.navigate('Home')
      }>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Or text */}
      <Text style={styles.orText}>Or</Text>

      {/* Social login buttons */}
      <View style={styles.socialButtonsContainer}>
        {/* Facebook button */}
        <TouchableOpacity >
        <Image source={facebook} style={[styles.logo, {height: hp(10), width: wp(20)}]} />
        </TouchableOpacity>

        {/* Google button */}
        <TouchableOpacity >
        <Image source={google} style={[styles.logo, {height: hp(10.5), width: wp(20.5)}]} />
        </TouchableOpacity>
      </View>

      {/* Signup text */}
      <TouchableOpacity>
        <Text style={styles.signupText}
        onPress={() =>
        navigation.navigate('SignUp')
      }>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:color.White
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  forgotPassword: {
    marginBottom: 20,
    color: color.Black,
    marginLeft:"60%"
  },
  loginButton: {
    backgroundColor: '#f77951',
    borderRadius: 30,
    paddingVertical: 15,
    marginBottom: 10,
    width:'50%',
    height:'7%',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  orText: {
    marginVertical: 20,
    color: '#aaaaaa',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  facebookButton: {
    backgroundColor: color.White,
  },
  googleButton: {
    backgroundColor: '#db4a39',
  },
  signupText: {
    color: color.Black,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
