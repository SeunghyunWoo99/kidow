import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LogInPage } from 'pages'

const Stack = createStackNavigator()

export default function LogInStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="LogInPage">
      <Stack.Screen
        name="LogInPage"
        component={LogInPage}
        options={{
          headerTitle: () => null,
          headerTransparent: true,
          headerLeft: () => null,
        }}
      />
    </Stack.Navigator>
  )
}
