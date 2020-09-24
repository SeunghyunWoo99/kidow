import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { MainTabNavigator } from 'navigation'

const Stack = createStackNavigator()

export default function MainStackNavigator() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator initialRouteName="MainTabNavigator">
      <Stack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={{
          headerTitle: '',
          headerTitleAlign: 'center',
          headerLeft: () => <Button title={'Settings'} onPress={() => navigation.navigate('SettingStackNavigator')} />,
          headerRight: () => <Button title={'Profile'} onPress={() => navigation.navigate('ProfileStackNavigator')} />,
        }}
      />
    </Stack.Navigator>
  )
}
