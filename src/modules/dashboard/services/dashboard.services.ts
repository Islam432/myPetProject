import axios from 'axios'
import { FormCardAdd } from '../components/DashBoard/DashBoard'

const api = import.meta.env.VITE_API_URL

export function findOffice(token: string | undefined) {
  return axios.get(`${api}/branch`, {
    headers: {
      authorization: token,
    },
  })
}

export function sendClass(token: string | undefined, data: FormCardAdd) {
  return axios.post(`${api}/classes`, data, {
    headers: {
      authorization: token,
    },
  })
}
import axios from 'axios'
import Cookies from 'js-cookie'

const apiUrl = import.meta.env.VITE_API_URL

export function getClasses<T>() {
  return axios.get<T>(`${apiUrl}/classes`, {
    headers: {
      Authorization: Cookies.get('token'),
    },
  })
}
