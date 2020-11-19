import React, { Component } from 'react'

export default class Comp extends Component {
  num = 1

  state = {
    count: -1000,
  }

  promiseQueue = Promise.resolve()

  componentDidMount() {
    // // 这样写可以保证请求按照加载顺序执行, 后面的请求可以依赖前面的结果
    // this.promiseQueue = this.promiseQueue
    //   .then(this.begin.bind(this, this.num))
    //   // 需要强制渲染兜底，否则数据会和UI不同步
    //   .then(() => this.forceUpdate())
    //   .catch(() => this.forceUpdate())
  }

  fn = (num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num)
      }, (10 - num) * 1000)
    })
  }

  begin() {
    this.num += 1
    if (this.num > 10) {
      this.num = 1
    }
    console.log(`开始计时，${10 - this.num}秒后，count值变为:`, this.num)
    return new Promise(async (resolve, reject) => {
      const count = await this.fn(this.num)
      this.setState({
        count,
      })
    })
  }

  render() {
    return (
      <div>
        <p>count值：{this.state.count}</p>
        <button onClick={this.begin.bind(this)}>点击</button>
      </div>
    )
  }
}
