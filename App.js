import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

// packages
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth'

//utilities
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../LapTech/src/theme/metrics"

//screens 
import IntroSlides from './src/screens/Auth/IntroSlider/IntroSlides';
import SignUp from './src/screens/Auth/IntroSlider/SignUp';
import Home from './src/screens/Home/Home';
import ProductDetailsScreen from './src/screens/Home/ProductDetailsScreen';
import MyCart from './src/screens/MyCart';
import Checkout from './src/screens/Checkout';
import PaymentDoneScreen from './src/screens/PaymentProcess';
import LoginScreen from './src/screens/Auth/IntroSlider/login';
import Profile from './src/screens/Profile';
import Icon from './src/assets/icons/Icon';
import { color } from './src/theme/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const tabBarStyle = {
  borderTopWidth: 0,
  borderColor: '#fff',
  backgroundColor: '#fff',
  shadowColor: '#230DA0',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.15,
  shadowRadius: 10,
  elevation: 2,
  paddingVertical: 0,
  marginTop: 0,
}

const CusotmTabBarButton = ({ containerStyle, isFloat, children, onPress }) => {
  if (isFloat) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Icon
          name="Home"
          fill={color.Default}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: -40,
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: color.primary,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            flex: 1,
            height: 60,
            backgroundColor: color.Gray,
            ...containerStyle,
          }}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        gastureEnabled: false,
        tabBarStyle: {
          borderTopColor: "#fff",
          ...tabBarStyle,
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Icon name="Home" fill={focused ? color.Default : "transparent"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <Icon name="Profile" fill={focused ? color.Default : "transparent"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [login, setLogin] = useState(false);

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          translucent={false}
          backgroundColor="transparent"
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer>
          <Stack.Navigator>
            {
              user ? (
                <Stack.Screen name='Tab' component={TabNavigator} options={{ headerShown: false }} />
              )
                :
                (
                  <>
                    <Stack.Screen name='IntroSlides' component={IntroSlides} options={{ headerShown: false }} />
                    <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
                  </>
                )
            }
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetailsScreen' component={ProductDetailsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='MyCart' component={MyCart} options={{ headerShown: false }} />
            <Stack.Screen name='Checkout' component={Checkout} options={{ headerShown: false }} />
            <Stack.Screen name='PaymentDoneScreen' component={PaymentDoneScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
