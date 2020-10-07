import React from 'react'
import { View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import { color, size } from 'common'

export default function Back() {
  return (
    <View style={{ margin: 10 * size.widthRate }}>
      <Svg width="30" height="30" viewBox="0 0 25 24">
        <Path
          fill="none"
          fill-rule="evenodd"
          stroke={color.palette.mainDark}
          strokeLinejoin="round"
          strokeWidth="3"
          d="M5 20L5 4 21 4"
          transform="rotate(-45 13 12)"
        />
      </Svg>
    </View>
  )
}
