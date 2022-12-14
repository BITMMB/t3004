import React from 'react'
import './Votering.css'

export default function Votering({ vote }) {
  let style
  if (vote > 0 && vote < 3) {
    style = 'red'
  } else if (vote >= 3 && vote < 5) {
    style = 'orange'
  } else if (vote >= 5 && vote < 7) {
    style = 'yello'
  } else if (vote >= 7) {
    style = 'green'
  } else if (vote == 0) {
    style = 'black'
  }

  return <div className={style}>{vote.toFixed(1)}</div>
}
