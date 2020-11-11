import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { color, size } from 'common'
import { BottomButton } from 'components'

export default function EmailInput() {
  const navigation = useNavigation()
  const [emailAdressInput, setEmailAdressInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordConfirmInput, setPasswordConfirmInput] = useState('')

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
            회원가입
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
              placeholder={'이메일'}
              onChangeText={(text) => setEmailAdressInput(text)}
              value={emailAdressInput}
              keyboardType={'email-address'}
            />
          </View>
          <View
            style={{
              width: 320 * size.widthRate,
              height: 1.5 * size.heightRate,
              backgroundColor: color.palette.mainDark,
              left: -10 * size.widthRate,
              marginBottom: 20 * size.heightRate,
            }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
              placeholder={'비밀번호'}
              onChangeText={(text) => setPasswordInput(text)}
              value={passwordInput}
              keyboardType={'email-address'}
            />
          </View>
          <View
            style={{
              width: 320 * size.widthRate,
              height: 1.5 * size.heightRate,
              backgroundColor: color.palette.mainDark,
              left: -10 * size.widthRate,
              marginBottom: 20 * size.heightRate,
            }}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
              placeholder={'비밀번호 확인'}
              onChangeText={(text) => setPasswordConfirmInput(text)}
              value={passwordConfirmInput}
              keyboardType={'email-address'}
            />
          </View>
          <View
            style={{
              width: 320 * size.widthRate,
              height: 1.5 * size.heightRate,
              backgroundColor: color.palette.mainDark,
              left: -10 * size.widthRate,
              marginBottom: 20 * size.heightRate,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <BottomButton
        label={'다음'}
        isDisabled={emailAdressInput.length === 0 || passwordInput.length === 0 || passwordConfirmInput.length === 0}
        onPress={() => {
          // 여기서 서버로 메일, 비밀번호 보냄
        }}
      />
    </KeyboardAvoidingView>
  )
}
