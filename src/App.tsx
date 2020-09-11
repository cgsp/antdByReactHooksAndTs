import React from 'react'
import getGspName from '@utils/getGspName.js'
import Button, { ButtonType, ButtonSize } from '@components/Button'
import Menu from '@components/Menu'
import MenuItem from '@components/Menu/MenuItem'
import SubMenu from '@components/Menu/SubMenu'
import DisplayName from '@components/Test/DisplayName'
import Icon from '@components/Icon'
import './App.scss'
// library.add(faCheckSquare, faCoffee)

console.log(getGspName())
console.log('BUILD_ENV', process.env.REACT_APP_BUILD_ENV)

function App() {
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
    </div>
  )
}

export default App
