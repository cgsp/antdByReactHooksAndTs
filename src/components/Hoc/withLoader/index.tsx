import React, { Component } from 'react'

interface ILoaderState {
  data: any
  isLoading: boolean
}

interface ILoaderProps {
  data: any
}

const withLoader = <P extends ILoaderState>(
  WrappedComp: React.ComponentType<P>
) => {
  return class LoaderComp extends Component<
    Partial<ILoaderProps>,
    ILoaderState
  > {
    constructor(props: any) {
      super(props)
      this.state = {
        data: null,
        isLoading: false,
      }
    }

    componentDidMount() {
      this.setState({
        data: null,
        isLoading: true,
      })
      setTimeout(() => {
        this.setState({
          data: { name: 'gsp' },
          isLoading: false,
        })
      }, 2000)
    }

    render() {
      const { data, isLoading } = this.state
      return (
        <React.Fragment>
          {isLoading || !data ? (
            <p>加载中....</p>
          ) : (
            <WrappedComp {...(this.props as P)} data={data}></WrappedComp>
          )}
        </React.Fragment>
      )
    }
  }
}

export default withLoader
// withLoader(<p>111</p>, '11')
