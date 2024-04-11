import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }: { navigation: any }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ParentComponent');
    }, 3000);
  }, [])

  return (
    <SafeAreaView>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  )
}

export default SplashScreen