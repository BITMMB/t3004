import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './Card.css'
import { Rate } from 'antd'
import { format } from 'date-fns'

import Pic from './Pic.jsx'

export default class Card extends Component {
  render() {
    let { el } = this.props
    const result = format(new Date(el.release_date), 'PPP')

    return (
      <div className="card">
        <div className="card-blockimage">
          <Pic url={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${el.backdrop_path}`} />
        </div>
        <div className="card-discription">
          <div className="card-head">
            <h1 className="card-title">{el.title}</h1>
            <div className="card-circle">{el.vote_average}</div>
          </div>
          <div className="card-date">{result}</div>

          <div className="">action drama</div>
          <div className="card-text">{el.overview}</div>
          <div className="card-stars">
            <Rate disabled defaultValue={2} count={10} />
          </div>
        </div>
      </div>
    )
  }
}
