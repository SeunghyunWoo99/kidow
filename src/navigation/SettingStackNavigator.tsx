import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SettingPage } from 'pages'
import { size, color } from 'common'

const Stack = createStackNavigator()

export default function SettingStackNavigator() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator
      initialRouteName="SettingsPage"
      screenOptions={{
        safeAreaInsets: { top: 0 },
        headerStyle: {
          height: 56 * size.heightRate,
        },
      }}>
      <Stack.Screen
        name="SettingPage"
        component={SettingPage}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                color: color.text.primary1,
              }}>
              환경설정
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 * size.widthRate }}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(16),
                  color: color.text.secondary1,
                }}>
                취소
              </Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 12 * size.widthRate }}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(16),
                  color: color.text.mainDark,
                }}>
                완료
              </Text>
            </TouchableOpacity>
          ),
          // headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}
