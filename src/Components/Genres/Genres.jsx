import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Genres.css'

export default function Genres({ genres, genre_ids }) {
  const genre = genres.map((el) => {
    if (genre_ids.includes(el.id)) {
      return (
        <span className="genre" key={uuidv4()}>
          {el.name}
        </span>
      )
    }
  })
  return genre
}
