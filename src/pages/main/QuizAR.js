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
  constructor(props) {
    super()

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
    })

    // Set initial state here
    this.state = {
      text: '불러오는 중입니다',
      object: <></>,
      object1: (
        <Viro3DObject
          name="zebra"
          source={require('objects3D/zebra.obj')}
          materials={['zebra']}
          position={[-0.6, -0.5, -1.5]}
          scale={[0.05, 0.05, 0.05]}
          type="OBJ"
          animation={{ name: 'bounceRev', run: true, loop: true }}
          // dragType="FixedToWorld"
          // onDrag={() => {}}
          onClick={() => {
            this._isCorrect('얼룩말', this.props.sceneNavigator.viroAppProps.text)
            setTimeout(() => {
              this.setState({
                object: <></>,
              })
            }, 5000)
          }}
        />
      ),
      object2: (
        <Viro3DObject
          name="fox"
          source={require('objects3D/fox.obj')}
          materials={['fox']}
          animation={{ name: 'bounceIt', run: true, loop: true }}
          position={[-0.0, -0.5, -1.5]}
          scale={[0.08, 0.08, 0.08]}
          type="OBJ"
          onClick={() => {
            this._isCorrect('여우', this.props.sceneNavigator.viroAppProps.text)
            setTimeout(() => {
              this.setState({
                object: <></>,
                object1: (
                  <Viro3DObject
                    name="car"
                    source={require('objects3D/car.obj')}
                    materials={['car']}
                    position={[-0.6, -0.5, -1.5]}
                    scale={[0.05, 0.05, 0.05]}
                    type="OBJ"
                    animation={{ name: 'bounceRev', run: true, loop: true }}
                    // dragType="FixedToWorld"
                    // onDrag={() => {}}
                    onClick={() => {
                      this._isCorrect('자동차', this.props.sceneNavigator.viroAppProps.text)
                      setTimeout(() => {
                        this.setState({
                          object: <></>,
                          object1: (
                            <Viro3DObject
                              name="Airplane"
                              source={require('objects3D/airplane.obj')}
                              materials={['airplane']}
                              position={[-0.6, -0.5, -1.5]}
                              scale={[0.0005, 0.0005, 0.0005]}
                              type="OBJ"
                              animation={{ name: 'bounceRev', run: true, loop: true }}
                              // dragType="FixedToWorld"
                              // onDrag={() => {}}
                              onClick={() => {
                                this._isCorrect('비행기', this.props.sceneNavigator.viroAppProps.text)
                                setTimeout(() => {
                                  this.setState({
                                    object: <></>,
                                  })
                                }, 5000)
                              }}
                            />
                          ),
                          object2: (
                            <Viro3DObject
                              name="zebra"
                              source={require('objects3D/zebra.obj')}
                              materials={['zebra']}
                              position={[0.0, -0.5, -1.5]}
                              scale={[0.05, 0.05, 0.05]}
                              type="OBJ"
                              animation={{ name: 'bounceRev', run: true, loop: true }}
                              // dragType="FixedToWorld"
                              // onDrag={() => {}}
                              onClick={() => {
                                this._isCorrect('자동차', this.props.sceneNavigator.viroAppProps.text)
                                setTimeout(() => {
                                  this.setState({
                                    object: <></>,
                                  })
                                }, 5000)
                              }}
                            />
                          ),
                          object3: (
                            <Viro3DObject
                              name="우주선"
                              source={require('objects3D/spaceShuttle.obj')}
                              materials={['spaceShuttle']}
                              position={[0.6, -0.5, -1.5]}
                              scale={[0.01, 0.01, 0.01]}
                              type="OBJ"
                              animation={{ name: 'bounceRev', run: true, loop: true }}
                              // dragType="FixedToWorld"
                              // onDrag={() => {}}
                              onClick={() => {
                                this._isCorrect('우주선', this.props.sceneNavigator.viroAppProps.text)
                                setTimeout(() => {
                                  this.setState({
                                    object: <></>,
                                  })
                                }, 5000)
                              }}
                            />
                          ),
                        })
                        if (this.state.isCorrect) {
                          this.props.sceneNavigator.viroAppProps.func('비행기')
                        }
                      }, 5000)
                    }}
                  />
                ),
                object2: (
                  <Viro3DObject
                    name="bird"
                    source={require('objects3D/bird.obj')}
                    materials={['bird']}
                    position={[0, -0.5, -1.5]}
                    scale={[0.1, 0.1, 0.1]}
                    type="OBJ"
                    animation={{ name: 'bounceRev', run: true, loop: true }}
                    // dragType="FixedToWorld"
                    // onDrag={() => {}}
                    onClick={() => {
                      this._isCorrect('새', this.props.sceneNavigator.viroAppProps.text)
                      setTimeout(() => {
                        this.setState({
                          object: <></>,
                        })
                      }, 5000)
                    }}
                  />
                ),
                object3: (
                  <Viro3DObject
                    name="fox"
                    source={require('objects3D/fox.obj')}
                    materials={['fox']}
                    position={[0.6, -0.5, -1.5]}
                    scale={[0.08, 0.08, 0.08]}
                    type="OBJ"
                    animation={{ name: 'bounceRev', run: true, loop: true }}
                    // dragType="FixedToWorld"
                    // onDrag={() => {}}
                    onClick={() => {
                      this._isCorrect('여우', this.props.sceneNavigator.viroAppProps.text)
                      setTimeout(() => {
                        this.setState({
                          object: <></>,
                        })
                      }, 5000)
                    }}
                  />
                ),
              })
              if (this.state.isCorrect) {
                this.props.sceneNavigator.viroAppProps.func('자동차')
              }
            }, 5000)
          }}
        />
      ),
      object3: (
        <Viro3DObject
          name="Airplane"
          source={require('objects3D/airplane.obj')}
          materials={['airplane']}
          position={[0.6, -0.5, -1.5]}
          scale={[0.0005, 0.0005, 0.0005]}
          type="OBJ"
          animation={{ name: 'bounceRev', run: true, loop: true }}
          // dragType="FixedToWorld"
          // onDrag={() => {}}
          onClick={() => {
            this._isCorrect('비행기', this.props.sceneNavigator.viroAppProps.text)
            setTimeout(() => {
              this.setState({
                object: <></>,
              })
            }, 5000)
          }}
        />
      ),
      isCorrect: false,
    }

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
          {this.state.object1}
          {this.state.object2}
          {this.state.object3}
          {this.state.object}
        </ViroARScene>
      </>
    )
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  _isCorrect(word, text) {
    if (word === text) {
      this.setState({
        object: (
          <ViroImage height={0.8} width={0.8} position={[0, -0.0, -1.0]} source={require('images/correct.png')} />
        ),
        isCorrect: true,
      })
    } else {
      this.setState({
        object: <ViroImage height={0.8} width={0.8} position={[0, -0.0, -1.0]} source={require('images/wrong.png')} />,
        isCorrect: false,
      })
    }
  }

  _setObject(word, index) {}
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
