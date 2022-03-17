import axios from 'axios'


const get = async (url, params) => {
    const path =  await mountPath(url)
    return axios.get(path, { params })
  }
  const show = async (url, params) => {
    const path = await mountPath(url)
    return axios.get(path, { params })
  }
  const post = async (url, params) => {
    const path = await mountPath(url)
    return axios.post(path, params)
  }
  const put = async (url, params) => {
    const path = await mountPath(url)
    return axios.put(path, params)
  }
  const destroy = async (url, params = {}) => {
    const path = await mountPath(url)
    return axios.delete(path, { params })
  }
  
  const mountPath = async (url) => {
    return process.env.VUE_APP_API_URL + url
  }

  export { axios, get, show, post, put, destroy }