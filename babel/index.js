module.exports = function (babel) {
  const { types } = babel;

  return {
    visitor: {
      JSXOpeningElement(path, state) {
        if (
          path.node &&
          path.node.name &&
          path.node.name.name === 'DevelopmentWrap'
        ) {
          path.node.attributes.push(
            types.jSXAttribute(
              types.jSXIdentifier('path'),
              types.stringLiteral(state.file.opts.sourceFileName),
            ),
          );
        }
      },
    },
  };
};
