import React from 'react'
import { Button, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { MainTabNavigator } from 'navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color, size } from 'common'

const Stack = createStackNavigator()

export default function MainStackNavigator() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator initialRouteName="MainTabNavigator">
      <Stack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={{
          headerTitle: () => null,
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('SettingStackNavigator')}>
              <Image
                source={require('icons/settings.png')}
                style={{ width: 30 * size.widthRate, height: 30 * size.widthRate, margin: 24 * size.widthRate }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('ProfileStackNavigator')}>
              <Image
                source={require('icons/profile.png')}
                style={{ width: 30 * size.widthRate, height: 30 * size.widthRate, margin: 24 * size.widthRate }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  )
}
