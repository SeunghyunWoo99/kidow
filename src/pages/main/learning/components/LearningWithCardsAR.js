'use strict'

import React, { Component } from 'react'

import { StyleSheet } from 'react-native'

import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroMaterials,
  ViroAnimations,
  ViroCamera,
  ViroConstants,
  ViroBox,
  ViroARObjectMarker,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroNode,
  ViroText,
} from '@akadrimer/react-viro'

export default class LearningWithCardsAR extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    }

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this)
  }

  render() {
    return (
      <>
        <ViroARScene onTrackingUpdated={this._onInitialized}></ViroARScene>
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

module.exports = LearningWithCardsAR
