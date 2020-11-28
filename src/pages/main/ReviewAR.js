'use strict'

import React, { Component } from 'react'

import { StyleSheet } from 'react-native'

import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroMaterials,
  ViroAnimations,
  ViroConstants,
  ViroBox,
  ViroARObjectMarker,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroNode,
  ViroText,
} from '@akadrimer/react-viro'

export default class ReviewAR extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    }

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this)

    ViroMaterials.createMaterials({
      fox: {
        diffuseTexture: require('objects3D/fox.png'),
      },
      airplane: {
        diffuseTexture: require('objects3D/airplane.png'),
      },
      bird: {
        diffuseTexture: require('objects3D/bird.png'),
      },
      zebra: {
        diffuseTexture: require('objects3D/zebra.png'),
      },
      elephant: {
        diffuseTexture: require('objects3D/elephant.png'),
      },
      car: {
        diffuseTexture: require('objects3D/car.png'),
      },
      spaceShuttle: {
        diffuseTexture: require('objects3D/spaceShuttle.png'),
      },
      bike: {
        diffuseTexture: require('objects3D/bike.png'),
      },
      monkey: {
        diffuseTexture: require('objects3D/monkey.png'),
      },
      motorcycle: {
        diffuseTexture: require('objects3D/motorcycle.png'),
      },
    })

    ViroAnimations.registerAnimations({
      rotate: {
        properties: {
          rotateY: '+=90',
        },
        duration: 1000, //.25 seconds..
      },
    })
  }

  render() {
    return (
      <>
        <ViroARScene onTrackingUpdated={this._onInitialized}>
          <Viro3DObject
            source={require('objects3D/fox.obj')}
            materials={['fox']}
            position={[-0.0, -1.5, -1.5]}
            animation={{ name: 'rotate', run: true, loop: true }}
            scale={[0.1, 0.1, 0.1]}
            type="OBJ"
            dragType="FixedToWorld"
            onDrag={() => {}}
          />
        </ViroARScene>
      </>
    )
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Hello World!',
      })
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
})

module.exports = ReviewAR
