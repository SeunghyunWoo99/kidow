'use strict'

import React, { Component } from 'react'

import { StyleSheet, Image, View } from 'react-native'

import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroMaterials,
  ViroAnimations,
  ViroConstants,
  Viro3DObject,
  ViroImage,
  ViroText,
} from '@akadrimer/react-viro'
import { BorderlessButton } from 'react-native-gesture-handler'

export default class QuizAR extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      text: '불러오는 중입니다',
      object: <></>,
    }

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this)

    ViroMaterials.createMaterials({
      wolf: {
        diffuseTexture: require('objects3D/Wolves_BaseColor.png'),
      },
    })

    ViroAnimations.registerAnimations({
      bounceUp: {
        properties: {
          positionY: '+=0.02',
        },
        duration: 500, //.25 seconds..
      },

      bounceDown: {
        properties: {
          positionY: '-=0.02',
        },
        duration: 500, //.25 seconds..
      },

      bounceIt: [['bounceUp', 'bounceDown']],
      bounceRev: [['bounceDown', 'bounceUp']],
    })
  }

  render() {
    return (
      <>
        <ViroARScene onTrackingUpdated={this._onInitialized}>
          <ViroText
            text={this.state.text}
            extrusionDepth={2}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0.2, -0.8]}
            style={styles.Quizstyle}
          />

          <Viro3DObject
            name="dog"
            source={require('objects3D/Dog.obj')}
            position={[-0.4, -0.5, -1.5]}
            scale={[0.01, 0.01, 0.01]}
            type="OBJ"
            animation={{ name: 'bounceRev', run: true, loop: true }}
            // dragType="FixedToWorld"
            // onDrag={() => {}}
            onClick={() => {
              this.setState({
                object: (
                  <ViroImage
                    height={0.8}
                    width={0.8}
                    position={[0, -0.0, -1.0]}
                    rotation={[-6, 0, 0]}
                    source={require('images/correct.png')}
                  />
                ),
              })
              setTimeout(() => {
                this.setState({
                  object: <></>,
                })
              }, 5000)
            }}
          />
          <Viro3DObject
            name="wolf"
            source={require('objects3D/Wolves.obj')}
            materials={['wolf']}
            animation={{ name: 'bounceIt', run: true, loop: true }}
            position={[-0.0, -0.5, -1.5]}
            scale={[0.08, 0.08, 0.08]}
            type="OBJ"
            onClick={() => {
              this.setState({
                object: (
                  <ViroImage height={0.8} width={0.8} position={[0, -0.0, -1.0]} source={require('images/wrong.png')} />
                ),
              })
              setTimeout(() => {
                this.setState({
                  object: <></>,
                })
              }, 5000)
            }}
          />
          <Viro3DObject
            name="piano"
            source={require('objects3D/Piano.obj')}
            position={[0.6, -0.5, -1.5]}
            scale={[0.0004, 0.0004, 0.0004]}
            type="OBJ"
            animation={{ name: 'bounceRev', run: true, loop: true }}
            // dragType="FixedToWorld"
            // onDrag={() => {}}
            onClick={() => {
              this.setState({
                object: (
                  <ViroImage height={0.8} width={0.8} position={[0, -0.0, -1.0]} source={require('images/wrong.png')} />
                ),
              })
              setTimeout(() => {
                this.setState({
                  object: <></>,
                })
              }, 5000)
            }}
          />
          {this.state.object}
        </ViroARScene>
      </>
    )
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: '강아지',
      })
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  Quizstyle: {
    fontFamily: 'NotoSansCJK',
    fontSize: 20,
    color: '#000000',
    textAlignVertical: 'top',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

module.exports = QuizAR
