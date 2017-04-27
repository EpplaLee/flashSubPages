import Axios from 'axios'

var instance = Axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000
})

export default {
  getAllNews (tag = '', page = 1, limit = 0) {
    return instance.get(`/api/news?tag=${tag}&page=${page}&limit=${limit}`)
  },
  getNews (id) {
    return instance.get(`/api/news/` + id)
  }
}
