import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image, ViewStyle } from 'react-native'
import { Calendar } from 'react-native-calendars'
import styled from 'styled-components/native'
import { color, size } from 'common'
import { Edit } from 'icons'

const Container = styled.View`
  width: ${325 * size.widthRate}px;
  padding: ${24 * size.widthRate}px;
  border-radius: ${20 * size.widthRate}px;
  background-color: ${color.background.white};
  align-self: center;
`
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
              source={require('images/hoon.jpg')}
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
    </ScrollView>
  )
}
