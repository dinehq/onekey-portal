module.exports = {
  plugins: [
    // './babel/index.js',
  ],
  presets: [
    [
      'babel-preset-gatsby',
      {
        reactRuntime: 'automatic',
        reactImportSource: '@emotion/react',
      },
    ],
  ],
};
