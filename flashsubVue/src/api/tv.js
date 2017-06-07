import Axios from 'axios'

var instance = Axios.create({
  baseURL: 'http://118.89.178.218:8080',
  timeout: 3000
})

export default {
  getAllTV (page = 1, limit = 0) {
    return instance.get(`/api/tv?page=${page}&limit=${limit}`)
  },
  getTV (id) {
    return instance.get(`/api/tv/` + id)
  },
  getTVOnShow () {
    return instance.get('/api/tv?page=1&limit=4')
  }
}
