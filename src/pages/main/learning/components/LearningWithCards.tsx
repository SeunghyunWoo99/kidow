import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { color, size } from 'common'
import { Svg, Defs, Rect, Mask } from 'react-native-svg'

function SvgMaskedDim() {
  return (
    <Svg height="100%" width="100%">
      <Defs>
        <Mask id="mask" x="0" y="0" height="100%" width="100%">
          <Rect height="100%" width="100%" fill="white" />
          <Rect
            x={37.5 * size.widthRate}
            y={320 * size.heightRate}
            width={300 * size.widthRate}
            height={180 * size.widthRate}
            rx={4 * size.widthRate}
            fill="black"
          />
        </Mask>
      </Defs>
      <Rect height="100%" width="100%" fill="rgba(0, 0, 0, 0.5)" mask="url(#mask)" fill-opacity="0" />
    </Svg>
  )
}

function LookingForCard() {
  return (
    <>
      <SvgMaskedDim />
      <View style={{ width: '100%', height: '100%', position: 'absolute', alignItems: 'center' }}>
        <Text
          style={{
            position: 'absolute',
            fontFamily: 'BMJUA',
            fontSize: size.normalizeFontSize(20),
            color: color.text.white,
            top: 280 * size.heightRate,
          }}>
          점선 안에 카드를 위치시키세요
        </Text>
        {/* <Text
          style={{
            position: 'absolute',
            fontFamily: 'BMJUA',
            fontSize: size.normalizeFontSize(20),
            color: color.text.white,
            top: 280 * size.heightRate,
            textShadowColor: '#444',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10 * size.widthRate,
          }}>
          단어 '얼룩말'은 아직 준비되어있지 않아요
        </Text> */}
        <View
          style={{
            top: 318 * size.heightRate,
            width: 306 * size.widthRate,
            height: 184 * size.widthRate,
            borderStyle: 'dashed',
            borderColor: color.palette.white,
            borderRadius: 4 * size.widthRate,
            borderWidth: 4 * size.widthRate,
            backgroundColor: 'transparent',
          }}
        />
        {/* <TouchableOpacity
          style={{
            width: 160 * size.widthRate,
            height: 42 * size.widthRate,
            position: 'absolute',
            bottom: 88 * size.widthRate,
            alignSelf: 'center',
            borderRadius: 16 * size.widthRate,
            marginBottom: 12 * size.heightRate,
            backgroundColor: color.button.mainDark,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity: 0.7,
            shadowColor: 'rgb(100, 100, 100)',
            shadowRadius: 10,
            shadowOffset: {
              width: 3,
              height: 5,
            },
          }}>
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(17),
              fontWeight: 'bold',
              color: color.text.white,
            }}>
            이 단어 요청하기
          </Text>
        </TouchableOpacity> */}
      </View>
    </>
  )
}

export default function LearningWithCards() {
  return (
    <>
      <ImageBackground
        source={require('images/learningWithCards1.png')}
        style={{
          width: size.screenWidth,
          height: size.screenHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LookingForCard />
      </ImageBackground>
    </>
  )
}
