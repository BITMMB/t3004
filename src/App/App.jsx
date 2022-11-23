import React, { Component } from 'react'
import { Pagination, Input } from 'antd'

import CardList from '../CardList'
import RadioSelect from '../Radio'
import Api from '../Api'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.get = new Api()

    this.state = {
      data: [],
    }
  }

  getMovie = () => {
    this.get.getMovie().then((moviesData) => {
      this.setState(() => {
        return { data: moviesData }
      })
    })
  }

  render() {
    return (
      <section className="mainsection">
        <form></form>
        <RadioSelect />
        <Input placeholder="Type to search" onPressEnter={this.getMovie.bind(this)} />
        <CardList data={this.state.data} />
        <Pagination defaultCurrent={1} total={50} />
      </section>
    )
  }
}
// class Api {
//   async getResourse(url) {
//     const res = await fetch(url)
//     if (!res.ok) {
//       throw new Error(`Bad connection ${url}`)
//     }
//     return await res.json()
//   }

//   // const url =
//   //   'https://api.themoviedb.org/3/movie/?api_key=52a8bf336d2bf5d0b700784c4a318215&language=en-US&page=1'

//   getMovie() {
//     return this.getResourse(
//       'https://api.themoviedb.org/3/movie/top_rated?api_key=52a8bf336d2bf5d0b700784c4a318215&language=en-US&page=1'
//     )
//   }
// }
// const fuck = new Api()

// fuck.getMovie().then((body) => {
//   console.log(body)
// })
