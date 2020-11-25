import React, { useCallback, useEffect, useState } from 'react'
import { View, ImageBackground, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { format } from 'date-fns'
import { color, size } from 'common'
import { ViroARSceneNavigator } from '@akadrimer/react-viro'

const THRESHOLD_NUMBER_OF_SELECTED_CARDS = 2

const randomColors = ['#ffbf09', '#8A5E70', '#5BAD90']

const UNKNOWN_WORDS = [
  {
    id: '0',
    word: '바나나',
    date: new Date(2020, 10, 4),
  },
  {
    id: '1',
    word: '기차',
    date: new Date(2020, 10, 4),
  },
  {
    id: '2',
    word: '사과',
    date: new Date(2020, 10, 4),
  },
  {
    id: '3',
    word: '할머니',
    date: new Date(2020, 10, 4),
  },
  {
    id: '4',
    word: '병원',
    date: new Date(2020, 10, 4),
  },
  {
    id: '5',
    word: '강아지',
    date: new Date(2020, 10, 4),
  },
  {
    id: '6',
    word: '아빠',
    date: new Date(2020, 10, 4),
  },
  {
    id: '7',
    word: '물개',
    date: new Date(2020, 10, 4),
  },
  {
    id: '8',
    word: '동물원',
    date: new Date(2020, 10, 4),
  },
  {
    id: '9',
    word: '책상',
    date: new Date(2020, 10, 4),
  },
]

const KNOWN_WORDS = [
  {
    id: '10',
    word: '대외비',
    date: new Date(2020, 10, 4),
  },
  {
    id: '11',
    word: '핍진성',
    date: new Date(2020, 10, 4),
  },
  {
    id: '12',
    word: '인플레이션',
    date: new Date(2020, 10, 4),
  },
  {
    id: '13',
    word: '기축통화',
    date: new Date(2020, 10, 4),
  },
  {
    id: '14',
    word: '배당주',
    date: new Date(2020, 10, 4),
  },
  {
    id: '15',
    word: '존버',
    date: new Date(2020, 10, 4),
  },
  {
    id: '16',
    word: '치맥',
    date: new Date(2020, 10, 4),
  },
  {
    id: '17',
    word: '가화만사성',
    date: new Date(2020, 10, 4),
  },
  {
    id: '18',
    word: 'ㅇㅈ',
    date: new Date(2020, 10, 4),
  },
  {
    id: '19',
    word: '바다이야기',
    date: new Date(2020, 10, 4),
  },
]

function WordContainer({ wordData, index, onSelected, onDeselected }) {
  /** 랜덤한 색상 */
  const randomColor = randomColors[index % 3]
  const [isSelected, setIsSelected] = useState(false)

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isSelected ? randomColor : color.background.white,
        flexDirection: 'row',
        marginVertical: 8 * size.widthRate,
        width: 340 * size.widthRate,
        height: 80 * size.widthRate,
        borderRadius: 10 * size.widthRate,
        paddingHorizontal: 24 * size.widthRate,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOpacity: 0.2,
        shadowColor: 'rgb(100, 100, 100)',
        shadowRadius: 5,
        shadowOffset: {
          width: 5,
          height: 5,
        },
      }}
      onPress={() => {
        isSelected ? onDeselected(wordData.id) : onSelected(wordData)
        setIsSelected((prev) => !prev)
      }}>
      <Text
        style={{
          fontFamily: 'BMJUA',
          fontSize: size.normalizeFontSize(32),
          color: isSelected ? color.background.white : randomColor,
        }}>
        {wordData.word}
      </Text>
      <Text
        style={{
          fontFamily: 'BMJUA',
          fontSize: size.normalizeFontSize(14),
          color: isSelected ? color.background.white : randomColor,
        }}>
        {format(wordData.date, 'yyyy.MM.dd')}
      </Text>
    </TouchableOpacity>
  )
}

export default function ReviewPage() {
  /** 선택된 단어 모아 줌 */
  const [selectedWords, setSelectedWords] = useState([])
  /** 복습하기 버튼 disabled 여부 */
  const [buttonDisabled, setButtonDisabled] = useState(true)
  /** 단어 선택 페이지 shown 여부, 선택 완료 시 복습 화면으로 넘어감 */
  const [selectWords, setSelectWords] = useState(true)

  const onWordSelected = useCallback((word) => {
    setSelectedWords((data) => data.concat(word))
  }, [])
  const onWordDeselected = useCallback((id) => {
    setSelectedWords((prevData) => prevData.filter((word) => word.id !== id))
  }, [])

  useEffect(() => {
    setButtonDisabled(selectedWords.length < THRESHOLD_NUMBER_OF_SELECTED_CARDS)
  }, [selectedWords.length])

  var _sharedProps = {
    apiKey: 'API_KEY_HERE',
  }
  var InitialARScene = require('./ReviewAR')

  const [navigatorType, setNavigatorType] = useState('UNSET')
  // console.log(navigatorType);
  const [sharedProps, setSharedProps] = useState(_sharedProps)

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        {selectWords ? (
          <>
            <ScrollView
              style={{
                paddingHorizontal: 20 * size.widthRate,
                paddingVertical: 60 * size.heightRate,
              }}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(24),
                  color: color.text.primary1,
                  marginLeft: 28 * size.widthRate,
                  marginBottom: 12 * size.widthRate,
                  textAlign: 'center',
                  // fontWeight: 'bold',
                }}>
                잘 모르겠어요
              </Text>
              {UNKNOWN_WORDS.map((item, index) => (
                <WordContainer
                  key={item.id}
                  wordData={item}
                  index={index}
                  onSelected={onWordSelected}
                  onDeselected={onWordDeselected}
                />
              ))}
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(24),
                  color: color.text.mainDark,
                  marginLeft: 28 * size.widthRate,
                  marginBottom: 12 * size.widthRate,
                  marginTop: 32 * size.widthRate,
                  textAlign: 'center',
                  // fontWeight: 'bold',
                }}>
                잘 알아요
              </Text>
              {KNOWN_WORDS.map((item, index) => (
                <WordContainer
                  key={item.id}
                  wordData={item}
                  index={index}
                  onSelected={onWordSelected}
                  onDeselected={onWordDeselected}
                />
              ))}
              <View style={{ marginBottom: 80 * size.widthRate }} />
            </ScrollView>
            <TouchableOpacity
              style={{
                width: 160 * size.widthRate,
                height: 42 * size.widthRate,
                position: 'absolute',
                bottom: 16 * size.widthRate,
                alignSelf: 'center',
                borderRadius: 16 * size.widthRate,
                marginBottom: 12 * size.heightRate,
                backgroundColor: buttonDisabled ? color.button.mainDarkDisabled : color.button.mainDark,
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
              onPress={() => setSelectWords(false)}
              disabled={buttonDisabled}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(17),
                  fontWeight: 'bold',
                  color: color.text.white,
                }}>
                복습 하기
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <View
            style={{
              width: size.screenWidth,
              height: size.screenHeight,
            }}>
            <ViroARSceneNavigator {...sharedProps} initialScene={{ scene: InitialARScene }} />
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}
