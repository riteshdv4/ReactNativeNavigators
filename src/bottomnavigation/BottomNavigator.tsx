import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedScreen from './FeedScreen'
import ProfileScreen from './ProfileScreen'
import SettingsScreen from './SettingsScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TabStack = createBottomTabNavigator()
MaterialCommunityIcons.loadFont();
const BottomNavigator = () => {
    return (
        <TabStack.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'orange' }} initialRouteName='Feeds'>
            <TabStack.Screen name='Feeds' component={FeedScreen} options={{
                tabBarLabel: "Feeds", tabBarIcon: ({ color, size }) => (
                     <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }} />
            <TabStack.Screen name='Profile' component={ProfileScreen} options={{
                tabBarLabel: "Profile", tabBarIcon: ({ color, size }) => (
                     <MaterialCommunityIcons name='account-circle' color={color} size={size} />
                )
            }}/>
            <TabStack.Screen name='Settings' component={SettingsScreen} options={{
                tabBarLabel: "Settings", tabBarIcon: ({ color, size }) => (
                     <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                )
            }}/>
        </TabStack.Navigator>
    )
}

export default BottomNavigator