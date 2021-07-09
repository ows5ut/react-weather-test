import axios, { AxiosInstance } from 'axios';

const apiKey = 'f255888c7868038499fb2fe7899829c6';

const instanse: AxiosInstance = axios.create({
  baseURL: 'http://api.openweathermap.org/'
});

export interface ApiInterface {
  getWeather: Function
}

export const api: ApiInterface = {
  getWeather: async (city: string) => {
    return (await instanse.get(`data/2.5/weather`, {
      params: {
        q: city,
        APPID: apiKey,
        units: 'metric'
      }
    }))
  }
}