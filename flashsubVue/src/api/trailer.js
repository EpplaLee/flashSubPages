import Axios from 'axios'

var instance = Axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 3000
})

export default {
  getAllTrailer () {
    return instance.get(`/api/trailer?page=1&limit=9`)
  },
  getTrailer (id) {
    return instance.get(`/api/trailer/` + id)
  }
}
