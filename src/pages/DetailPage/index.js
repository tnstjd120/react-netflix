import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'

import './DetailPage.css'

const DetailPage = () => {
  const [movie, setMovie] = useState({})
  const { movieId } = useParams()

  useEffect(() => {
    fetchMovie()
  }, [])

  const fetchMovie = async () => {
    const request = await axios.get(`/movie/${movieId}`)
    try {
      setMovie(request.data)
    } catch (error) {
      console.log(error)
    }
  }

  const baseUrl = 'https://image.tmdb.org/t/p/original/'

  return movie ? (
    <div className="detail-container">
      <div className="detail__banner">
        <img
          src={baseUrl + movie.backdrop_path}
          alt={movie.title ? movie.title : movie.name}
        />
      </div>

      <div className="detail__body">
        <div className="detail__top">
          <span>97% 일치</span>{' '}
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </div>

        <h2 className="detail__title">
          {movie.title ? movie.title : movie.name}
        </h2>

        <div className="detail__average">평점 : {movie.vote_average}</div>

        <p className="detail__overview">{movie.overview}</p>
      </div>
    </div>
  ) : (
    <h2>정보가 없습니다.</h2>
  )
}

export default DetailPage
