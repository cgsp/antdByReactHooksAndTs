/*
 * @Desc 体验demo的开关
 * 查看demo的操作,存在1个或多个模块没有任何数据显示
 * 如果每个模块都有至少1个维度是有数据的，那么该操作不再展示（以应用为维度）
 * @Author: tb.liu
 * @Date: 2019-09-30 11:47:00
 * @Last Modified by: tb.liu
 * @Last Modified time: 2020-03-31 18:16:53
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'

import { http } from 'service'
import { SUCCESS_OK } from 'constants'
import { APP_ENTER } from 'service/dataOperations'
import { DEMO_APP_KEY, BASE_PATH } from 'constants/dataOperations'
import store from 'store/dataOperation'
import Logger from 'xmReps/dataOperations'
import route from '../../route'
import { isXiaoYa } from 'utils/global/isXiaoYa'

import './style.scss'

@withRouter
@inject('dataOperation')
@observer
export default class DemoSwitch extends Component {
  static propTypes = {
    className: PropTypes.string,
    mode: PropTypes.oneOf(['full', 'link']), // link表示仅展示入口,通常用于空数据提示
    pageKey: PropTypes.any,
    style: PropTypes.object,
    text: PropTypes.string
  }

  static defaultProps = {
    style: {},
    mode: 'full'
  }

  static demoAppKey = DEMO_APP_KEY

  static memoAppKey = undefined
  static memoAppList = undefined

  // 这里可以存储多个appKey信息
  static appInfo = {}

  // 请求队列, 用Promise实现，新的请求将加入then中，防止多个实例请求同时发送
  static promiseQueue = Promise.resolve()

  static enter() {
    const { appList, appKey } = store
    DemoSwitch.memoAppKey = appKey
    DemoSwitch.memoAppList = toJS(appList)
    store.setAppKey(DEMO_APP_KEY)
    store.setAppList([
      {
        appName: '体验应用',
        appKey: DEMO_APP_KEY
      }
    ])
  }

  static exit() {
    store.setAppKey(DemoSwitch.memoAppKey)
    store.setAppList(DemoSwitch.memoAppList)
    DemoSwitch.memoAppKey = undefined
    DemoSwitch.memoAppList = undefined
  }

  componentDidMount() {
    const { appList } = this.props.dataOperation
    // 应用列表为空的话不发送请求
    if (!appList.length) {
      return
    }
    // 这样写可以保证请求按照加载顺序执行, 后面的请求可以依赖前面的结果
    DemoSwitch.promiseQueue = DemoSwitch.promiseQueue
      .then(this.fetchAppInfo)
      // 需要强制渲染兜底，否则数据会和UI不同步
      .then(() => this.forceUpdate())
      .catch(() => this.forceUpdate())
  }

  get visible() {
    const { appKey } = this.props.dataOperation
    try {
      const matchRoute = route.routeList.find(
        item => BASE_PATH + item.path === this.props.match.path
      )
      const pageKey = matchRoute.key
      const currentAppInfo = DemoSwitch.appInfo[appKey]
      return !Boolean(currentAppInfo[pageKey])
    } catch (err) {
      return true
    }
  }

  // 获取本应用数据回传记录
  fetchAppInfo = async () => {
    const { appKey } = this.props.dataOperation
    if (DemoSwitch.appInfo[appKey]) {
      return
    }
    return http.get(APP_ENTER, { appKey }).then(res => {
      if (res.code === SUCCESS_OK) {
        DemoSwitch.appInfo[appKey] = res.body
      }
    })
  }

  handleEnterDemo = () => {
    DemoSwitch.enter()
    Logger.clickEnterDemo(this.props.text)
  }

  handleExitDemo = () => {
    DemoSwitch.exit()
  }

  render() {
    const { appKey, isDistribution } = this.props.dataOperation
    const isDemoMode = appKey === DEMO_APP_KEY // 是否开启体验模式
    const { mode, className, style } = this.props
    if (mode === 'link') {
      if (!isDemoMode && this.visible) {
        return (
          <div
            className={classnames(className, 'demo')}
            onClick={this.handleEnterDemo}
            style={style}
          >
            点击这里，查看数据中心体验Demo，体验数据中心的魅力！
          </div>
        )
      } else {
        return (
          <div>
            数据正在赶来的路上，稍后即可查看
            <br />
            如果一直没有数据的话，可能查看的日期没有产生相关数据哦~
          </div>
        )
      }
    } else if (mode === 'full') {
      if (isDemoMode) {
        const Tip = () =>
          ReactDOM.createPortal(
            <div className="demo-tip">
              <div className="container">
                回传数据后可查看接入应用数据情况，接入回传数据方式戳这里
                <a
                  href="/doc/detailApi?categoryId=14&articleId=36"
                  target="_blank"
                  rel="nofollow me noopener noreferrer"
                  onClick={() => Logger.clickDataUploadLink('播放数据回传')}
                >
                  播放数据回传
                </a>
                {isDistribution && (
                  <a
                    href="/doc/detailApi?categoryId=15&articleId=31#%E9%80%9A%E7%9F%A5%E8%AE%A2%E5%8D%95%E7%BB%93%E6%9E%9C"
                    target="_blank"
                    rel="nofollow me noopener noreferrer"
                    onClick={() => Logger.clickDataUploadLink('订单数据回传')}
                  >
                    订单数据回传
                  </a>
                )}
              </div>
            </div>,
            document.getElementById('demo-tip')
          )
        return (
          <React.Fragment>
            {!isXiaoYa() && <Tip />}
            <div className="demo" onClick={this.handleExitDemo}>
              退出demo体验模式
            </div>
          </React.Fragment>
        )
      } else {
        return this.visible ? (
          <div
            className={classnames(className, 'demo')}
            onClick={this.handleEnterDemo}
            style={style}
          >
            查看数据中心体验Demo
          </div>
        ) : null
      }
    }
  }
}
