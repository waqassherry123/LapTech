import { View, Text, Image } from 'react-native'
import React from 'react'

// package
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Checkout from './Checkout';


//Assets
import * as images from '../assets/images'
import Icon from '../assets/icons/Icon';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        // initialRouteName="Home"
        // tabBarOptions={{
        //     activeTintColor: 'blue',
        //     inactiveTintColor: 'gray',
        // }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon name="heart" width={20} height={20} color="red" size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="heart" width={20} height={20} />
                    ),
                }} />

            <Tab.Screen
                name="Checkout"
                component={Checkout}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Icon name="heart" width={20} height={20} />
                    ),
                }} />


        </Tab.Navigator>
    )
}

export default TabNavigator