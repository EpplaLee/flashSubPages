import Axios from 'axios'

var instance = Axios.create({
  baseURL: 'http://118.89.178.218:8080',
  timeout: 3000
})

export default {
  getAllMovie (page = 1, limit = 0) {
    return instance.get(`/api/movie?page=${page}&limit=${limit}`)
  },
  getMovie (id) {
    return instance.get(`/api/movie/` + id)
  },
  getMovieOnShow () {
    return instance.get('api/movie?page=1&limit=4')
  }
}
