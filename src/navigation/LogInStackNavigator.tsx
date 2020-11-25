import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { PhoneNumberInput, PhoneNumberAuth } from 'pages'
import { Back } from 'icons'

const Stack = createStackNavigator()

export default function LogInStackNavigator() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator initialRouteName="PhoneNumberInput">
      <Stack.Screen
        name="PhoneNumberInput"
        component={PhoneNumberInput}
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
        name="PhoneNumberAuth"
        component={PhoneNumberAuth}
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
