import { API_ROOT } from '@/api.conf'
import axios from 'axios'

const login = axios.create()

login.defaults.baseURL = API_ROOT

export default {
  login (context, formData) {
    return login.post('/login', formData).then(
      response => {
        localStorage.setItem('api_token', response.data.data.api_token)
        return response
      },
      err => {
        console.log('login error: ', err)
        return err
      }
    )
  },
  logout () {
    localStorage.removeItem('api_token')
    location.reload()
  },
  isUserAuthorized () {
    return !!localStorage.getItem('api_token')
  }
}
