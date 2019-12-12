import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:56967/api/session',
  json: true
})

export default {
  async execute(method, resource, data, params) {
    return client({
      method,
      url: resource,
      data,
      params,
      headers: {}
    }).then(req => {
      return req.data
    })
  },
  post(e, p) {
    return this.execute('post', '/', { email: e, password: p })
      .catch(function (error) {
        alert(error.message);
      });
  },
  delete(token) {
    return this.execute('delete', '/', null, { 'token': token }).catch(function (error) {
      alert(error.message);
    })
  }
}
