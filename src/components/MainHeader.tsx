import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { size } from 'common'

export default function MainHeader() {
  const navigation = useNavigation()

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={['#00000044', '#00000000']}
      style={{ height: 120 * size.heightRate, flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={() => navigation.navigate('SettingStackNavigator')}>
        <Image
          source={require('icons/settings.png')}
          style={{
            width: 30 * size.widthRate,
            height: 30 * size.widthRate,
            marginHorizontal: 24 * size.widthRate,
            marginVertical: 40 * size.heightRate,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileStackNavigator')}>
        <Image
          source={require('icons/profile.png')}
          style={{
            width: 30 * size.widthRate,
            height: 30 * size.widthRate,
            margin: 24 * size.widthRate,
            marginVertical: 40 * size.heightRate,
          }}
        />
      </TouchableOpacity>
    </LinearGradient>
  )
}
