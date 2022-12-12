import React, { Component } from 'react'
import { Pagination } from 'antd'

import CardList from '../CardList'
import RadioSelect from '../Radio'
import Api from '../Api'
import Error from '../Error'
import Search from '../Search'
import { GeneresProvaider } from '../Context'

import Spin from './Spin.js'

import './App.css'
import './Spin.css'

export default class App extends Component {
  constructor() {
    super()
    this.get = new Api()
    this.genres

    this.state = {
      data: [],
      loading: false,
      error: true,
      request: '',
      radioSearch: true,
    }
  }

  componentDidMount = () => {
    this.get.getSessionId()

    this.get.getGenres().then((e) => {
      this.genres = e.genres
    })
  }

  onError = () => {
    this.setState({
      error: false,
      loading: false,
    })
  }

  radio = (v) => {
    if (v == 1) {
      this.setState(() => {
        return { radioSearch: true, data: [] }
      })
    } else if (v == 2) {
      this.setState(() => {
        return { loading: true, data: [] }
      })
      this.get
        .getRated()
        .then((moviesData) => {
          this.setState(() => {
            return { data: moviesData, loading: false, error: true, radioSearch: false }
          })
        })
        .catch(this.onError)
    }
  }

  getMovie = (req, page) => {
    this.setState(() => {
      return { loading: true, data: [] }
    })
    this.get
      .getMovie(req, page)
      .then((moviesData) => {
        if (moviesData.length == 0) {
          this.setState(() => {
            return { data: false, loading: false, error: true, request: req }
          })
        } else {
          this.setState(() => {
            return { data: moviesData, loading: false, error: true, request: req }
          })
        }
      })
      .catch(this.onError)
  }

  postRate = (movieId, rate) => {
    this.get.postRate(movieId, rate)
  }

  onChangePagination = (e) => {
    this.getMovie(this.state.request, e)
  }

  render() {
    const { loading, error, radioSearch } = this.state

    const err = !error ? <Error /> : null
    const spin = loading ? <Spin /> : null
    const data = loading || error ? <CardList data={this.state.data} postRate={this.postRate} /> : null
    const nores = !this.state.data && radioSearch ? <div>No result</div> : null
    const search = radioSearch ? <Search getMovie={this.getMovie} /> : null
    const pagi = radioSearch ? <Pagination defaultCurrent={1} onChange={this.onChangePagination} total={500} /> : null
    return (
      <GeneresProvaider value={this.genres}>
        <section className="mainsection">
          <form></form>
          <RadioSelect radio={this.radio} />
          {search}
          {err}
          {spin}
          {data}
          {nores}
          {pagi}
        </section>
      </GeneresProvaider>
    )
  }
}
