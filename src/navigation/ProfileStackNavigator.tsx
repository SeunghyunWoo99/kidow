import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfilePage } from 'pages'

const Stack = createStackNavigator()

export default function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
    </Stack.Navigator>
  )
}
