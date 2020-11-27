'use strict'

import React, { Component, useState } from 'react'

import {
  ViroARScene,
  ViroConstants,
  ViroMaterials,
  Viro3DObject,
  ViroAnimations,
  ViroImage,
} from '@akadrimer/react-viro'

const HelloWorldSceneAR = (props) => {
  // Set initial state here
  const [text, setText] = useState('Initializing AR...')
  const [object, setObject] = useState(<></>)
  const [stage, setStage] = useState('Learning')
  const [learningObject, setLearningObject] = useState(1)

  // bind 'this' to functions

  // ViroMaterials.createMaterials({
  //   fox: {
  //     diffuseTexture: require('./res/wolves/Wolves_BaseColor.png'),
  //   },
  // });

  const _onInitialized = (state) => {
    // console.log(ViroConstants.TRACKING_NORMAL)

    if (state == ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!')
    } else if (state == ViroConstants.TRACKING_NONE) {
      //    Handle loss of tracking
    }
  }

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

  // ViroAnimations.registerAnimations({
  //   bounceUp: {
  //     properties: {
  //       positionY: '+=0.02',
  //     },
  //     duration: 500, //.25 seconds..
  //   },

  //   bounceDown: {
  //     properties: {
  //       positionY: '-=0.02',
  //     },
  //     duration: 500, //.25 seconds..
  //   },

  //   bounceIt: [['bounceUp', 'bounceDown']],
  //   bounceRev: [['bounceDown', 'bounceUp']],
  // })

  ViroAnimations.registerAnimations({
    rotate: {
      properties: {
        rotateY: '+=30',
      },
      duration: 450, //.25 seconds
    },
  })

  //stage 1 -> 학습하기
  // Text로 보여주고 싶은데 소통 어케하지,
  if (stage == 'Learning') {
    if (learningObject == 1) {
      return (
        <>
          <ViroARScene onTrackingUpdated={_onInitialized}>
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
                  setLearningObject(2)
                  {
                    props.sceneNavigator.viroAppProps.func('새')
                  }
                }, 5000)
              }}
            />
            {/* {object} */}
          </ViroARScene>
        </>
      )
    } else if (learningObject == 2) {
      return (
        <>
          <ViroARScene onTrackingUpdated={_onInitialized}>
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
                  setLearningObject(3)
                  {
                    props.sceneNavigator.viroAppProps.func('자동차')
                  }
                }, 10000)
              }}
            />
            {/* {object} */}
          </ViroARScene>
        </>
      )
    } else {
      return (
        <>
          <ViroARScene onTrackingUpdated={_onInitialized}>
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
                  setStage('Quiz')
                  {
                    props.sceneNavigator.viroAppProps.func('여우')
                  }
                }, 10000)
              }}
            />
            {/* {object} */}
          </ViroARScene>
        </>
      )
    }
  }
  //stage 2 -> 퀴즈풀기
  else if (stage == 'Quiz') {
    return (
      <>
        <ViroARScene onTrackingUpdated={_onInitialized}>
          <Viro3DObject
            name="airplane"
            source={require('objects3D/airplane.obj')}
            materials={['airplane']}
            position={[-0.4, -0.5, -1.5]}
            scale={[0.0005, 0.0005, 0.0005]}
            type="OBJ"
            animation={{ name: 'bounceRev', run: true, loop: true }}
            // dragType="FixedToWorld"
            // onDrag={() => {}}
            onClick={() => {
              setObject(
                <ViroImage
                  height={0.8}
                  width={0.8}
                  position={[0, -0.0, -1.0]}
                  rotation={[-6, 0, 0]}
                  source={require('images/correct.png')}
                />,
              )
              setTimeout(() => {
                setObject(<></>)
                setStage('Review')
                {
                  props.sceneNavigator.viroAppProps.func('여우')
                }
              }, 5000)
            }}
          />
          <Viro3DObject
            name="fox"
            source={require('objects3D/fox.obj')}
            materials={['fox']}
            animation={{ name: 'bounceIt', run: true, loop: true }}
            position={[-0.0, -0.5, -1.5]}
            scale={[0.08, 0.08, 0.08]}
            type="OBJ"
            onClick={() => {
              setObject(
                <ViroImage
                  height={0.8}
                  width={0.8}
                  position={[0, -0.0, -1.0]}
                  rotation={[-6, 0, 0]}
                  source={require('images/wrong.png')}
                />,
              )
              setTimeout(() => {
                setObject(<></>)
              }, 5000)
            }}
          />
          <Viro3DObject
            name="bird"
            source={require('objects3D/bird.obj')}
            position={[0.6, -0.5, -1.5]}
            materials={['bird']}
            scale={[0.01, 0.01, 0.01]}
            type="OBJ"
            animation={{ name: 'bounceRev', run: true, loop: true }}
            // dragType="FixedToWorld"
            // onDrag={() => {}}
            onClick={() => {
              setObject(
                <ViroImage
                  height={0.8}
                  width={0.8}
                  position={[0, -0.0, -1.0]}
                  rotation={[-6, 0, 0]}
                  source={require('images/wrong.png')}
                />,
              )
              setTimeout(() => {
                setObject(<></>)
              }, 5000)
            }}
          />
          {object}
        </ViroARScene>
      </>
    )
  }
  //stage 3 -> 복습하기 (여우 틀림)
  else {
    return (
      <>
        <ViroARScene onTrackingUpdated={_onInitialized}>
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
                {
                  props.sceneNavigator.viroAppProps.func('끝')
                }
              }, 5000)
            }}
          />
        </ViroARScene>
      </>
    )
  }
}

module.exports = HelloWorldSceneAR
