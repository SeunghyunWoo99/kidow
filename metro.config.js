/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

'use strict'

const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: [
        assetExts.filter((ext) => ext !== 'svg'),
        'obj',
        'mtl',
        'JPG',
        'vrx',
        'hdr',
        'gltf',
        'glb',
        'bin',
        'arobject',
        'gif',
        'png',
      ],
      sourceExts: [...sourceExts, 'svg'],
    },
  }
})()
