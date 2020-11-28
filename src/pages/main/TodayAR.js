'use strict'

import React, { Component } from 'react'

import {
  ViroARScene,
  ViroConstants,
  ViroMaterials,
  Viro3DObject,
  ViroAnimations,
  ViroImage,
} from '@akadrimer/react-viro'

export default class TodayAR extends Component {
  // Set initial state here
  constructor(props) {
    super()

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
      giraffe: {
        diffuseTexture: require('objects3D/giraffe.png'),
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

    this.state = {
      text: '불러오는 중입니다',
      object: <></>,
      object1: (
        <Viro3DObject
          name="zebra"
          source={require('objects3D/zebra.obj')}
          materials={['zebra']}
          position={[-0.35, -0.5, -1.5]}
          scale={[0.05, 0.05, 0.05]}
          type="OBJ"
          animation={{ name: 'bounceRev', run: true, loop: true }}
          // dragType="FixedToWorld"
          // onDrag={() => {}}
          onClick={() => {
            this._isCorrect('얼룩말', this.props.sceneNavigator.viroAppProps.text)
            setTimeout(() => {
              if (this.state.count === 1) {
                this.setState({
                  object: <></>,
                  object1: (
                    <Viro3DObject
                      name="car"
                      source={require('objects3D/car.obj')}
                      materials={['car']}
                      position={[-0.4, -0.31, -1.5]}
                      scale={[0.07, 0.07, 0.07]}
                      type="OBJ"
                      rotation={[0, 15, 0]}
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
                                name="Elephant"
                                source={require('objects3D/elephant.obj')}
                                materials={['elephant']}
                                position={[-0.4, -0.5, -1.5]}
                                scale={[0.06, 0.06, 0.06]}
                                rotation={[0, 13, 0]}
                                type="OBJ"
                                animation={{ name: 'bounceRev', run: true, loop: true }}
                                // dragType="FixedToWorld"
                                // onDrag={() => {}}
                                onClick={() => {
                                  this._isCorrect('코끼리', this.props.sceneNavigator.viroAppProps.text)
                                  setTimeout(() => {
                                    this.setState({
                                      object: <></>,
                                    })
                                  }, 3000)
                                }}
                              />
                            ),
                            object2: (
                              <Viro3DObject
                                name="bird"
                                source={require('objects3D/bird.obj')}
                                materials={['bird']}
                                position={[0.0, -0.5, -1.5]}
                                scale={[0.11, 0.11, 0.11]}
                                type="OBJ"
                                animation={{ name: 'bounceRev', run: true, loop: true }}
                                // dragType="FixedToWorld"
                                // onDrag={() => {}}
                                onClick={() => {
                                  this._isCorrect('새', this.props.sceneNavigator.viroAppProps.text)
                                  setTimeout(() => {
                                    this.setState({
                                      object: <></>,
                                      object1: (
                                        <Viro3DObject
                                          name="motorcycle"
                                          source={require('objects3D/motorcycle.obj')}
                                          materials={['motorcycle']}
                                          position={[-0.4, -0.5, -1.5]}
                                          scale={[0.06, 0.06, 0.06]}
                                          rotation={[0, -90, 0]}
                                          type="OBJ"
                                          animation={{ name: 'bounceRev', run: true, loop: true }}
                                          // dragType="FixedToWorld"
                                          // onDrag={() => {}}
                                          onClick={() => {
                                            this._isCorrect('오토바이', this.props.sceneNavigator.viroAppProps.text)
                                            setTimeout(() => {
                                              if (this.state.count == 1) {
                                                this.setState({
                                                  object: <></>,
                                                  //여기에 추가
                                                  object1: (
                                                    <Viro3DObject
                                                      name="giraffe"
                                                      source={require('objects3D/giraffe.obj')}
                                                      materials={['giraffe']}
                                                      position={[-0.4, -0.5, -1.5]}
                                                      scale={[0.003, 0.003, 0.003]}
                                                      rotation={[0, 13, 0]}
                                                      type="OBJ"
                                                      animation={{ name: 'bounceRev', run: true, loop: true }}
                                                      // dragType="FixedToWorld"
                                                      // onDrag={() => {}}
                                                      onClick={() => {
                                                        this._isCorrect(
                                                          '기린',
                                                          this.props.sceneNavigator.viroAppProps.text,
                                                        )
                                                        setTimeout(() => {
                                                          this.setState({
                                                            object: <></>,
                                                            stage: 'Review',
                                                            //여기에 추가
                                                          })
                                                          this.props.sceneNavigator.viroAppProps.func('여우')
                                                        }, 3000)
                                                      }}
                                                    />
                                                  ),
                                                  object2: (
                                                    <Viro3DObject
                                                      name="monkey"
                                                      source={require('objects3D/monkey.obj')}
                                                      materials={['monkey']}
                                                      position={[0.0, -0.5, -1.5]}
                                                      scale={[0.1, 0.1, 0.1]}
                                                      type="OBJ"
                                                      animation={{ name: 'bounceRev', run: true, loop: true }}
                                                      // dragType="FixedToWorld"
                                                      // onDrag={() => {}}
                                                      onClick={() => {
                                                        this._isCorrect(
                                                          '원숭이',
                                                          this.props.sceneNavigator.viroAppProps.text,
                                                        )
                                                        setTimeout(() => {
                                                          this.setState({
                                                            object: <></>,
                                                          })
                                                        }, 3000)
                                                      }}
                                                    />
                                                  ),
                                                  object3: (
                                                    <Viro3DObject
                                                      name="zebra"
                                                      source={require('objects3D/zebra.obj')}
                                                      materials={['zebra']}
                                                      position={[0.35, -0.5, -1.5]}
                                                      scale={[0.05, 0.05, 0.05]}
                                                      type="OBJ"
                                                      rotation={[0, -15, 0]}
                                                      animation={{ name: 'bounceRev', run: true, loop: true }}
                                                      // dragType="FixedToWorld"
                                                      // onDrag={() => {}}
                                                      onClick={() => {
                                                        this._isCorrect(
                                                          '얼룩말',
                                                          this.props.sceneNavigator.viroAppProps.text,
                                                        )
                                                        setTimeout(() => {
                                                          this.setState({
                                                            object: <></>,
                                                          })
                                                        }, 3000)
                                                      }}
                                                    />
                                                  ),
                                                  count: 0,
                                                })
                                                this.props.sceneNavigator.viroAppProps.func('기린')
                                              } else {
                                                this.setState({
                                                  object: <></>,
                                                  count: this.state.count + 1,
                                                })
                                              }
                                            }, 3000)
                                          }}
                                        />
                                      ),
                                      object2: (
                                        <Viro3DObject
                                          name="bike"
                                          source={require('objects3D/bike.obj')}
                                          materials={['bike']}
                                          position={[0.0, -0.5, -1.5]}
                                          scale={[0.25, 0.25, 0.25]}
                                          rotation={[0, -90, 0]}
                                          type="OBJ"
                                          animation={{ name: 'bounceRev', run: true, loop: true }}
                                          // dragType="FixedToWorld"
                                          // onDrag={() => {}}
                                          onClick={() => {
                                            this._isCorrect('자전거', this.props.sceneNavigator.viroAppProps.text)
                                            setTimeout(() => {
                                              this.setState({
                                                object: <></>,
                                              })
                                            }, 3000)
                                          }}
                                        />
                                      ),
                                      object3: (
                                        <Viro3DObject
                                          name="car"
                                          source={require('objects3D/car.obj')}
                                          materials={['car']}
                                          position={[0.35, -0.5, -1.5]}
                                          scale={[0.07, 0.07, 0.07]}
                                          type="OBJ"
                                          rotation={[0, -15, 0]}
                                          animation={{ name: 'bounceRev', run: true, loop: true }}
                                          // dragType="FixedToWorld"
                                          // onDrag={() => {}}
                                          onClick={() => {
                                            this._isCorrect('자동차', this.props.sceneNavigator.viroAppProps.text)
                                            setTimeout(() => {
                                              this.setState({
                                                object: <></>,
                                                count: this.state.count + 1,
                                              })
                                            }, 3000)
                                          }}
                                        />
                                      ),
                                    })
                                    if (this.state.isCorrect) {
                                      this.props.sceneNavigator.viroAppProps.func('자전거')
                                    }
                                  }, 3000)
                                }}
                              />
                            ),
                            object3: (
                              <Viro3DObject
                                name="giraffe"
                                source={require('objects3D/giraffe.obj')}
                                materials={['giraffe']}
                                position={[0.35, -0.3, -1.5]}
                                scale={[0.003, 0.003, 0.003]}
                                type="OBJ"
                                rotation={[0, -12, 0]}
                                animation={{ name: 'bounceRev', run: true, loop: true }}
                                // dragType="FixedToWorld"
                                // onDrag={() => {}}
                                onClick={() => {
                                  this._isCorrect('기린', this.props.sceneNavigator.viroAppProps.text)
                                  setTimeout(() => {
                                    this.setState({
                                      object: <></>,
                                    })
                                  }, 3000)
                                }}
                              />
                            ),
                          })
                          if (this.state.isCorrect) {
                            this.props.sceneNavigator.viroAppProps.func('새')
                          }
                        }, 3000)
                      }}
                    />
                  ),
                  object2: (
                    <Viro3DObject
                      name="Airplane"
                      source={require('objects3D/airplane.obj')}
                      materials={['airplane']}
                      position={[0, -0.22, -1.5]}
                      scale={[0.00035, 0.00035, 0.00035]}
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
                        }, 3000)
                      }}
                    />
                  ),
                  object3: (
                    <Viro3DObject
                      name="우주선"
                      source={require('objects3D/spaceShuttle.obj')}
                      materials={['spaceShuttle']}
                      position={[0.35, -0.2, -1.5]}
                      scale={[0.013, 0.013, 0.013]}
                      type="OBJ"
                      rotation={[0, -10, 0]}
                      animation={{ name: 'bounceRev', run: true, loop: true }}
                      // dragType="FixedToWorld"
                      // onDrag={() => {}}
                      onClick={() => {
                        this._isCorrect('우주선', this.props.sceneNavigator.viroAppProps.text)
                        setTimeout(() => {
                          this.setState({
                            object: <></>,
                          })
                        }, 3000)
                      }}
                    />
                  ),
                  count: 0,
                })
                this.props.sceneNavigator.viroAppProps.func('자동차')
              } else {
                this.setState({
                  object: <></>,
                  count: this.state.count + 1,
                })
              }
            }, 3000)
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
          scale={[0.12, 0.12, 0.12]}
          type="OBJ"
          onClick={() => {
            this._isCorrect('여우', this.props.sceneNavigator.viroAppProps.text)
            setTimeout(() => {
              this.setState({
                object: <></>,
              })
            }, 3000)
          }}
        />
      ),
      object3: (
        <Viro3DObject
          name="bird"
          source={require('objects3D/bird.obj')}
          materials={['bird']}
          position={[0.4, -0.5, -1.5]}
          scale={[0.11, 0.11, 0.11]}
          rotation={[0, -12, 0]}
          type="OBJ"
          animation={{ name: 'bounceRev', run: true, loop: true }}
          // dragType="FixedToWorld"
          // onDrag={() => {}}
          onClick={() => {
            this._isCorrect('비행기', this.props.sceneNavigator.viroAppProps.text)
            setTimeout(() => {
              this.setState({
                object: <></>,
                count: this.state.count + 1,
              })
            }, 3000)
          }}
        />
      ),
      isCorrect: false,
      stage: 'Learning',
      learningObject: 1,
      reviewObject: 1,
      count: 0,
    }

    ViroAnimations.registerAnimations({
      rotate: {
        properties: {
          rotateY: '+=30',
        },
        duration: 450, //.25 seconds
      },
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

  //stage 1 -> 학습하기
  // Text로 보여주고 싶은데 소통 어케하지,
  render() {
    if (this.state.stage === 'Learning') {
      if (this.state.learningObject === 1) {
        return (
          <>
            <ViroARScene onTrackingUpdated={this._onInitialized}>
              <Viro3DObject
                name="fox"
                source={require('objects3D/fox.obj')}
                materials={['fox']}
                animation={{ name: 'bounceIt', run: true, loop: true }}
                position={[-0.0, -0.5, -1.5]}
                scale={[0.16, 0.16, 0.16]}
                type="OBJ"
                animation={{ name: 'rotate', run: true, loop: true }}
                // dragType="FixedToWorld"
                onDrag={() => {}}
                onLoadEnd={() => {
                  setTimeout(() => {
                    this.setState({
                      learningObject: 2,
                    })
                    this.props.sceneNavigator.viroAppProps.func('새')
                  }, 5000)
                }}
              />
              {/* {object} */}
            </ViroARScene>
          </>
        )
      } else if (this.state.learningObject == 2) {
        return (
          <>
            <ViroARScene onTrackingUpdated={this._onInitialized}>
              <Viro3DObject
                name="bird"
                source={require('objects3D/bird.obj')}
                materials={['bird']}
                position={[0, -0.5, -1.5]}
                scale={[0.21, 0.21, 0.21]}
                type="OBJ"
                animation={{ name: 'rotate', run: true, loop: true }}
                // dragType="FixedToWorld"
                onDrag={() => {}}
                onLoadEnd={() => {
                  setTimeout(() => {
                    this.setState({
                      learningObject: 3,
                    })
                    this.props.sceneNavigator.viroAppProps.func('자동차')
                  }, 5000)
                }}
              />
              {/* {object} */}
            </ViroARScene>
          </>
        )
      } else if (this.state.learningObject == 3) {
        return (
          <>
            <ViroARScene onTrackingUpdated={this._onInitialized}>
              <Viro3DObject
                name="car"
                source={require('objects3D/car.obj')}
                materials={['car']}
                position={[-0.0, -0.5, -1.5]}
                scale={[0.11, 0.11, 0.11]}
                type="OBJ"
                // rotation={[-20, 0, 0]}
                animation={{ name: 'rotate', run: true, loop: true }}
                // dragType="FixedToWorld"
                onDrag={() => {}}
                onLoadEnd={() => {
                  setTimeout(() => {
                    this.setState({
                      learningObject: 4,
                    })
                    this.props.sceneNavigator.viroAppProps.func('기린')
                  }, 5000)
                }}
              />
            </ViroARScene>
          </>
        )
      } else if (this.state.learningObject == 4) {
        return (
          <>
            <ViroARScene onTrackingUpdated={this._onInitialized}>
              <Viro3DObject
                name="giraffe"
                source={require('objects3D/giraffe.obj')}
                materials={['giraffe']}
                position={[-0.0, -0.3, -1.5]}
                scale={[0.003, 0.003, 0.003]}
                type="OBJ"
                // rotation={[-20, 0, 0]}
                animation={{ name: 'rotate', run: true, loop: true }}
                // dragType="FixedToWorld"
                onDrag={() => {}}
                onLoadEnd={() => {
                  setTimeout(() => {
                    this.setState({
                      learningObject: 5,
                    })
                    this.props.sceneNavigator.viroAppProps.func('자전거')
                  }, 5000)
                }}
              />
            </ViroARScene>
          </>
        )
      } else {
        return (
          <>
            <ViroARScene onTrackingUpdated={this._onInitialized}>
              <Viro3DObject
                name="bike"
                source={require('objects3D/bike.obj')}
                materials={['bike']}
                position={[-0.0, -0.5, -1.5]}
                scale={[0.25, 0.25, 0.25]}
                type="OBJ"
                // rotation={[-20, 0, 0]}
                animation={{ name: 'rotate', run: true, loop: true }}
                // dragType="FixedToWorld"
                onDrag={() => {}}
                onLoadEnd={() => {
                  setTimeout(() => {
                    this.setState({
                      stage: 'Quiz',
                    })
                    this.props.sceneNavigator.viroAppProps.func('여우')
                  }, 5000)
                }}
              />
            </ViroARScene>
          </>
        )
      }
    }
    //stage 2 -> 퀴즈풀기
    else if (this.state.stage == 'Quiz') {
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
    //stage 3 -> 복습하기 (여우 틀림)
    else {
      if (this.state.reviewObject == 1) {
        return (
          <>
            <ViroARScene onTrackingUpdated={this._onInitialized}>
              <Viro3DObject
                name="fox"
                source={require('objects3D/fox.obj')}
                materials={['fox']}
                animation={{ name: 'bounceIt', run: true, loop: true }}
                position={[-0.0, -0.5, -1.5]}
                scale={[0.16, 0.16, 0.16]}
                type="OBJ"
                animation={{ name: 'rotate', run: true, loop: true }}
                onDrag={() => {}}
                onLoadEnd={() => {
                  setTimeout(() => {
                    this.setState({
                      reviewObject: 2,
                    })
                    this.props.sceneNavigator.viroAppProps.func('자전거')
                  }, 5000)
                }}
              />
            </ViroARScene>
          </>
        )
      } else {
        return (
          <>
            <ViroARScene onTrackingUpdated={this._onInitialized}>
              <Viro3DObject
                name="bike"
                source={require('objects3D/bike.obj')}
                materials={['bike']}
                position={[0.0, -0.5, -1.5]}
                scale={[0.2, 0.2, 0.2]}
                type="OBJ"
                animation={{ name: 'bounceRev', run: true, loop: true }}
                animation={{ name: 'rotate', run: true, loop: true }}
                // dragType="FixedToWorld"
                // onDrag={() => {}}
                onClick={() => {
                  setTimeout(() => {
                    this.props.sceneNavigator.viroAppProps.func('끝')
                  }, 3000)
                }}
              />
            </ViroARScene>
          </>
        )
      }
    }
  }

  _isCorrect(word, text) {
    if (word === text) {
      this.setState({
        object: (
          <ViroImage height={0.7} width={0.7} position={[0, -0.2, -1.0]} source={require('images/correct.png')} />
        ),
        isCorrect: true,
      })
    } else {
      this.setState({
        object: <ViroImage height={0.7} width={0.7} position={[0, -0.2, -1.0]} source={require('images/wrong.png')} />,
        isCorrect: false,
      })
    }
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

module.exports = TodayAR
