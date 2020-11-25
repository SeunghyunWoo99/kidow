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
  const [stage, setStage] = useState(1)

  // bind 'this' to functions

  // ViroMaterials.createMaterials({
  //   wolf: {
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

  if (stage === 1) {
    return (
      <>
        <ViroARScene onTrackingUpdated={_onInitialized}>
          <Viro3DObject
            source={require('objects3D/Wolves.obj')}
            materials={['wolf']}
            position={[-0.5, -0.5, -1.5]}
            scale={[0.08, 0.08, 0.08]}
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
                setStage(2)
              }, 5000)
            }}
          />
          <Viro3DObject
            name="piano"
            source={require('objects3D/Wolves.obj')}
            materials={['wolf']}
            position={[0.5, -0.5, -1.5]}
            scale={[0.08, 0.08, 0.08]}
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
              }, 5000)
            }}
          />
          {object}
        </ViroARScene>
      </>
    )
  } else if (stage === 2) {
    return (
      <>
        <ViroARScene onTrackingUpdated={_onInitialized}>
          <Viro3DObject
            source={require('objects3D/Wolves.obj')}
            materials={['wolf']}
            position={[-0.4, -0.5, -1.5]}
            scale={[0.08, 0.08, 0.08]}
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
              }, 5000)
            }}
          />
          <Viro3DObject
            name="piano"
            source={require('objects3D/Wolves.obj')}
            materials={['wolf']}
            position={[0.6, -0.5, -1.5]}
            scale={[0.08, 0.08, 0.08]}
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
                setStage(3)
              }, 5000)
            }}
          />
          {object}
        </ViroARScene>
      </>
    )
  } else {
    return (
      <>
        <ViroARScene onTrackingUpdated={_onInitialized}>
          <Viro3DObject
            source={require('objects3D/Wolves.obj')}
            materials={['wolf']}
            position={[-0.0, -0.5, -1.5]}
            scale={[0.08, 0.08, 0.08]}
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
                setStage(1)
              }, 5000)
            }}
          />
          {object}
        </ViroARScene>
      </>
    )
  }
}

module.exports = HelloWorldSceneAR
