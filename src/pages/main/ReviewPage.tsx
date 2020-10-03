import React from 'react'
import { View, ImageBackground, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { color, size } from 'common'

function WordContainer({ word, date }) {
  return (
    <View
      style={{
        borderColor: color.palette.mainDark,
        // borderWidth: Math.random() < 0.3 ? 2 : 0,›
        flexDirection: 'row',
        marginVertical: 4 * size.widthRate,
        width: 340 * size.widthRate,
        height: 40 * size.widthRate,
        borderRadius: 10 * size.widthRate,
        backgroundColor: color.background.mainLight,
        paddingHorizontal: 24 * size.widthRate,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOpacity: 0.2,
        shadowColor: 'rgb(100, 100, 100)',
        shadowRadius: 10,
        shadowOffset: {
          width: 3,
          height: 5,
        },
      }}>
      <Text
        style={{
          fontSize: size.normalizeFontSize(14),
          color: color.text.primary1,
        }}>
        {word}
      </Text>
      <Text
        style={{
          fontSize: size.normalizeFontSize(14),
          color: color.text.primary1,
        }}>
        {date}
      </Text>
    </View>
  )
}

export default function ReviewPage() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: color.background.default,
        // backgroundColor: 'red',
      }}>
      <ScrollView
        style={{
          paddingHorizontal: 20 * size.widthRate,
          paddingVertical: 60 * size.widthRate,
        }}>
        <Text
          style={{
            fontSize: size.normalizeFontSize(12),
            color: color.text.primary1,
            marginLeft: 28 * size.widthRate,
            marginBottom: 12 * size.widthRate,
            // fontWeight: 'bold',
          }}>
          아직 잘 모르겠어요
        </Text>
        <WordContainer word={'바나나'} date={'2020.09.24'} />
        <WordContainer word={'사과'} date={'2020.09.23'} />
        <WordContainer word={'할머니'} date={'2020.09.23'} />
        <WordContainer word={'병원'} date={'2020.09.21'} />
        <WordContainer word={'강아지'} date={'2020.09.21'} />
        <WordContainer word={'아빠'} date={'2020.09.21'} />
        <WordContainer word={'물개'} date={'2020.09.18'} />
        <WordContainer word={'동물원'} date={'2020.09.16'} />
        <WordContainer word={'책상'} date={'2020.09.16'} />
        <Text
          style={{
            fontSize: size.normalizeFontSize(12),
            color: color.text.primary1,
            marginLeft: 28 * size.widthRate,
            marginBottom: 12 * size.widthRate,
            marginTop: 32 * size.widthRate,
            // fontWeight: 'bold',
          }}>
          잘 알아요
        </Text>
        <WordContainer word={'대외비'} date={'2020.09.24'} />
        <WordContainer word={'공리주의'} date={'2020.09.23'} />
        <WordContainer word={'지적재산권'} date={'2020.09.23'} />
        <WordContainer word={'사력'} date={'2020.09.21'} />
        <WordContainer word={'강아지'} date={'2020.09.21'} />
        <WordContainer word={'아빠'} date={'2020.09.21'} />
        <WordContainer word={'물개'} date={'2020.09.18'} />
        <WordContainer word={'동물원'} date={'2020.09.16'} />
        <WordContainer word={'책상'} date={'2020.09.16'} />
        <View style={{ marginBottom: 80 * size.widthRate }} />
      </ScrollView>
      {/* <ImageBackground
        source={require('images/learningCamera.png')}
        style={{ width: size.screenWidth, height: size.screenHeight, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: color.background.mainLight,
            width: 280,
            height: 180,
            borderRadius: 12,
            borderWidth: 4,
            shadowOpacity: 0.7,
            shadowColor: 'rgb(100, 100, 100)',
            shadowRadius: 10,
            shadowOffset: {
              width: 3,
              height: 5,
            },
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 150 * size.heightRate,
          }}>
          <Text
            style={{
              fontSize: size.normalizeFontSize(64),
              color: color.text.primary1,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            바나나
          </Text>
        </View>
      </ImageBackground> */}
      <TouchableOpacity
        style={{
          width: 160 * size.widthRate,
          height: 42 * size.widthRate,
          position: 'absolute',
          bottom: 16 * size.widthRate,
          alignSelf: 'center',
          borderRadius: 8 * size.widthRate,
          marginBottom: 12 * size.heightRate,
          backgroundColor: color.button.mainDarkDisabled,
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
        <Text style={{ fontSize: size.normalizeFontSize(17), fontWeight: 'bold', color: color.text.white }}>
          복습 하기
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
