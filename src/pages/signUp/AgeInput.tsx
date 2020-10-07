import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { useNavigation } from '@react-navigation/native'
import { color, size } from 'common'
import { BottomButton } from 'components'

export default function AgeInput() {
  const [selectedValue, setSelectedValue] = useState('java')

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
              marginBottom: 120 * size.heightRate,
            }}>
            아이가 몇 살인가요?
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(24),
                color: color.text.primary1,
                textAlign: 'center',
                marginRight: 96 * size.widthRate,
              }}>
              만
            </Text>
            <Picker
              selectedValue={selectedValue}
              style={{
                height: 50 * size.widthRate,
                width: 150 * size.widthRate,
                top: -72 * size.heightRate,
              }}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}>
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
            </Picker>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(24),
                color: color.text.primary1,
                textAlign: 'center',
                marginLeft: 12 * size.widthRate,
              }}>
              세
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <BottomButton label={'다음'} isDisabled={false} onPress={() => {}} />
    </KeyboardAvoidingView>
  )
}
