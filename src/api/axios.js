import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '1d392cc8fe640115c89941d4fa5c04bc',
    language: 'ko-KR',
    include_image_language: 'ko,en,null',
  },
})

export default instance
