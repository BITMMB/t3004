import React, { Component } from 'react'
import { Pagination, Input } from 'antd'

import CardList from '../CardList'
import RadioSelect from '../Radio'
import Api from '../Api'
import Error from '../Error'

import Spin from './Spin.js'

import './App.css'
import './Spin.css'

export default class App extends Component {
  constructor() {
    super()
    this.get = new Api()

    this.state = {
      data: [],
      loading: false,
      error: true,
    }
  }

  onError = () => {
    this.setState({
      error: false,
      loading: false,
    })
  }

  getMovie = () => {
    this.setState(() => {
      return { loading: true }
    })
    this.get
      .getMovie()
      .then((moviesData) => {
        this.setState(() => {
          return { data: moviesData, loading: false, error: true }
        })
      })
      .catch(this.onError)
  }

  render() {
    const { loading, error } = this.state

    const err = !error ? <Error /> : null
    const spin = loading ? <Spin /> : null
    const data = loading || error ? <CardList data={this.state.data} /> : null

    return (
      <section className="mainsection">
        <form></form>
        <RadioSelect />
        <Input placeholder="Type to search" onPressEnter={this.getMovie.bind(this)} />
        {err}
        {spin}
        {data}
        <Pagination defaultCurrent={1} total={50} />
      </section>
    )
  }
}
