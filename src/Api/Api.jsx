import axios from 'axios'

class Api {
  async getResourse(url) {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Bad connection ${url}`)
    }
    return await res.json()
  }

  async getMovie(req, page) {
    if (req == '') {
      return
    }
    const res = await this.getResourse(
      `https://api.themoviedb.org/3/search/movie?api_key=52a8bf336d2bf5d0b700784c4a318215&language=en-US&query=${req}&page=${page}&include_adult=true`
    )

    return res.results
  }

  async getSessionId() {
    if (!document.cookie.length == 0) {
      return
    }
    const res = await this.getResourse(
      'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=52a8bf336d2bf5d0b700784c4a318215'
    )

    document.cookie = `${res.guest_session_id}`
  }

  async postRate(movieId, rate) {
    axios
      .post(
        `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=52a8bf336d2bf5d0b700784c4a318215&guest_session_id=${document.cookie}`,
        {
          value: rate,
        }
      )
      // .then(function (response) {
      //   console.log(response)
      // })
      .catch(function (error) {
        console.log(error)
      })
  }

  async getRated() {
    const res = await this.getResourse(
      `https://api.themoviedb.org/3/guest_session/${document.cookie}/rated/movies?api_key=52a8bf336d2bf5d0b700784c4a318215&language=en-US&sort_by=created_at.a`
    )

    return res.results
  }

  async getGenres() {
    const res = await this.getResourse(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=52a8bf336d2bf5d0b700784c4a318215&language=en-US'
    )

    return res
  }
}

export default Api
