import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components/native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { size, color } from 'common'

const TabBar = styled.View`
  flex-direction: row;
  height: ${84 * size.heightRate}px;
  width: ${size.screenWidth}px;
  justify-content: flex-start;
  background-color: ${color.background.white};
  border-top-width: 0.25px;
  border-color: #bbb;
  box-shadow: ${3 * size.widthRate}px ${5 * size.widthRate}px ${10 * size.widthRate}px rgba(112, 63, 63, 0.3);
`

const Review = (
  <Image source={require('icons/review.png')} style={{ width: 30 * size.widthRate, height: 30 * size.widthRate }} />
)
const ReviewActive = (
  <Image
    source={require('icons/reviewActive.png')}
    style={{ width: 30 * size.widthRate, height: 30 * size.widthRate }}
  />
)
const Learning = (
  <Image source={require('icons/learning.png')} style={{ width: 30 * size.widthRate, height: 30 * size.widthRate }} />
)
const LearningActive = (
  <Image
    source={require('icons/learningActive.png')}
    style={{ width: 30 * size.widthRate, height: 30 * size.widthRate }}
  />
)
const Quiz = (
  <Image source={require('icons/quiz.png')} style={{ width: 30 * size.widthRate, height: 30 * size.widthRate }} />
)
const QuizActive = (
  <Image source={require('icons/quizActive.png')} style={{ width: 30 * size.widthRate, height: 30 * size.widthRate }} />
)

const Today = (
  <Image
    source={require('icons/todayLearningMini.png')}
    style={{ width: 48 * size.widthRate, height: 48 * size.widthRate, right: 4 * size.widthRate }}
  />
)

export default function MainTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options
  const [inTodayLearning, setInTodayLearning] = useState(true)

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <>
      <TabBar>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]

          const isFocused = state.index === index

          /** 페이지의 종류와 해당 페이지의 focus 여부에 따라 달라지는 icon을 리턴하는 함수 */
          const Icon = () => {
            switch (route.name) {
              case 'LearningPage':
                return isFocused ? LearningActive : Learning
              case 'QuizPage':
                return isFocused ? QuizActive : Quiz
              case 'ReviewPage':
                return isFocused ? ReviewActive : Review
              case 'TodayPage':
                return isFocused ? Today : Today
            }
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ marginVertical: 16 * size.widthRate, marginHorizontal: 30 * size.widthRate }}>
              {Icon()}
            </TouchableOpacity>
          )
        })}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            right: -48 * size.widthRate,
            bottom: 24 * size.widthRate,
          }}>
          {inTodayLearning && (
            <AnimatedCircularProgress
              size={92 * size.widthRate}
              width={8 * size.widthRate}
              duration={1000}
              fill={40}
              tintColor="#ffbf09"
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#cccccc88"
              style={{ position: 'absolute' }}
            />
          )}
          <TouchableOpacity
            style={{
              width: 80 * size.widthRate,
              height: 80 * size.widthRate,
              borderRadius: 40 * size.widthRate,
              backgroundColor: color.button.mainDark,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              shadowOpacity: 0.4,
              shadowColor: 'rgb(100, 100, 100)',
              shadowRadius: 10,
              shadowOffset: {
                width: 3,
                height: 5,
              },
            }}
            onPress={() => setInTodayLearning((prev) => !prev)}>
            {true ? (
              <Image
                source={require('icons/todayLeaning.png')}
                style={{ width: 48 * size.widthRate, height: 48 * size.widthRate, right: -6 * size.widthRate }}
              />
            ) : (
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(26),
                  color: color.text.white,
                  textAlign: 'center',
                }}>
                40%
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </TabBar>
      {/* <TouchableOpacity
        style={{
          width: 50 * size.widthRate,
          height: 50 * size.widthRate,
          borderRadius: 25 * size.widthRate,
          backgroundColor: color.button.mainDark,
          position: 'absolute',
          left: 20 * size.widthRate,
          bottom: 96 * size.widthRate,
          alignItems: 'center',
          justifyContent: 'center',
          shadowOpacity: 0.4,
          shadowColor: 'rgb(100, 100, 100)',
          shadowRadius: 10,
          shadowOffset: {
            width: 3,
            height: 5,
          },
        }}>
        {true ? (
          <Image
            source={require('icons/cards.png')}
            style={{ width: 36 * size.widthRate, height: 36 * size.widthRate }}
          />
        ) : (
          <Image
            source={require('icons/noCards.png')}
            style={{
              width: 58 * size.widthRate,
              height: 58 * size.widthRate,
              bottom: -3 * size.widthRate,
              left: -3 * size.widthRate,
            }}
          />
        )}
      </TouchableOpacity> */}
    </>
  )
}
