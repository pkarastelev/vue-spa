import axios from 'axios'

class MovieService {

  getMovies () {
    return axios.get('/api/movies').then((response) => {
      return response.data.movies
    })
  }

}

export default new MovieService()