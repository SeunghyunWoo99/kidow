import React, { useState } from 'react'
import { Text, View, ImageBackground, Pressable, Image } from 'react-native'
import { size, color } from 'common'

function ResultIcon(isCorrect: boolean) {
  return (
    <View style={{ position: 'absolute', bottom: 60 * size.heightRate }}>
      {isCorrect ? (
        <Image
          source={require('images/correct.png')}
          style={{ width: 320 * size.widthRate, height: 320 * size.widthRate }}
        />
      ) : (
        <Image
          source={require('images/wrong.png')}
          style={{ width: 320 * size.widthRate, height: 320 * size.widthRate }}
        />
      )}
    </View>
  )
}

export default function QuizPage() {
  const [isAnswered, setIsAnswered] = useState(false)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground
        source={require('images/quizCamera.png')}
        style={{ width: size.screenWidth, height: size.screenHeight, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: color.background.mainLight,
            width: 200 * size.widthRate,
            height: 100 * size.widthRate,
            borderRadius: 24 * size.widthRate,
            shadowOpacity: 0.7,
            shadowColor: 'rgb(100, 100, 100)',
            shadowRadius: 10 * size.widthRate,
            shadowOffset: {
              width: 3 * size.widthRate,
              height: 5 * size.widthRate,
            },
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 150 * size.heightRate,
          }}>
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(48),
              color: color.text.primary1,
              fontWeight: 'bold',
              textAlign: 'center',
              textShadowColor: '#333',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: -2 * size.widthRate,
            }}>
            바나나
          </Text>
        </View>
      </ImageBackground>
      {isAnswered && <ResultIcon isCorrect={true} />}
      <Pressable onPress={() => setIsAnswered((prev) => !prev)} style={{ position: 'absolute', left: 20, bottom: 10 }}>
        <Text>Toggle Result Icon</Text>
      </Pressable>
    </View>
  )
}
