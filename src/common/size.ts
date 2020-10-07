import { Dimensions, PixelRatio, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

/** 화면 가로 길이 */
const screenWidth = Dimensions.get('window').width
/** 화면 세로 길이 */
const screenHeight =
  Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height + getStatusBarHeight()
/** Zeplin 기준 가로 화면 배율 */
const widthRate = screenWidth / 375
/** Zeplin 기준 세로 화면 배율 */
const heightRate = screenHeight / 812
/** 반응형 폰트 크기 */
function normalizeFontSize(size: number): number {
  return Platform.OS === 'ios' ? size * widthRate : (size - PixelRatio.get() + 2) * widthRate
}

export default { screenWidth, screenHeight, widthRate, heightRate, normalizeFontSize }
