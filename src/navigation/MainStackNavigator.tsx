import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MainTabNavigator } from 'navigation'
import { MainHeader } from 'components'

const Stack = createStackNavigator()

export default function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainTabNavigator">
      <Stack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={{
          header: () => <MainHeader />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}
