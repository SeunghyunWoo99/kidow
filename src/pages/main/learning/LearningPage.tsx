import React, { useState } from 'react'
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { color, size } from 'common'
import { LearningWithCards, LearningWithoutCards } from './components'

export default function LearningPage() {
  const [learningWithCards, setLearningWithCards] = useState(true)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background.default,
      }}>
      {learningWithCards ? <LearningWithCards /> : <LearningWithoutCards />}
    </View>
  )
}
