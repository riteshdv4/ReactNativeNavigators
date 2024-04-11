import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../drawer/HomeScreen'
import NotificationsScreen from '../drawer/NotificationsScreen'

const DrawerStack = createDrawerNavigator()

const ParentComponent = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name='Home' component={HomeScreen} />
      <DrawerStack.Screen name='Notifications' component={NotificationsScreen} />
    </DrawerStack.Navigator>
  )
}

export default ParentComponent