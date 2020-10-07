import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { color, size } from 'common'
import { BottomButton } from 'components'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function PhoneNumberAuth() {
  const navigation = useNavigation()
  const [code, setCode] = useState('')

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
            인증 번호
          </Text>
          <View style={{ left: -4 * size.widthRate, marginBottom: 32 * size.heightRate }}>
            <SmoothPinCodeInput
              value={code}
              onTextChange={(text: string) => setCode(text)}
              cellStyle={{
                width: 40 * size.widthRate,
                height: 52 * size.widthRate,
                borderRadius: 4 * size.widthRate,
                borderWidth: 1 * size.widthRate,
                borderColor: '#ddd',
                // borderColor: color.palette.mainDark,
              }}
              cellStyleFocused={{
                width: 40 * size.widthRate,
                height: 52 * size.widthRate,
                borderRadius: 4 * size.widthRate,
                borderWidth: 1 * size.widthRate,
                borderColor: color.palette.mainDark,
              }}
              cellSpacing={12 * size.widthRate}
              textStyle={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(24),
                color: color.text.primary1,
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(12),
              color: color.text.secondary2,
              lineHeight: 20 * size.heightRate,
            }}>
            {'+821055269959로 인증 번호가 발송되었습니다.\n문자가 오지 않았나요? '}
            <Text style={{ textDecorationLine: 'underline' }}>{'4분 32초 후에 다시 받기'}</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <BottomButton label={'로그인'} isDisabled={code.length !== 4} onPress={() => navigation.navigate('NameInput')} />
    </KeyboardAvoidingView>
  )
}
