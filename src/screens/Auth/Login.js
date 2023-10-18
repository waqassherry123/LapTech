import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
//packages
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

//utilities
import * as spacer from '../../utils/spacer'
import facebook from "../../assets/icons/facebook.png";
import google from "../../assets/icons/google.png";
import { color } from '../../theme/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics';
import * as ROUTES  from "../../constants/routes.json"

//screens
import Icon from '../../assets/icons/Icon';

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Logo */}
      <Icon name="Logo" height={wp(20)}
        width={wp(20)}
        style={[
          {
            marginBottom: "10%"
          },
        ]} />

      {/* Email input */}
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

      {/* Password input */}
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
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()} >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      {/* Social login buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity >
          <Image source={facebook} style={[styles.logo, { height: hp(8.5), width: wp(18.5) }]} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Image source={google} style={[styles.logo, { height: hp(13), width: wp(20.5) }]} />
        </TouchableOpacity>
      </View>

      {/* Signup text */}
      <TouchableOpacity>
        <Text style={styles.signupText} onPress={() => navigation.navigate(ROUTES.SIGN_UP)}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: color.White
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.White,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "90%"
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  forgotPassword: {
    marginBottom: 20,
    color: color.Black,
    marginLeft: "60%"
  },
  loginButton: {
    backgroundColor: '#f77951',
    borderRadius: 30,
    paddingVertical: 15,
    marginBottom: 10,
    width: '50%',
    height: '7%',
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
    alignItems: "center"
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

export default Login;
