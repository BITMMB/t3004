import React, { Component } from 'react'
import { Pagination } from 'antd'

import CardList from '../CardList'
import RadioSelect from '../Radio'
import Api from '../Api'
import Error from '../Error'
import Search from '../Search'

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
      request: '',
    }
  }

  onError = () => {
    this.setState({
      error: false,
      loading: false,
    })
  }

  getMovie = (req, page) => {
    console.log(req, page)
    this.setState(() => {
      return { loading: true, data: [] }
    })
    this.get
      .getMovie(req, page)
      .then((moviesData) => {
        this.setState(() => {
          return { data: moviesData, loading: false, error: true, request: req }
        })
      })
      .catch(this.onError)
  }

  onChangePagination = (e) => {
    this.getMovie(this.state.request, e)
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
        <Search getMovie={this.getMovie} />
        {err}
        {spin}
        {data}
        <Pagination defaultCurrent={1} onChange={this.onChangePagination} total={500} />
      </section>
    )
  }
}
