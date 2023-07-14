import React from 'react';
import {
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';

// packages
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens 
import SplashScreen from './src/screens/SplashScreen';
import IntroSlides from './src/screens/Auth/IntroSlider/IntroSlides';
import SignUp from './src/screens/Auth/IntroSlider/SignUp';
import Home from './src/screens/Home/Home';

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
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>

      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
