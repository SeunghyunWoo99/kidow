import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LogInPage } from 'pages'
import { Svg, Path } from 'react-native-svg'
import { color, size } from 'common'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Back = () => {
  return (
    <View style={{ margin: 10 * size.widthRate }}>
      <Svg width="30" height="30" viewBox="0 0 25 24">
        <Path
          fill="none"
          fill-rule="evenodd"
          stroke={color.palette.mainDark}
          strokeLinejoin="round"
          strokeWidth="3"
          d="M5 20L5 4 21 4"
          transform="rotate(-45 13 12)"
        />
      </Svg>
    </View>
  )
}
const Stack = createStackNavigator()

export default function LogInStackNavigator() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator initialRouteName="LogInPage">
      <Stack.Screen
        name="LogInPage"
        component={LogInPage}
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
