import Axios from 'axios'

var instance = Axios.create({
  baseURL: 'http://118.89.178.218:8080',
  timeout: 3000
})

export default {
  getAllTrailer () {
    return instance.get(`/api/trailer?limit=9`)
  },
  getTrailer (id) {
    return instance.get(`/api/trailer/` + id)
  }
}
