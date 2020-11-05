module.exports = {
  stories: [
    // 默认打开的第一个地址
    '../src/stories/OfficialExample/Introduction.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        '<addon-key>': false,
      },
    },
    {
      name: '@storybook/addon-links',
    },
  ],
}
