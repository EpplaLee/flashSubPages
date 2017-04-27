import Axios from 'axios'

var instance = Axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000
})

export default {
  getAllMovie (tag = '', page = 1, limit = 0) {
    return instance.get(`/api/movie?tag=${tag}&page=${page}&limit=${limit}`)
  },
  getMovie (id) {
    return instance.get(`/api/movie/` + id)
  }
}
