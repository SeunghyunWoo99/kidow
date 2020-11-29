import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ReactModal from 'react-native-modal'
import { color, size } from 'common'

interface ModalProps {
  setShowModal: (showModal: boolean) => void
}

export default function DailyLearningStart({ setShowModal }: ModalProps) {
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
            fontWeight: 'bold',
            textAlign: 'center',
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
    </ReactModal>
  )
}
