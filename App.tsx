import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { FrontPage } from 'pages'
import { RootStackNavigator, LogInStackNavigator, SignUpStackNavigator } from 'navigation'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FrontPage"
          component={FrontPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LogInStackNavigator"
          component={LogInStackNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpStackNavigator"
          component={SignUpStackNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RootStackNavigator"
          component={RootStackNavigator}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
