module.exports = {
  stories: [
    './stories/**/*.stories.mdx',
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  typescript: {
    reactDocgenTypescriptOptions: {
      shouldExtractValuesFromUnion: false,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
      savePropValueAsString: true,
      propFilter: function (prop) {
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
      },
    },
  },
};
