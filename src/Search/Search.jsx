import React, { Component } from 'react'
import { Input } from 'antd'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      label: '1',
    }
    this.debouncedFunc = this.debounce(this.get, 500)
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      label: e.target.value,
    })
    this.debouncedFunc()
  }

  debounce(func, wait) {
    let timeout

    return function () {
      const context = this
      const args = arguments
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(context, args), wait)
    }
  }

  get() {
    this.props.getMovie(this.state.label)
  }

  render() {
    return <Input placeholder="Type to search" onChange={this.onChange} />
  }
}
