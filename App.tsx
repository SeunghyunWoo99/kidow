import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LogInPage } from 'pages'
import { RootStackNavigator } from 'navigation'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogInPage"
          component={LogInPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RootStackNavigator"
          component={RootStackNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
