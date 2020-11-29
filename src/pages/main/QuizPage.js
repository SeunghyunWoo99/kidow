import React, { useState } from 'react'
import { Text, View, ImageBackground, Pressable, Image } from 'react-native'
import { size, color } from 'common'
import { ViroARSceneNavigator } from '@akadrimer/react-viro'
import { QuizEnd } from 'modal'

export default function QuizPage() {
  const [navigatorType, setNavigatorType] = useState('UNSET')
  // console.log(navigatorType);
  const [sharedProps, setSharedProps] = useState(_sharedProps)
  const [wordText, setWordText] = useState('여우')
  const [showModal, setShowModal] = useState(false)

  var InitialARScene = require('./QuizAR')
  var _sharedProps = {
    apiKey: 'API_KEY_HERE',
  }

  let textProps = {
    text: wordText,
    func: setWordText,
    setShowModal,
  }

  return (
    <View style={{ flex: 1 }}>
      <ViroARSceneNavigator viroAppProps={textProps} {...sharedProps} initialScene={{ scene: InitialARScene }} />
      <View
        style={{
          width: 250 * size.widthRate,
          height: 120 * size.widthRate,
          backgroundColor: color.background.mainLight,
          position: 'absolute',
          alignSelf: 'center',
          borderRadius: 16 * size.widthRate,
          top: 100 * size.heightRate,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontFamily: 'BMJUA', fontSize: size.normalizeFontSize(64) }}>{wordText}</Text>
      </View>
      <QuizEnd {...{ showModal, setShowModal }} />
    </View>
  )
}
