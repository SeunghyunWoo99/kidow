import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { ViroARSceneNavigator } from '@akadrimer/react-viro'

const LearningWithCards = () => {
  var _sharedProps = {
    apiKey: 'API_KEY_HERE',
  }
  var InitialARScene = require('./LearningWithCardsAR')

  const [navigatorType, setNavigatorType] = useState('UNSET')
  // console.log(navigatorType);
  const [sharedProps, setSharedProps] = useState(_sharedProps)

  return null
<<<<<<< HEAD
=======
  // return <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: InitialARScene }} />
>>>>>>> 8bc3de0... Object터치 시 Text 바뀌도록 설정(Quiz)
}

export default LearningWithCards
