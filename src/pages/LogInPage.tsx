import React from 'react'
import { Text, View, Image } from 'react-native'
import { color, size } from 'common'

export default function LogInPage() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.background.LogInLight }}>
      <Text>LogIn</Text>
    </View>
  )
}
