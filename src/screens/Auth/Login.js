import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
//packages
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

//utilities
import * as spacer from '../../utils/spacer'
import { color } from '../../theme/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../theme/metrics';
import { facebookSignIn, googleSignIn } from '../../../Firebase'  
import ROUTES from '../../constants/routes.json'

// components
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
      <View style={styles.logo}>
        <Icon name="Logo" height={wp(20)} width={wp(20)} />
      </View>

      <Text style={{ color: color.primary, fontSize: 28, fontWeight: '500', marginBottom: hp(5) }}>Welcome Back!</Text>

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

      <TouchableOpacity onPress={facebookSignIn} style={styles.fbSignIn} >
        <View style={{ backgroundColor: 'white', borderRadius: 1000 }}>
          <Icon name="Facebook" height={wp(8)} width={wp(8)} />
        </View>
        <Text style={[styles.loginButtonText, { marginLeft: wp(3) }]}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => googleSignIn()} style={styles.googleSignin} >
        <Icon name="Google" height={wp(7)} width={wp(7)} />
        <Text style={[styles.loginButtonText, { marginLeft: wp(3) }]}>Continue with Google</Text>
      </TouchableOpacity>

      <spacer.s3 />
      {/* Signup text */}
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SIGN_UP)}>
        <Text style={styles.signupText}>
          Don't have an account?
          <Text style={{ fontWeight: 'bold' }}> Sign up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: color.tertiary
  },
  logo: {
    marginVertical: 50,
    borderRadius: wp(20),
  },
  inputContainer: {
    backgroundColor: color.White,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "90%"
  },
  inputIcon: {
    marginRight: 10,
  },
  forgotPassword: {
    marginBottom: 20,
    color: color.Black,
    marginLeft: "60%"
  },
  loginButton: {
    backgroundColor: color.primary,
    borderRadius: 5,
    paddingVertical: hp(1.4),
    marginBottom: 10,
    width: '90%',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  orText: {
    marginVertical: 10,
    color: color.primary,
  },
  socialButtonsContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  signupText: {
    color: color.Black,
    textDecorationLine: 'underline',
    marginTop: 30
  },
  googleSignin: { 
    flexDirection: 'row', 
    backgroundColor: color.primary, 
    width: '90%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: wp(2.5), 
    borderRadius: 5 
  },
  fbSignIn: {
    flexDirection: 'row',
    backgroundColor: color.primary,
    width: '90%', justifyContent: 'center',
    alignItems: 'center',
    padding: wp(2.5),
    borderRadius: 5,
    marginBottom: hp(1.5)
  }
});

export default Login;
