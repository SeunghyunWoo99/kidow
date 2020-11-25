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
  //return <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: InitialARScene }} />
}

export default LearningWithCards
