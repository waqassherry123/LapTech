import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroSlides, SplashScreen, SignUp, LoginScreen, Home, ProductDetailsScreen, MyCart, Checkout, PaymentDoneScreen, Profile } from './Screens';

const Stack = createStackNavigator();

const StackScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='IntroSlides' component={IntroSlides} options={{ headerShown: false }} />
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetailsScreen' component={ProductDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='MyCart' component={MyCart} options={{ headerShown: false }} />
            <Stack.Screen name='Checkout' component={Checkout} options={{ headerShown: false }} />
            <Stack.Screen name='PaymentDoneScreen' component={PaymentDoneScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default StackScreens;
