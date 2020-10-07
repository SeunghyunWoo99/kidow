import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { size, color } from 'common'

export default function QuizPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
        source={require('images/quizCamera.png')}
        style={{ width: size.screenWidth, height: size.screenHeight, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: color.background.mainLight,
            width: 280,
            height: 180,
            borderRadius: 12,
            borderWidth: 4,
            shadowOpacity: 0.7,
            shadowColor: 'rgb(100, 100, 100)',
            shadowRadius: 10,
            shadowOffset: {
              width: 3,
              height: 5,
            },
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 150 * size.heightRate,
          }}>
          <Text
            style={{
              fontSize: size.normalizeFontSize(64),
              color: color.text.primary1,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            바나나
          </Text>
        </View>
        <Text
          style={{
            fontSize: size.normalizeFontSize(360),
            color: color.text.primary1,
            // fontWeight: 'bold',
            textAlign: 'center',
            position: 'absolute',
            bottom: 48,
          }}>
          O
        </Text>
      </ImageBackground>
    </View>
  )
}
