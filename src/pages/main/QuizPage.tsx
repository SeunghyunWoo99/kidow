import React, { useState } from 'react'
import { Text, View, ImageBackground, Pressable, Image } from 'react-native'
import { size, color } from 'common'
import { ViroARSceneNavigator, ViroARScene, ViroText } from 'react-viro'

interface ResultIconProps {
  isCorrect: boolean
}

function ResultIcon({ isCorrect }: ResultIconProps) {
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

const MainScene = () => {
  return (
    <ViroARScene>
      <ViroText
        text="Hello World"
        position={[0, -0.1, -1]}
        style={{
          fontFamily: 'Arial',
          fontSize: 40,
          color: '#ffffff',
          textAlignVertical: 'center',
          textAlign: 'center',
        }}
      />
    </ViroARScene>
  )
}
export default function QuizPage() {
  const [isAnswered, setIsAnswered] = useState(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ViroARSceneNavigator initialScene={{ scene: MainScene }} />
      {/* <ImageBackground
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
            사과
          </Text>
        </View>
      </ImageBackground>
      {isAnswered && <ResultIcon isCorrect={isAnswerCorrect} />}
      <Pressable
        onPress={() => {
          setIsAnswered((prev) => !prev)
          setIsAnswerCorrect(Math.random() > 0.5)
        }}
        style={{ position: 'absolute', left: 20, bottom: 10 }}>
        <Text>Toggle Result Icon</Text>
      </Pressable> */}
    </View>
  )
}
