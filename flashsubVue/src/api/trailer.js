import Axios from 'axios'

var instance = Axios.create({
  baseURL: 'http://118.89.178.218:8080',
  timeout: 3000
})

export default {
  getAllTrailer (tag = '', page = 1, limit = 0) {
    return instance.get(`/api/trailer?tag=${tag}&page=${page}&limit=${limit}`)
  },
  getTrailer (id) {
    return instance.get(`/api/trailer/` + id)
  }
}
