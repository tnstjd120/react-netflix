import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: 'ko-KR',
    include_image_language: 'ko,en,null',
  },
})

export default instance
