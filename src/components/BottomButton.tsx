import React, { useRef, useEffect } from 'react'
import { TouchableOpacity, Animated, Easing, Keyboard, KeyboardEvent, Text } from 'react-native'
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper'
import { color, size } from 'common'

interface BottomButtonProps {
  /** 버튼 레이블 */
  label: string
  /** 버튼 비활성화 */
  isDisabled: boolean
  /** 버튼 누를 시 동작하는 기능 */
  onPress(): void
}

/** 바텀 버튼 */
export default function BottomButton(props: BottomButtonProps) {
  /** IphoneX 버튼 높이 */
  const buttonHeightIphoneX = useRef(new Animated.Value(60 * size.widthRate + getBottomSpace())).current
  /** IphoneX 버튼 마진 */
  const buttonMarginIphoneX = useRef(new Animated.Value(0)).current
  /** IphoneX 버튼 패딩 */
  const buttonPaddingIphoneX = useRef(new Animated.Value(getBottomSpace())).current
  /** IphoneX 제외 버튼 마진 */
  const buttonMargin = useRef(new Animated.Value(0)).current

  useEffect(() => {
    /** 키보드 나타날 때 동작 */
    function onKeyboardWillShow(e: KeyboardEvent): void {
      if (isIphoneX()) {
        Animated.timing(buttonMarginIphoneX, {
          toValue: e.endCoordinates.height,
          easing: Easing.out(Easing.quad),
          duration: 320,
          useNativeDriver: false,
        }).start()
        Animated.timing(buttonHeightIphoneX, {
          toValue: 60 * size.widthRate,
          easing: Easing.out(Easing.quad),
          duration: 320,
          useNativeDriver: false,
        }).start()
        Animated.timing(buttonPaddingIphoneX, {
          toValue: 0,
          easing: Easing.out(Easing.quad),
          duration: 320,
          useNativeDriver: false,
        }).start()
      } else {
        Animated.timing(buttonMargin, {
          toValue: e.endCoordinates.height,
          easing: Easing.out(Easing.quad),
          duration: 320,
          useNativeDriver: false,
        }).start()
      }
    }

    /** 키보드 사라질 때 동작 */
    function onKeyboardWillHide(): void {
      if (isIphoneX()) {
        Animated.timing(buttonMarginIphoneX, {
          toValue: 0,
          easing: Easing.out(Easing.quad),
          duration: 320,
          useNativeDriver: false,
        }).start()
        Animated.timing(buttonHeightIphoneX, {
          toValue: 60 * size.widthRate + getBottomSpace(),
          easing: Easing.out(Easing.quad),
          duration: 320,
          useNativeDriver: false,
        }).start()
        Animated.timing(buttonPaddingIphoneX, {
          toValue: getBottomSpace(),
          easing: Easing.out(Easing.quad),
          duration: 320,
          useNativeDriver: false,
        }).start()
      } else {
        Animated.timing(buttonMargin, {
          toValue: 0,
          easing: Easing.out(Easing.quad),
          duration: 320,
          useNativeDriver: false,
        }).start()
      }
    }

    Keyboard.addListener('keyboardWillShow', onKeyboardWillShow)
    Keyboard.addListener('keyboardWillHide', onKeyboardWillHide)

    return (): void => {
      Keyboard.removeListener('keyboardWillShow', onKeyboardWillShow)
      Keyboard.removeListener('keyboardWillHide', onKeyboardWillHide)
    }
  }, [buttonHeightIphoneX, buttonMargin, buttonMarginIphoneX, buttonPaddingIphoneX])

  return (
    <TouchableOpacity
      disabled={props.isDisabled}
      activeOpacity={0.7}
      onPress={props.onPress}
      style={{ position: 'absolute', bottom: 0 }}>
      <Animated.View
        style={{
          backgroundColor: props.isDisabled ? color.button.mainDarkDisabled : color.button.mainDark,
          height: isIphoneX() ? buttonHeightIphoneX : 60 * size.widthRate,
          paddingBottom: isIphoneX() ? buttonPaddingIphoneX : 0,
          marginBottom: isIphoneX() ? buttonMarginIphoneX : buttonMargin,
          width: size.screenWidth,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'BMJUA',
            fontSize: size.normalizeFontSize(17),
            fontWeight: 'bold',
            color: color.text.white,
          }}>
          {props.label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  )
}
