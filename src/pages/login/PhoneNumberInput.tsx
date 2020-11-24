import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { color, size } from 'common'
import { BottomButton } from 'components'

export default function PhoneNumberInput() {
  const navigation = useNavigation()
  const [value, onChangeText] = useState('')

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 144 * size.heightRate,
        paddingHorizontal: 32 * size.widthRate,
        backgroundColor: color.background.default,
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ width: '100%', height: '100%' }}>
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(32),
              color: color.text.primary1,
              marginBottom: 72 * size.heightRate,
            }}>
            내 전화번호
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(14),
                color: color.text.primary1,
                textAlign: 'center',
                marginRight: 24 * size.widthRate,
              }}>
              +82
            </Text>
            <TextInput
              style={{
                width: 300 * size.widthRate,
                height: 40 * size.widthRate,
                borderRadius: 8 * size.widthRate,
                borderColor: color.palette.black4,
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(16),
                letterSpacing: 0.5 * size.widthRate,
                color: color.text.primary1,
              }}
              placeholder={'01055269969'}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              keyboardType={'number-pad'}
            />
          </View>
          <View
            style={{
              width: 320 * size.widthRate,
              height: 1.5 * size.heightRate,
              backgroundColor: color.palette.mainDark,
              left: -10 * size.widthRate,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <BottomButton
        label={'인증번호 받기'}
        isDisabled={value.length !== 11}
        onPress={() =>
          Alert.alert('핸드폰 번호 확인', '다음 번호로 인증 코드가 전송됩니다.\n+821055269969', [
            {
              text: '취소',
            },
            {
              text: '확인',
              onPress: () => navigation.navigate('PhoneNumberAuth'),
            },
          ])
        }
      />
    </KeyboardAvoidingView>
  )
}
