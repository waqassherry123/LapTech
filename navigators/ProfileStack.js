// PACKAGES
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import * as ProfileScreens from "../src/screens/Profile"

// ROUTES
import ROUTES from "../src/constants/routes.json"

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.PROFILE_MAIN} component={ProfileScreens.Profile} />
      <Stack.Screen name={ROUTES.PROFILE_SETTINGS} component={ProfileScreens.Settings} />
    </Stack.Navigator>
  );
}

export default ProfileStack;