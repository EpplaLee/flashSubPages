import Axios from 'axios'

var instance = Axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000
})

export default {
  getAllTV (tag = '', page = 1, limit = 0) {
    return instance.get(`/api/tv?tag=${tag}&page=${page}&limit=${limit}`)
  },
  getTV (id) {
    return instance.get(`/api/tv/` + id)
  }
}
