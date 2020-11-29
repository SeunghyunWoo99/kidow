import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ReactModal from 'react-native-modal'
import { color, size } from 'common'

interface ModalProps {
  /** 모달 show 여부 */
  showModal?: boolean
  /** 모달 show 여부 set 함수 */
  setShowModal: (state: boolean) => void
  /** 전역 모달일 때 창 닫힌 후 모달 삭제 */
  removeModal?: () => void
}

export default function QuizEnd({ showModal, setShowModal, removeModal }: ModalProps) {
  const navigation = useNavigation()

  return (
    <ReactModal
      isVisible={showModal}
      onBackButtonPress={() => setShowModal && setShowModal(false)}
      onBackdropPress={() => setShowModal && setShowModal(false)}
      onModalHide={() => removeModal && removeModal()}>
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
          source={require('icons/quizActive.png')}
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
            marginBottom: 16 * size.heightRate,
          }}>
          잘했어요!
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
          {'개\n복습해 볼까요?'}
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
          onPress={() => {
            setShowModal(false)
            navigation.navigate('ReviewPage')
          }}>
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