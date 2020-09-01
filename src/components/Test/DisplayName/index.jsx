import React, { Component } from 'react'

function HOC(WComp) {
  class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WComp)})`
    render() {
      return <WComp {...this.props} />
    }
  }
  // HOC.displayName = `HOC(${getDisplayName(WComp)})`

  return HOC
}


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

Welcome.displayName = '欢迎组件'

function getDisplayName(WComp) {
  return WComp.displayName || WComp.name || '默认名称'
}

export default HOC(Welcome)
