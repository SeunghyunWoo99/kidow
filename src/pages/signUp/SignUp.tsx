import React, { useState } from 'react'
import { ScrollView, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { color, size } from 'common'
import { BottomButton } from 'components'

interface InputFieldProps {
  fieldName: string
  placeHolder: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  secureInput?: boolean
  style?: ViewStyle
}

function InputField({ fieldName, placeHolder, value, setValue, secureInput, style }: InputFieldProps) {
  return (
    <View style={{ ...style }}>
      <Text
        style={{
          fontFamily: 'BMJUA',
          fontSize: size.normalizeFontSize(14),
          color: color.text.primary1,
          marginBottom: 8 * size.heightRate,
          marginLeft: 16 * size.widthRate,
        }}>
        {fieldName}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: color.palette.mainDark,
          borderWidth: 1 * size.widthRate,
          borderRadius: 8 * size.widthRate,
          paddingHorizontal: 16 * size.widthRate,
        }}>
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
          placeholder={placeHolder}
          onChangeText={(text) => setValue(text)}
          value={value}
          keyboardType={'email-address'}
          secureTextEntry={secureInput}
        />
      </View>
    </View>
  )
}

export default function SignUp() {
  const navigation = useNavigation()
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingVertical: 128 * size.heightRate,
          paddingHorizontal: 28 * size.widthRate,
          backgroundColor: color.background.default,
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ width: '100%', height: '100%' }}>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(32),
                color: color.text.primary1,
                marginBottom: 84 * size.heightRate,
              }}>
              회원가입
            </Text>
            <InputField
              fieldName={'이메일'}
              placeHolder={'example@haroo.com'}
              value={emailAddress}
              setValue={setEmailAddress}
              style={{ marginBottom: 32 * size.heightRate }}
            />
            <InputField
              fieldName={'비밀번호'}
              placeHolder={'비밀번호'}
              value={password}
              setValue={setPassword}
              secureInput={true}
            />
            <InputField
              fieldName={''}
              placeHolder={'비밀번호 확인'}
              value={passwordConfirmation}
              setValue={setPasswordConfirmation}
              style={{ marginTop: -10 * size.widthRate }}
              secureInput={true}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <BottomButton
        label={'인증번호 받기'}
        isDisabled={emailAddress === '' || password === '' || passwordConfirmation === ''}
        onPress={() => navigation.navigate('NameInput')}
      />
    </View>
  )
}
