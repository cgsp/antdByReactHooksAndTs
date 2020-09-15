import React, { useState } from 'react'
import getGspName from '@utils/getGspName.js'
import Button, { ButtonType, ButtonSize } from '@components/Button'
import Menu from '@components/Menu'
import MenuItem from '@components/Menu/MenuItem'
import SubMenu from '@components/Menu/SubMenu'
import DisplayName from '@components/Test/DisplayName'
import Icon from '@components/Icon'
import Transition from '@components/Transition'
import './App.scss'
// library.add(faCheckSquare, faCoffee)

console.log(getGspName())
console.log('BUILD_ENV', process.env.REACT_APP_BUILD_ENV)

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="app" data-testid="testAppId">
      <div className="box">
        <Button
          autoFocus
          className="customer"
          onClick={(e) => console.log('哈哈1', e)}
          btnType={ButtonType.Default}
          size={ButtonSize.Small}
        >
          Hello
        </Button>
        <Button disabled btnType={ButtonType.Default} size={ButtonSize.Small}>
          Disabled Button
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Small Danger
        </Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.Small}
          href="http://www.baidu.com"
          target="_blank"
        >
          Baidu Link
        </Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.Small}
          href="http://www.baidu.com"
          disabled
        >
          Disabled Link
        </Button>
      </div>
      <div className="box">
        <Menu
          defaultIndex={'0'}
          onSelected={(index) => console.log(index)}
          mode="horizontal"
          // mode="vertical"
          defaultOpenSubMenus={['3']}
        >
          <MenuItem>link1</MenuItem>
          <MenuItem disabled>link2</MenuItem>
          <MenuItem>link3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
          {/* <li>11</li> */}
        </Menu>
      </div>
      <div className="box">
        <DisplayName name="gsp" sex="man" />
      </div>
      <div className="box">
        {/* <FontAwesomeIcon icon={faCoffee} size={'10x'} pulse /> */}
        {/* <FontAwesomeIcon icon={'arrow-down'} size={'10x'} pulse /> */}
        <Icon icon="coffee" theme="danger" size="10x" />
        <Icon
          icon="arrow-down"
          theme="primary"
          size="10x"
          className="test-arrow"
        />
      </div>
      <div className="box">
        <Button size="lg" onClick={() => setShow(!show)}>
          动画切换
        </Button>
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <div>
            <p>我是文本1</p>
            <p>我是文本2</p>
            <p>我是文本1</p>
            <p>我是文本1</p>
            <p>我是文本1</p>
            <p>我是文本1</p>
            <p>我是文本1</p>
            <Button size="lg">哈哈哈哈</Button>
          </div>
        </Transition>
      </div>
      <div className="box">哈哈</div>
    </div>
  )
}

export default App
