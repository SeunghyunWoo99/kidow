import React from 'react'
import { View, Text, Image, Button, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { size, color } from 'common'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function FrontPage() {
  const navigation = useNavigation()

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.background.mainLight }}>
      <Image
        source={require('../../assets/logos/logo.png')}
        style={{ width: 120 * size.widthRate, height: 120 * size.widthRate, bottom: 40 * size.heightRate }}
      />
      <View style={{ position: 'absolute', bottom: 100, alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 280 * size.widthRate,
            height: 60 * size.widthRate,
            borderRadius: 12 * size.widthRate,
            backgroundColor: color.button.mainDark,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity: 0.7,
            elevation: 3,
            shadowColor: 'rgb(100, 100, 100)',
            shadowRadius: 10,
            shadowOffset: {
              width: 3,
              height: 5,
            },
          }}
          onPress={() => navigation.navigate('LogInStackNavigator')}>
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(20),
              fontWeight: 'bold',
              color: color.text.white,
            }}>
            로그인 하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpStackNavigator')}>
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
      <Pressable
        onPress={() => {
          navigation.navigate('RootStackNavigator')
        }}
        style={{ position: 'absolute', left: 20, bottom: 10 }}>
        <Text>Main</Text>
      </Pressable>
    </View>
  )
}
