import React, { useState } from 'react'
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import ReactModal from 'react-native-modal'
import { color, size } from 'common'
import { Tooltip } from 'components'
// import { fonts } from 'fonts'

export default function LearningPage() {
  const [showModal, setShowModal] = useState(true)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background.default,
      }}>
      <ImageBackground
        source={require('images/learningCamera.png')}
        style={{ width: size.screenWidth, height: size.screenHeight, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: color.background.mainLight,
            width: 200 * size.widthRate,
            height: 100 * size.widthRate,
            borderRadius: 24 * size.widthRate,
            // borderWidth: 4 * size.widthRate,
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
        {/* <Tooltip
          text={'카드로 학습하기'}
          pressable={true}
          pointerAlign="left"
          pointerDirection="down"
          style={{ position: 'absolute', bottom: -270 * size.widthRate, right: 30 * size.widthRate }}
        /> */}
        {/* 오늘의 학습 시작 안내 모달 */}
        {/* <ReactModal
          isVisible={showModal}
          onBackButtonPress={() => setShowModal(false)}
          onBackdropPress={() => setShowModal(false)}>
          <View
            style={{
              backgroundColor: color.background.mainLight,
              width: 300 * size.widthRate,
              // height: 180 * size.widthRate,
              borderRadius: 16 * size.widthRate,
              shadowOpacity: 0.7,
              shadowColor: 'rgb(100, 100, 100)',
              shadowRadius: 10,
              shadowOffset: {
                width: 3,
                height: 5,
              },
              padding: 32 * size.widthRate,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={require('icons/todayLearningMini.png')}
              style={{
                width: 40 * size.widthRate,
                height: 40 * size.widthRate,
                marginBottom: 12 * size.widthRate,
                left: 4 * size.widthRate,
              }}
            />
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(24),
                color: color.text.primary1,
                fontWeight: 'bold',
                textAlign: 'center',
                // marginTop: 4 * size.heightRate,
                marginBottom: 16 * size.heightRate,
              }}>
              오늘의 학습
            </Text>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                color: color.text.secondary1,
                textAlign: 'center',
                marginBottom: 16 * size.heightRate,
              }}>
              {'낱말'}
              <Text
                style={{
                  fontSize: size.normalizeFontSize(24),
                  color: color.text.primary1,
                }}>
                {' 10 '}
              </Text>
              {'개\n배워볼까요?'}
            </Text>
            <TouchableOpacity
              style={{
                width: 240 * size.widthRate,
                height: 42 * size.widthRate,
                borderRadius: 12 * size.widthRate,
                marginBottom: 12 * size.heightRate,
                backgroundColor: color.button.mainDark,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOpacity: 0.5,
                shadowColor: 'rgb(100, 100, 100)',
                shadowRadius: 8 * size.widthRate,
                shadowOffset: {
                  width: 3,
                  height: 5,
                },
              }}
              onPress={() => {}}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(20),
                  fontWeight: 'bold',
                  color: color.text.white,
                }}>
                네
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(16),
                  color: color.text.secondary2,
                }}>
                설정으로 이동
              </Text>
            </TouchableOpacity>
          </View>
        </ReactModal> */}
        {/* 오늘의 학습 시작 안내 모달 */}
        {/* <ReactModal
          isVisible={showModal}
          onBackButtonPress={() => setShowModal(false)}
          onBackdropPress={() => setShowModal(false)}>
          <View
            style={{
              backgroundColor: color.background.mainLight,
              width: 300 * size.widthRate,
              // height: 180 * size.widthRate,
              borderRadius: 16 * size.widthRate,
              shadowOpacity: 0.7,
              shadowColor: 'rgb(100, 100, 100)',
              shadowRadius: 10,
              shadowOffset: {
                width: 3,
                height: 5,
              },
              padding: 32 * size.widthRate,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={require('icons/todayLearningMini.png')}
              style={{
                width: 40 * size.widthRate,
                height: 40 * size.widthRate,
                marginBottom: 12 * size.widthRate,
                left: 4 * size.widthRate,
              }}
            />
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(24),
                color: color.text.primary1,
                fontWeight: 'bold',
                textAlign: 'center',
                // marginTop: 4 * size.heightRate,
                marginBottom: 16 * size.heightRate,
              }}>
              오늘도 잘 했어요!
            </Text>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                color: color.text.secondary1,
                textAlign: 'center',
                marginBottom: 16 * size.heightRate,
              }}>
              {'이진우 어린이, 오늘로'}
              <Text
                style={{
                  fontSize: size.normalizeFontSize(24),
                  color: color.text.primary1,
                }}>
                {' 15 '}
              </Text>
              {'번 째\n학습이네요! 대단해요 👏🏻'}
            </Text>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                color: color.text.secondary1,
                textAlign: 'center',
                marginBottom: 16 * size.heightRate,
              }}>
              {'오늘은 총'}
              <Text
                style={{
                  fontSize: size.normalizeFontSize(24),
                  color: color.text.primary1,
                }}>
                {' 12 '}
              </Text>
              {'분 동안'}
            </Text>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                color: color.text.secondary1,
                textAlign: 'center',
                marginBottom: 16 * size.heightRate,
              }}>
              {'낱말'}
              <Text
                style={{
                  fontSize: size.normalizeFontSize(24),
                  color: color.text.primary1,
                }}>
                {' 10 '}
              </Text>
              {'개를 배웠어요.'}
            </Text>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                color: color.text.secondary1,
                textAlign: 'center',
                marginBottom: 16 * size.heightRate,
              }}>
              {'문제'}
              <Text
                style={{
                  fontSize: size.normalizeFontSize(24),
                  color: color.text.primary1,
                }}>
                {' 10 '}
              </Text>
              {'개 중'}
              <Text
                style={{
                  fontSize: size.normalizeFontSize(24),
                  color: color.text.primary1,
                }}>
                {' 5 '}
              </Text>
              {'개를 맞았어요.'}
            </Text>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                color: color.text.secondary1,
                textAlign: 'center',
                marginBottom: 16 * size.heightRate,
              }}>
              {'내일 또 봐요 😉'}
            </Text>
            <TouchableOpacity
              style={{
                width: 240 * size.widthRate,
                height: 42 * size.widthRate,
                borderRadius: 12 * size.widthRate,
                marginBottom: 12 * size.heightRate,
                backgroundColor: color.button.mainDark,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOpacity: 0.5,
                shadowColor: 'rgb(100, 100, 100)',
                shadowRadius: 8 * size.widthRate,
                shadowOffset: {
                  width: 3,
                  height: 5,
                },
              }}
              onPress={() => {}}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(20),
                  fontWeight: 'bold',
                  color: color.text.white,
                }}>
                네
              </Text>
            </TouchableOpacity>
          </View>
        </ReactModal> */}
      </ImageBackground>
    </View>
  )
}
