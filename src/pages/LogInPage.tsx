import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function LogInPage() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LogInPage</Text>
      <Button title={'Go Main'} onPress={() => navigation.navigate('RootStackNavigator')} />
    </View>
  )
}
