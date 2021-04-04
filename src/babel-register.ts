require('@babel/register')({
  babelrc: false,
  presets: [
    [
      require.resolve('@walrus/babel-preset-walrus'),
      {
        typescript: true,
        react: true,
        env: {
          targets: {
            node: 'current',
          },
          modules: 'commonjs',
        }
      }
    ],
  ],
  extensions: ['.js', '.ts'],
});
