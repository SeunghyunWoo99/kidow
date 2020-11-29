import React, { ReactNode, useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image, ViewStyle } from 'react-native'
import Slider from '@react-native-community/slider'
import { color, size } from 'common'

interface CellContainerProps {
  title?: string
  description?: string
  children: ReactNode
}

function CellContainer({ title, description, children }: CellContainerProps) {
  return (
    <View style={{ marginVertical: 12 * size.heightRate }}>
      <Text
        style={{
          fontFamily: 'BMJUA',
          fontSize: size.normalizeFontSize(12),
          color: color.text.secondary1,
          left: 24 * size.widthRate,
          marginBottom: 8 * size.heightRate,
        }}>
        {title && title}
      </Text>
      {children}
      {description && (
        <Text
          style={{
            fontFamily: 'BMJUA',
            fontSize: size.normalizeFontSize(12),
            color: color.text.secondary1,
            left: 24 * size.widthRate,
            marginBottom: 4 * size.heightRate,
          }}>
          {description}
        </Text>
      )}
    </View>
  )
}

interface CellProps {
  disabled?: boolean
  label?: string
  children?: ReactNode
  haveDetails?: boolean
  style?: ViewStyle
}

function Cell({ label, disabled, children, haveDetails, style }: CellProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <TouchableOpacity
      onPress={() => setIsSelected((prev) => !prev)}
      disabled={disabled}
      style={[
        {
          width: 325 * size.widthRate,
          // height: 40 * size.widthRate,
          borderRadius: 20 * size.widthRate,
          borderColor: color.palette.mainDark,
          borderWidth: isSelected ? 1 : 0,
          paddingVertical: 10 * size.widthRate,
          paddingHorizontal: 24 * size.widthRate,
          marginVertical: 4 * size.heightRate,
          backgroundColor: color.background.white,
          justifyContent: 'center',
          shadowOpacity: 0.1,
          elevation: 3,
          shadowColor: 'rgb(100, 100, 100)',
          shadowRadius: 10,
          shadowOffset: {
            width: 1,
            height: 1,
          },
        },
        { ...style },
      ]}>
      <View style={{ flexDirection: 'row', alignContent: 'center' }}>
        {label && (
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(16),
              color: isSelected ? color.text.mainDark : color.text.primary1,
              marginVertical: children && 8 * size.widthRate,
            }}>
            {label}
          </Text>
        )}
        {haveDetails && (
          <Image
            source={require('icons/goDetails.png')}
            style={{ width: 18 * size.widthRate, height: 18 * size.widthRate, position: 'absolute', right: 0 }}
          />
        )}
      </View>
      {children && children}
    </TouchableOpacity>
  )
}

function MiniCell({ label }) {
  return (
    <TouchableOpacity
      style={{
        width: 155 * size.widthRate,
        paddingVertical: 10 * size.widthRate,
        borderRadius: 20 * size.widthRate,
        backgroundColor: color.background.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.1,
        elevation: 3,
        shadowColor: 'rgb(100, 100, 100)',
        shadowRadius: 10,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      }}>
      <Text
        style={{
          fontFamily: 'BMJUA',
          fontSize: size.normalizeFontSize(16),
          color: color.text.primary1,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default function SettingPage() {
  const [learningTime, setLearningTime] = useState(5)
  const [vocaNum, setVocaNum] = useState(5)

  return (
    <ScrollView
      style={{
        paddingHorizontal: 25 * size.widthRate,
        paddingVertical: 20 * size.heightRate,
      }}>
      <CellContainer title={'학습 난이도'}>
        <Cell label={'상'} />
        <Cell label={'중'} />
        <Cell label={'하'} />
      </CellContainer>
      <CellContainer title={'기본 학습 시간'}>
        <Cell label={`기본 ${learningTime}초 학습`} disabled={true}>
          <Slider
            style={{ width: 300 * size.widthRate, height: 40 * size.widthRate, alignSelf: 'center' }}
            minimumValue={0.01}
            maximumValue={1}
            minimumTrackTintColor={color.palette.mainDark}
            maximumTrackTintColor="#00000022"
            thumbTintColor={color.background.white}
            value={0.5}
            step={0.1}
            onValueChange={(value) => {
              setLearningTime(Math.ceil(value * 10))
            }}
          />
        </Cell>
      </CellContainer>
      <CellContainer title={'학습 단어 갯수'}>
        <Cell
          label={'단어'}
          disabled={true}
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 4 * size.widthRate,
                borderColor: color.text.secondary2,
                width: 18 * size.widthRate,
                height: 14 * size.widthRate,
                marginHorizontal: 12 * size.widthRate,
              }}
              onPress={() => setVocaNum((n) => (n <= 1 ? 1 : --n))}
              hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(14),
                  color: color.text.secondary2,
                  alignSelf: 'center',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'BMJUA',
                fontSize: size.normalizeFontSize(18),
                color: color.text.primary1,
                alignSelf: 'center',
              }}>
              {`${vocaNum}개`}
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 4 * size.widthRate,
                borderColor: color.text.secondary2,
                width: 18 * size.widthRate,
                height: 14 * size.widthRate,
                marginHorizontal: 12 * size.widthRate,
              }}
              onPress={() => setVocaNum((n) => (n >= 10 ? 10 : ++n))}
              hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(14),
                  color: color.text.secondary2,
                  alignSelf: 'center',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </Cell>
      </CellContainer>
      <CellContainer>
        <Cell label={'알림 설정'} disabled={true} haveDetails={true} />
        <Cell label={'로그인 설정'} disabled={true} haveDetails={true} />
      </CellContainer>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MiniCell label={'로그아웃'} />
        <MiniCell label={'계정삭제'} />
      </View>
      <Text
        style={{
          fontFamily: 'BMJUA',
          fontSize: size.normalizeFontSize(12),
          marginTop: 24 * size.heightRate,
          marginBottom: 72 * size.heightRate,
          color: color.text.secondary2,
          alignSelf: 'center',
        }}>
        version 0.0.1
      </Text>
    </ScrollView>
  )
}
