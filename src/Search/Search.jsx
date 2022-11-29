import React, { Component } from 'react'
import { Input } from 'antd'
import { debounce } from 'lodash'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      label: '1',
    }
  }

  onChange = (e) => {
    e.preventDefault()
    this.setState({
      label: e.target.value,
    })

    this.debounced()
  }

  debounced = () => {
    debounce(this.props.getMovie, 1000)
  }

  // debounce(f, ms) {
  //   console.log('1')
  //   let isCooldown = false
  //   return function () {
  //     if (isCooldown) return
  //     f.apply(this, arguments)
  //     isCooldown = true
  //     setTimeout(() => (isCooldown = false), ms)
  //   }
  // }

  render() {
    // const { getMovie } = this.props

    return <Input placeholder="Type to search" onChange={this.onChange} />
  }
}

// onPressEnter={this.getMovie.bind(this)}
// this.props.getMovie(this.state.label),
