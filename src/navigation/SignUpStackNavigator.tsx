import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { EmailInput, PasswordInput, NameInput, AgeInput } from 'pages'
import { Back } from 'icons'

const Stack = createStackNavigator()

export default function SignUpStackNavigator() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator initialRouteName="EmailInput">
      <Stack.Screen
        name="EmailInput"
        component={EmailInput}
        options={{
          headerTitle: () => null,
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="PasswordInput"
        component={PasswordInput}
        options={{
          headerTitle: () => null,
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="NameInput"
        component={NameInput}
        options={{
          headerTitle: () => null,
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AgeInput"
        component={AgeInput}
        options={{
          headerTitle: () => null,
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  )
}
