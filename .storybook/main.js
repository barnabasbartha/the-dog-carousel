module.exports = {
    core: {builder: 'webpack5'},
    stories: ['../src/**/*.stories.@(tsx|jsx|mdx)'],
    addons: ['@storybook/addon-docs', '@storybook/addon-controls', '@storybook/preset-create-react-app'],
};
