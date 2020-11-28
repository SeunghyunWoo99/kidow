import React from 'react'
import { TouchableOpacity, Text, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { size, color } from 'common'
import { ProfilePage } from 'pages'

const Stack = createStackNavigator()

export default function ProfileStackNavigator() {
  const navigation = useNavigation()

  return (
    <>
      <StatusBar barStyle="light-content" animated={true} />
      <Stack.Navigator
        initialRouteName="ProfilePage"
        screenOptions={{
          safeAreaInsets: { top: 0 },
          headerStyle: {
            height: 56 * size.heightRate,
          },
        }}>
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            headerTitle: () => (
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(18),
                  color: color.text.primary1,
                }}>
                마이페이지
              </Text>
            ),
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginHorizontal: 20 * size.widthRate }}>
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
          }}
        />
      </Stack.Navigator>
    </>
  )
}
