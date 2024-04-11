import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import SplashScreen from './normal/SplashScreen'
import ParentComponent from './normal/ParentComponent'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='SplashScreen' component={SplashScreen}/>
                <Stack.Screen name='ParentComponent' component={ParentComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator