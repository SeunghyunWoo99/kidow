import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LearningPage, QuizPage, ReviewPage } from 'pages'
import { MainTabBar } from 'components'

const Tab = createBottomTabNavigator()

export default function MainTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <MainTabBar {...props} />} initialRouteName="MainPage">
      <Tab.Screen name="LearningPage" component={LearningPage} />
      <Tab.Screen name="QuizPage" component={QuizPage} />
      <Tab.Screen name="ReviewPage" component={ReviewPage} />
    </Tab.Navigator>
  )
}
