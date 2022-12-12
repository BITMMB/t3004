import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './Card.css'
import { Rate } from 'antd'
import { format } from 'date-fns'

import { GeneresConsumer } from '../Context'
import Genres from '../Genres/Genres'
import Votering from '../Votering'
import Text from '../Text'
import Title from '../Text/Title'

import Pic from './Pic.jsx'

export default class Card extends Component {
  render() {
    let { el, postRate } = this.props
    const result = el.release_date ? format(new Date(el.release_date), 'PPP') : <span>Relise date unknown</span>

    return (
      <div className="card">
        <div className="card-blockimage">
          <Pic url={el.backdrop_path} />
        </div>

        <div className="card-head">
          <div className="card-title">
            <Title text={el.title} />
          </div>
          <Votering vote={el.vote_average} />
        </div>
        <div className="card-date">{result}</div>

        <div className="card-generes">
          <GeneresConsumer>
            {(genres) => {
              return <Genres genres={genres} genre_ids={el.genre_ids} />
            }}
          </GeneresConsumer>
        </div>

        <div className="card-text">
          <Text text={el.overview} />
        </div>
        <div className="card-stars">
          <Rate
            defaultValue={0}
            count={10}
            value={el.rating}
            onChange={(rate) => {
              postRate(el.id, rate)
            }}
          />
        </div>
      </div>
    )
  }
}
