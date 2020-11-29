import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ReactModal from 'react-native-modal'
import { color, size } from 'common'

interface ModalProps {
  setShowModal: (showModal: boolean) => void
}

export default function DailyLearningResultReport({ setShowModal }: ModalProps) {
  return (
    <ReactModal
      isVisible={true}
      onBackButtonPress={() => setShowModal(false)}
      onBackdropPress={() => setShowModal(false)}>
      <View
        style={{
          backgroundColor: color.background.mainLight,
          width: 300 * size.widthRate,
          borderRadius: 16 * size.widthRate,
          shadowOpacity: 0.7,
          elevation: 3,
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
            elevation: 3,
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
              color: color.text.white,
            }}>
            네
          </Text>
        </TouchableOpacity>
      </View>
    </ReactModal>
  )
}
