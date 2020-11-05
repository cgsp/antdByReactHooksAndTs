// Button.stories.tsx

import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

// import {
//   Title,
//   Subtitle,
//   Description,
//   Primary,
//   ArgsTable,
//   Stories,
//   PRIMARY_STORY,
// } from '@storybook/addon-docs/blocks'

import { Button, ButtonProps } from './Button'

export default {
  title: '官方示例/Button',
  component: Button,
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Subtitle />
    //       <Description />
    //       <Primary />
    //       <ArgsTable story={PRIMARY_STORY} />
    //       <Stories />
    //     </>
    //   ),
    // },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

// 也可以这么写=======================不用Template=====================================
// export const PrimaryTest: React.FC<{}> = () => (
//   <Button primary={true} label="PrimaryTest" />
// )

export const Primary1 = Template.bind({})

Primary1.storyName = '默认组件Primary📚📕📈🤓'
Primary1.args = {
  primary: true,
  label: 'Button',
}
