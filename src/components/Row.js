import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import axios from '../api/axios'
import styled from 'styled-components'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './Row.css'
import MovieModal from './MovieModal'

const CustomSwiperSlide = styled(SwiperSlide)`
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.4s;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    position: relative;
    z-index: 3;
  }
`

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const requests = await axios.get(fetchUrl)
    setMovies(requests.data.results)
  }

  const handleMovieClick = async (movie) => {
    setModalOpen(true)
    setSelectedMovie(movie)
  }

  const baseUrl = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerGroup={2}
        slidesPerView={2}
        breakpoints={{
          500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <CustomSwiperSlide
            key={movie.id}
            className="row__poster"
            onClick={() => handleMovieClick(movie)}
          >
            <img src={`${baseUrl}${movie.poster_path}`}></img>
          </CustomSwiperSlide>
        ))}
      </Swiper>

      {modalOpen && (
        <MovieModal {...selectedMovie} setModalOpen={setModalOpen} />
      )}
    </div>
  )
}

export default Row
