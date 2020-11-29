import React, { useRef, useCallback } from 'react'
import { ViewStyle, TouchableOpacity, View, Animated, Text } from 'react-native'
import styled from 'styled-components/native'
import { size, color } from 'common'

/** Tooltip의 삼각형 모양 포인터의 사이즈(너비 기준) */
const POINTER_SIZE = 16 * size.widthRate

/** Tooltip의 뾰족한 삼각형 모양 포인터. 삼각형 모양 View에는 Linear Gradient 적용이 불가능해서 포인터 색은 일정함. 포인터 색이 부자연스럽다면 이 부분 확인 */
const Pointer = styled.View<{ isLeft?: boolean }>`
  width: 0;
  height: 0;
  margin-horizontal: ${15 * size.widthRate}px;
  border-right-width: ${POINTER_SIZE / 2}px;
  border-left-width: ${POINTER_SIZE / 2}px;
  border-top-width: ${POINTER_SIZE}px;
  background-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  /* TODO: border에는 linear gradient 적용이 불가능해서 색상을 고정시킴. 포인터가 정 중앙이 아닌 곳에 위치할 경우 어색해 보일 수 있으니 위치에 따라 다른 색을 설정해줘야 할 것 */
  border-top-color: ${color.background.mainLight};
`

interface TooltipProps {
  /** Tooltip 안에 들어갈 텍스트 */
  text: string
  /** Tooltip의 너비 */
  width?: number
  /** 포인터(삼각형)을 포함한 Tooltip의 높이 */
  height?: number
  /** 포인터의 방향: 상 또는 하, 디폴트는 down */
  pointerDirection?: 'up' | 'down'
  /** 포인터의 위치: 중간, 좌측, 우측. 디폴트는 중간 */
  pointerAlign?: 'center' | 'left' | 'right'
  /** Tooltip의 pressable 여부. 디폴트는 false */
  pressable?: boolean
  /** pressable이 true 일 때, 눌렀을 때의 동작 */
  onPress?: () => void
  /** 기타 style */
  style?: ViewStyle
}

/** 파란색 말풍선 모양의 Tooltip */
export default function Tooltip(props: TooltipProps) {
  /** scale 조정하는 Animated Value */
  const animatedValue = useRef(new Animated.Value(0)).current
  /** Tooltip의 scale */
  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.05, 1],
  })

  /** pressable이 true 일 때,터치 피드백 */
  const onPressIn = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => animatedValue.setValue(0))
  }, [animatedValue])

  /** 포인터 정렬 */
  const pointerAlign = props.pointerAlign === 'left' ? 'flex-start' : 'right' ? 'flex-end' : 'center'

  return (
    <Animated.View style={[{ transform: [{ scale }] }]}>
      <TouchableOpacity
        style={[{ width: props.width, height: props.height }, { ...props.style }]}
        disabled={!props.pressable}
        activeOpacity={1}
        onPressIn={onPressIn}
        onPress={props.onPress}>
        <View style={{ width: props.width, height: props.height, alignItems: pointerAlign }}>
          {/* 포인터가 상단에 위치하면 180도 회전시킨다 */}
          {props.pointerDirection === 'up' && (
            <Pointer isLeft={props.pointerAlign === 'left'} style={{ transform: [{ rotate: '180deg' }] }} />
          )}
          <View
            style={{
              width: props.width,
              height: props.height && props.height - POINTER_SIZE,
              paddingHorizontal: 18 * size.widthRate,
              paddingVertical: 14 * size.widthRate,
              borderRadius: 8 * size.widthRate,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: color.background.mainLight,
              shadowOpacity: 0.6,
              elevation: 3,
              shadowColor: 'rgb(100, 100, 100)',
              shadowRadius: 10,
              shadowOffset: {
                width: 3,
                height: 5,
              },
            }}>
            <Text
              style={{
                fontSize: size.normalizeFontSize(16),
                color: color.text.primary1,
                textAlign: 'center',
              }}>
              {props.text}
            </Text>
          </View>
          {props.pointerDirection !== 'up' && <Pointer isLeft={props.pointerAlign === 'left'} />}
        </View>
      </TouchableOpacity>
    </Animated.View>
  )
}
