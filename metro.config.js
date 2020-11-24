/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// module.exports = {
//   // resolver: {
//   //   assetExts: ['obj', 'mtl', 'jpg', 'vrx', 'hdr', 'gltf', 'glb', 'bin', 'arobject', 'png'],
//   // },
//   transformer: {
//     getAssetExts() {
//       return ['obj', 'mtl', 'JPG', 'vrx', 'hdr', 'gltf', 'glb', 'bin', 'arobject', 'gif']
//     },

//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// }

'use strict'

const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
  const {
    resolver: { assetExts },
  } = await getDefaultConfig()

  return {
    resolver: {
      assetExts: [...assetExts, 'obj', 'mtl', 'JPG', 'vrx', 'hdr', 'gltf', 'glb', 'bin', 'arobject', 'gif'],
    },
  }
})()
