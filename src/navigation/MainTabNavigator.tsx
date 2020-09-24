import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainPage } from 'pages'

const Tab = createBottomTabNavigator()

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainPage" component={MainPage} />
    </Tab.Navigator>
  )
}
