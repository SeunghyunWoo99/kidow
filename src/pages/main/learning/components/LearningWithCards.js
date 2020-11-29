import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { ViroARSceneNavigator } from '@akadrimer/react-viro'
import { color, size } from 'common'
import { DailyLearningStart } from 'modal'

import Modal from 'react-native-modal'

import { RNCamera } from 'react-native-camera'
import axios from 'axios'
import styled from 'styled-components'

const StyledView = styled(View)`
  border: 1px red solid;
  position: absolute;
  z-index: 99;
  width: ${(props) => `${props.w}px`};
  height: ${(props) => `${props.h}px`};
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
`
let stack = 0
let takePhotoInterval = null

function LookingForCard() {
  return (
    <>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 240 * size.widthRate,
          backgroundColor: '#00000088',
          position: 'absolute',
          zIndex: 10000,
        }}
      />
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 205 * size.widthRate,
          bottom: 0,
          backgroundColor: '#00000088',
          position: 'absolute',
          zIndex: 10000,
        }}
      />
      <View
        style={{
          width: '10%',
          height: '100%',
          backgroundColor: '#00000088',
          position: 'absolute',
          left: 0,
          zIndex: 10000,
        }}
      />
      <View
        style={{
          width: '10%',
          height: '100%',
          backgroundColor: '#00000088',
          position: 'absolute',
          right: 0,
          zIndex: 10000,
        }}
      />
      <View style={{ width: '100%', height: '100%', position: 'absolute', alignItems: 'center', zIndex: 10000 }}>
        <Text
          style={{
            position: 'absolute',
            fontFamily: 'BMJUA',
            fontSize: size.normalizeFontSize(20),
            color: color.text.white,
            top: 200 * size.heightRate,
          }}>
          점선 안에 카드를 위치시키세요
        </Text>
        {/* <Text
          style={{
            position: 'absolute',
            fontFamily: 'BMJUA',
            fontSize: size.normalizeFontSize(20),
            color: color.text.white,
            top: 280 * size.heightRate,
            textShadowColor: '#444',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10 * size.widthRate,
          }}>
          단어 '얼룩말'은 아직 준비되어있지 않아요
        </Text> */}
        <View
          style={{
            top: 260 * size.heightRate,
            width: 306 * size.widthRate,
            height: 184 * size.widthRate,
            borderStyle: 'dashed',
            borderColor: color.palette.white,
            borderRadius: 4 * size.widthRate,
            borderWidth: 4 * size.widthRate,
            backgroundColor: 'transparent',
          }}
        />
        {/* <TouchableOpacity
          style={{
            width: 160 * size.widthRate,
            height: 42 * size.widthRate,
            position: 'absolute',
            bottom: 88 * size.widthRate,
            alignSelf: 'center',
            borderRadius: 16 * size.widthRate,
            marginBottom: 12 * size.heightRate,
            backgroundColor: color.button.mainDark,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity: 0.7,
            shadowColor: 'rgb(100, 100, 100)',
            shadowRadius: 10,
            shadowOffset: {
              width: 3,
              height: 5,
            },
          }}>
          <Text
            style={{
              fontFamily: 'BMJUA',
              fontSize: size.normalizeFontSize(17),
              fontWeight: 'bold',
              color: color.text.white,
            }}>
            이 단어 요청하기
          </Text>
        </TouchableOpacity> */}
      </View>
    </>
  )
}

const LearningWithCards = () => {
  const [showModal, setShowModal] = useState(true)

  var InitialARScene = require('./LearningWithCardsAR')

  //modal
  const [isModalVisible, setModalVisible] = useState(false)

  // text detection var
  const [isDetected, setIsDetected] = useState(false)
  const [isCapturing, setIsCapturing] = useState(false)
  const cameraRef = React.useRef(null)
  const [chars, setChars] = useState(['1 1 1 1'])
  const takePhoto = async () => {
    if (cameraRef && !isCapturing) {
      setIsCapturing(true)
      stack += 1
      console.log(stack)
      await cameraRef.current
        .takePictureAsync({
          quality: 0.1,
          exif: true,
          base64: true,
          doNotSave: true,
        })
        .then((res) => {
          return res.base64
        })
        .then((res) => {
          return axios.post('http://192.168.0.3:3001/upload', { img: res })
        })
        .then((res) => {
          setChars(res.data)
          console.log(chars)
          setIsCapturing(false)
        })
        .catch((err) => {
          console.log(err)
          setIsCapturing(false)
        })
    }
  }
  useEffect(() => {
    // Sun & Nal
    // takePhotoInterval = setInterval(takePhoto, 1000)
    // setTimeout(() => {
    //   clearInterval(takePhotoInterval)
    //   setModalVisible(true)
    // }, 6000)
    // setTimeout(() => {
    //   clearInterval(takePhotoInterval)
    //   setModalVisible(true)
    // }, 15240)
    // setTimeout(() => {
    //   clearInterval(takePhotoInterval)
    //   setIsDetected(true)
    // }, 22500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isDetected ? (
        <ViroARSceneNavigator initialScene={{ scene: InitialARScene }} />
      ) : (
        <>
          <RNCamera
            ref={cameraRef}
            style={{
              width: 360,
              height: 600,
            }}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
          />
          {/* <SvgMaskedDim /> */}
          {/* <StyledView x={0.25 * 360} y={0.33 * 600} w={0.5 * 360} h={0.25 * 600} /> */}
          {chars.map &&
            chars.map((item, index) => {
              if (index === 0) {
                return null
              }
              const arr = item.split(' ')
              if (arr.length === 4) {
                return (
                  <StyledView
                    x={(arr[0] / 3024.0) * 360}
                    y={(arr[1] / 4032.0) * 600}
                    w={(arr[2] / 3024.0) * 360}
                    h={(arr[3] / 4032.0) * 600}
                    key={index}
                  />
                )
              }
            })}
          <LookingForCard />
          <Modal
            isVisible={isModalVisible}
            onBackButtonPress={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}>
            <View
              style={{
                backgroundColor: color.background.mainLight,
                width: 300 * size.widthRate,
                borderRadius: 16 * size.widthRate,
                shadowOpacity: 0.7,
                elevation: 3,
                shadowColor: 'rgb(100, 100, 100)',
                shadowRadius: 10,
                shadowOffset: {
                  width: 3,
                  height: 5,
                },
                padding: 32 * size.widthRate,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(18),
                  color: color.text.secondary1,
                  textAlign: 'center',
                  marginBottom: 16 * size.heightRate,
                }}>
                {'아직 단어'}
              </Text>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(18),
                  color: color.text.secondary1,
                  textAlign: 'center',
                  marginBottom: 16 * size.heightRate,
                }}>
                {' '}
                <Text
                  style={{
                    fontSize: size.normalizeFontSize(24),
                    color: color.text.mainDark,
                  }}>
                  {'사과'}
                </Text>
                {'는'}
              </Text>
              <Text
                style={{
                  fontFamily: 'BMJUA',
                  fontSize: size.normalizeFontSize(18),
                  color: color.text.secondary1,
                  textAlign: 'center',
                  marginBottom: 16 * size.heightRate,
                }}>
                {'준비되지 않았어요.. 조만간 준비할게요!'}
              </Text>
              <View
                style={{
                  backgroundColor: color.background.mainLight,
                  width: 300 * size.widthRate,
                  borderRadius: 16 * size.widthRate,
                  shadowOpacity: 0.7,
                  elevation: 3,
                  shadowColor: 'rgb(100, 100, 100)',
                  shadowRadius: 10,
                  shadowOffset: {
                    width: 3,
                    height: 5,
                  },
                  padding: 32 * size.widthRate,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              />
              <TouchableOpacity
                style={{
                  width: 240 * size.widthRate,
                  height: 42 * size.widthRate,
                  borderRadius: 12 * size.widthRate,
                  marginBottom: 12 * size.heightRate,
                  backgroundColor: color.button.mainDark,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowOpacity: 0.5,
                  elevation: 3,
                  shadowColor: 'rgb(100, 100, 100)',
                  shadowRadius: 8 * size.widthRate,
                  shadowOffset: {
                    width: 3,
                    height: 5,
                  },
                }}
                onPress={() => {
                  takePhotoInterval = setInterval(takePhoto, 1000)
                  setModalVisible(false)
                }}>
                <Text
                  style={{
                    fontFamily: 'BMJUA',
                    fontSize: size.normalizeFontSize(20),
                    color: color.text.white,
                  }}>
                  네
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <DailyLearningStart {...{ showModal, setShowModal }} />
        </>
      )}
    </>
  )
}

export default LearningWithCards
