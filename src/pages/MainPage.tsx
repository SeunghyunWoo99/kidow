import React from 'react'
import { Text, View, Image } from 'react-native'
import { color, size } from 'common'

const Review = (
  <Image source={require('icons/review.png')} style={{ width: 30 * size.widthRate, height: 30 * size.widthRate }} />
)

export default function MainPage() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.background.mainLight }}>
      <Text>Main</Text>
      {Review}
    </View>
  )
}
