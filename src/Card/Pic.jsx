import React from 'react'

import Spin from '../App/Spin.js'

const Pic = ({ url }) => {
  return (
    <React.Fragment>
      <Spin className="card-spinner" />
      <img className="card-image" src={url} />
    </React.Fragment>
  )
}

export default Pic
