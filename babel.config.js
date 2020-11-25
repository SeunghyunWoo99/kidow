module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          icons: './assets/icons',
          logos: './assets/logos',
          images: './assets/images',
          objects: './assets/objects',
          objects3D: './assets/objects3D',
          fonts: './assets/fonts',
        },
      },
    ],
  ],
}
