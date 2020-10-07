import React, { Children, ReactNode, useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Slider, Image } from 'react-native'
import { Picker } from '@react-native-community/picker'
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
}

function Cell({ label, disabled, children, haveDetails }: CellProps) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <TouchableOpacity
      onPress={() => setIsSelected((prev) => !prev)}
      disabled={disabled}
      style={{
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
        shadowColor: 'rgb(100, 100, 100)',
        shadowRadius: 10,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      }}>
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
  const [selectedValue, setSelectedValue] = useState('java')

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
        <Cell label={'기본 10분 학습'} disabled={true}>
          <Slider
            style={{ width: 300 * size.widthRate, height: 40 * size.widthRate, alignSelf: 'center' }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={color.palette.mainDark}
            maximumTrackTintColor="#00000022"
          />
        </Cell>
      </CellContainer>
      <CellContainer title={'학습 단어 갯수'}>
        <Cell label={'단어 10개'} disabled={true} />
      </CellContainer>
      <CellContainer title={'기본 학습 방법'}>
        <Cell label={'카드로 학습'} />
        <Cell label={'카드 없이 학습'} />
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
