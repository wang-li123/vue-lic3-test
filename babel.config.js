module.exports = {
  presets: [
    '@vue/app', '@vue/babel-preset-jsx'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
