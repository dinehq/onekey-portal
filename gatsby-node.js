exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    module: {
      rules: [],
    },
    plugins: [
      plugins.define({
        PWD: process.env.PWD,
      }),
    ],
    node: {
      global: true,
      __filename: true,
      __dirname: true,
    },
  });
};
