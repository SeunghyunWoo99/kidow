import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SettingPage } from 'pages'

const Stack = createStackNavigator()

export default function SettingStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingPage" component={SettingPage} />
    </Stack.Navigator>
  )
}
