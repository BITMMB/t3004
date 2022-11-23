class Api {
  async getResourse(url) {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Bad connection ${url}`)
    }
    return await res.json()
  }

  // const url =
  // 'https://api.themoviedb.org/3/movie/top_rated?api_key=52a8bf336d2bf5d0b700784c4a318215&language=en-US&page=1'
  // 'https://api.themoviedb.org/3/movie/upcoming?api_key=52a8bf336d2bf5d0b700784c4a318215&language=en-US&page=1'

  async getMovie() {
    const res = await this.getResourse(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=52a8bf336d2bf5d0b700784c4a318215&language=en-US&page=1'
    )

    return res.results
  }
}

export default Api
