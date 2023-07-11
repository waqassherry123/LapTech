import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';

// hello bikaas

// packages
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens 
import SplashScreen from './src/screens/SplashScreen';
import ChooseProduct from './src/screens/Auth/ChooseProduct';
import MakePayment from './src/screens/Auth/MakePayment';
import IntroSlides from './src/screens/Auth/IntroSlider/IntroSlides';

const Stack = createStackNavigator();
function App() {
  const isDarkMode = useColorScheme() === 'dark';

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
            <Stack.Screen name='IntroSlides' component={IntroSlides} options={{ headerShown: false }} />
            <Stack.Screen name='MakePayment' component={MakePayment} options={{ headerShown: false }} />
            <Stack.Screen name='ChooseProduct' component={ChooseProduct} options={{ headerShown: false }} />
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>

      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
