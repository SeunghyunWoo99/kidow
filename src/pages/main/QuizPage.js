import React, { useState } from 'react'
import { Text, View, ImageBackground, Pressable, Image } from 'react-native'
import { size, color } from 'common'
import { ViroARSceneNavigator } from '@akadrimer/react-viro'

export default function QuizPage() {
  const [navigatorType, setNavigatorType] = useState('UNSET')
  // console.log(navigatorType);
  const [sharedProps, setSharedProps] = useState(_sharedProps)
  const [wordText, setWordText] = useState('늑대')

  var InitialARScene = require('./QuizAR')
  var _sharedProps = {
    apiKey: 'API_KEY_HERE',
  }

  let textProps = {
    func: setWordText,
  }

  return (
    <View style={{ flex: 1 }}>
      <ViroARSceneNavigator viroAppProps={textProps} {...sharedProps} initialScene={{ scene: InitialARScene }} />
      <View
        style={{
          width: 250 * size.widthRate,
          height: 150 * size.widthRate,
          backgroundColor: color.background.mainLight,
          position: 'absolute',
          alignSelf: 'center',
          borderRadius: 16 * size.widthRate,
          top: 100 * size.heightRate,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: size.normalizeFontSize(72), fontWeight: 'bold' }}>{wordText}</Text>
      </View>
    </View>
  )
}
