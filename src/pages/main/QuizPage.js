import React, { useState } from 'react'
import { Text, View, ImageBackground, Pressable, Image } from 'react-native'
import { size, color } from 'common'
import { ViroARSceneNavigator } from '@akadrimer/react-viro'

export default function QuizPage() {
  var _sharedProps = {
    apiKey: 'API_KEY_HERE',
  }
  var InitialARScene = require('./QuizAR')

  const [navigatorType, setNavigatorType] = useState('UNSET')
  // console.log(navigatorType);
  const [sharedProps, setSharedProps] = useState(_sharedProps)

  return <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: InitialARScene }} />
}
