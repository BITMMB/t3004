import React, { Component } from 'react'

import Spin from '../App/Spin.js'

import no_poster from './no_poster.jpg'

export default class Pic extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }
  load = () => {
    this.setState({ loading: false })
  }

  render() {
    const url = this.props.url
    const img = url ? (
      <img className="card-image" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${url}`} onLoad={this.load} />
    ) : (
      <img className="card-image" src={no_poster} />
    )

    const spin = this.state.loading ? <Spin className="card-spinner" /> : null

    return (
      <React.Fragment>
        {img}
        {spin}
      </React.Fragment>
    )
  }
}

// const Pic = ({ url }) => {
//   let img = url ? (
//     <img className="card-image" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${url}`} onLoad={load} />
//   ) : (
//     <img className="card-image" src={no_poster} />
//   )

//   return (
//     <React.Fragment>
//       {/* <Spin className="card-spinner" /> */}
//       {img}
//     </React.Fragment>
//   )
// }

// export default Pic
