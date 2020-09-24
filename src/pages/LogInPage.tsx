import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { size, color } from 'common'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function LogInPage() {
  const navigation = useNavigation()

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.background.mainLight }}>
      <Image
        source={require('../../assets/logos/logo.png')}
        style={{ width: 300 * size.widthRate, height: 300 * size.widthRate }}
      />
      <View style={{ position: 'absolute', bottom: 100, alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 300 * size.widthRate,
            height: 60 * size.widthRate,
            borderRadius: 8 * size.widthRate,
            backgroundColor: color.button.mainDark,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity: 0.7,
            shadowColor: 'rgb(100, 100, 100)',
            shadowRadius: 10,
            shadowOffset: {
              width: 3,
              height: 5,
            },
          }}
          onPress={() => {}}>
          <Text style={{ fontSize: size.normalizeFontSize(20), fontWeight: 'bold', color: color.text.white }}>
            로그인 하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RootStackNavigator')}>
          <Text
            style={{
              fontSize: size.normalizeFontSize(14),
              color: color.text.secondary1,
              marginTop: 32 * size.widthRate,
            }}>
            회원이 아니신가요?{' '}
            <Text
              style={{
                textDecorationLine: 'underline',
              }}>
              가입하기
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
