module.exports = {
  stories: [
    // 默认打开的第一个地址
    '../src/stories/OfficialExample/Introduction.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '../src/styles/index.scss',
  ],
}
