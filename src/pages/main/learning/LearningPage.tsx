import React, { useState } from 'react'
import { AppRegistry, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { color, size } from 'common'
import { LearningWithCards, LearningWithoutCards } from './components'

export default function LearningPage() {
  const [learningWithCards, setLearningWithCards] = useState(true)

  return <>{true ? <LearningWithCards /> : <LearningWithoutCards />}</>
}
