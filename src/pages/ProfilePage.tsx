import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image, ViewStyle } from 'react-native'
import { Calendar } from 'react-native-calendars'
import styled from 'styled-components/native'
import { color, size } from 'common'
import { Edit, RightArrow } from 'icons'

const DATA = [
  '2020.11.30',
  '2020.11.29',
  '2020.11.27',
  '2020.11.23',
  '2020.11.22',
  '2020.11.21',
  '2020.11.20',
  '2020.11.18',
  '2020.11.17',
  '2020.11.15',
  '2020.11.12',
  '2020.11.11',
]

function Container({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return (
    <View
      style={[
        {
          width: 325 * size.widthRate,
          paddingHorizontal: 24 * size.widthRate,
          paddingVertical: 16 * size.widthRate,
          margin: 12 * size.widthRate,
          borderRadius: 20 * size.widthRate,
          backgroundColor: color.background.white,
          alignSelf: 'center',
        },
        { ...style },
      ]}>
      {children}
    </View>
  )
}

export default function ProfilePage() {
  return (
    <ScrollView
      style={{
        paddingVertical: 20 * size.heightRate,
      }}>
      <Container>
        <View style={{ flexDirection: 'row', paddingVertical: 8 * size.heightRate }}>
          <View>
            <Image
              source={require('images/hoon.JPG')}
              style={{
                width: 120 * size.widthRate,
                height: 120 * size.widthRate,
                borderRadius: 60 * size.heightRate,
              }}
            />
            <TouchableOpacity
              style={{
                width: 36 * size.widthRate,
                height: 36 * size.widthRate,
                backgroundColor: color.background.white,
                borderRadius: 18 * size.heightRate,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: 0,
                bottom: 0,
                shadowOpacity: 0.4,
                elevation: 3,
                shadowColor: 'rgb(100, 100, 100)',
                shadowRadius: 10,
                shadowOffset: {
                  width: 3,
                  height: 5,
                },
              }}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingLeft: 24 * size.widthRate,
              paddingVertical: 8 * size.widthRate,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(28),
                color: color.text.primary1,
                marginTop: 24 * size.widthRate,
              }}>
              {'김훈래 '}
              <Text
                style={{
                  fontSize: size.normalizeFontSize(16),
                }}>
                {'어린이'}
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(14),
                color: color.text.secondary2,
                lineHeight: size.normalizeFontSize(16),
              }}>
              {'2016.04.24\n만 4세'}
            </Text>
          </View>
        </View>
      </Container>
      <Container>
        <Calendar
          // testID={testIDs.calendars.FIRST}
          current={'2020-11-28'}
          // style={styles.calendar}
          hideExtraDays
          theme={{
            backgroundColor: color.background.white,
            calendarBackground: color.background.white,
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: color.text.secondary2,
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: color.text.mainDark,
            dayTextColor: color.text.primary1,
            textDisabledColor: color.text.secondary2,
            arrowColor: color.palette.mainDark,
            disabledArrowColor: color.text.secondary2,
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            textDayFontFamily: 'BMJUA',
            textMonthFontFamily: 'BMJUA',
            textDayHeaderFontFamily: 'BMJUA',
            textMonthFontWeight: 'bold',
          }}
          markedDates={{
            '2020-11-03': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-04': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-07': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-09': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-13': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-14': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-17': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-19': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-23': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-24': { color: color.palette.mainLight, startingDay: true, endingDay: true },
            '2020-11-27': { color: color.palette.mainLight, startingDay: true, endingDay: true },
          }}
          markingType={'period'}
          // onDayPress={onDayPress}
          // markedDates={{
          //   [selected]: {
          //     selected: true,
          //     disableTouchEvent: true,
          //     selectedColor: 'orange',
          //     selectedTextColor: 'red',
          //   },
          // }}
        />
      </Container>
      <Text
        style={{
          fontFamily: 'BMJUA',
          fontSize: size.normalizeFontSize(14),
          color: color.text.secondary1,
          marginLeft: 54 * size.widthRate,
          marginTop: 20 * size.widthRate,
          marginBottom: 4 * size.widthRate,
        }}>
        {'학습 기록'}
      </Text>
      {DATA.map((label) => (
        <Container
          style={{
            margin: 4 * size.widthRate,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(16),
              color: color.text.primary1,
            }}>
            {label}
          </Text>
          <RightArrow
            width={22 * size.widthRate}
            height={22 * size.widthRate}
            style={{ marginVertical: -4 * size.widthRate }}
          />
        </Container>
      ))}
      <View style={{ height: 80 * size.heightRate }} />
    </ScrollView>
  )
}
