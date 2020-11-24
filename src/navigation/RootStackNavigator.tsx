import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { MainStackNavigator, SettingStackNavigator, ProfileStackNavigator } from 'navigation'

const Stack = createStackNavigator()

export default function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MainTabNavigator">
      <Stack.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          cardOverlayEnabled: true,
        }}
      />
      <Stack.Screen
        name="SettingStackNavigator"
        component={SettingStackNavigator}
        options={{
          headerShown: false,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  )
}
