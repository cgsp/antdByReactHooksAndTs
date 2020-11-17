import React, { Component } from 'react'

export default class Comp extends Component {
  state = {
    count: 0,
  }

  handleClick() {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
      console.log(this.state.count)
    }, 4000)
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick.bind(this)}>点击</button>
      </div>
    )
  }
}
