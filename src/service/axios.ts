import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.BASE_URL_API as string,
})

export const localapi = axios.create({
  baseURL: process.env.BASE_URL as string,
})
