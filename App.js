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
import * as AuthScreens from "./src/screens/Auth"
import IntroSlides from './src/screens/Auth/IntroSlider/IntroSlides';
import SignUp from './src/screens/Auth/SignUp';
import Home from './src/screens/Home/Home';
import ProductDetailsScreen from './src/screens/Home/ProductDetailsScreen';
import MyCart from './src/screens/MyCart';
import Checkout from './src/screens/Checkout';
import PaymentDoneScreen from './src/screens/PaymentProcess';
// import LoginScreen from './src/screens/Auth/Login';
import Profile from './src/screens/Profile/Profile';
import Icon from './src/assets/icons/Icon';
import { color } from './src/theme/colors';

// ROUTES
import ROUTES from "./src/constants/routes.json"

// STACKS
import ProfileStack from './navigators/ProfileStack';

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
        name={ROUTES.PROFILE_HOME}
        component={ProfileStack}
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
    console.log("user", user)
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
            {user ? (
              <Stack.Screen
                name="Tab"
                component={TabNavigator}
                options={{headerShown: false}}
              />
            ) : (
              <Stack.Group screenOptions={{headerShown: false}}>
                {/* <Stack.Screen name='IntroSlides' component={IntroSlides} options={{ headerShown: false }} /> */}
                <Stack.Screen
                  name={ROUTES.LOGIN}
                  component={AuthScreens.Login}
                />
                <Stack.Screen
                  name={ROUTES.SIGN_UP}
                  component={AuthScreens.SignUp}
                />
              </Stack.Group>
            )}
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetailsScreen"
              component={ProductDetailsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyCart"
              component={MyCart}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PaymentDoneScreen"
              component={PaymentDoneScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
