import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from './Button'

export default {
  title: '官方示例/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // 增加参数，来控制顶部的工具栏，选择颜色
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
        { name: '#f40', value: '#f40' },
      ],
    },
  },
  // 装饰器
  decorators: [
    (Story) => (
      <div className="gsp" style={{ padding: '30px', background: 'red' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

// 也可以这么写=======================不用Template=====================================
// export const PrimaryTest: React.FC<{}> = () => (
//   <Button primary={true} label="PrimaryTest" />
// )

export const Primary = Template.bind({})

Primary.storyName = '默认组件Primary📚📕📈🤓'
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}

export const Gsp = Template.bind({})
Gsp.args = {
  size: 'medium',
  label: 'Button',
  onClick: () => {
    console.log('gsp')
  },
}
