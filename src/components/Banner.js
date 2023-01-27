import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/requests'
import './Banner.css'
import { FaPlay, FaInfoCircle } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const Inner = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  overflow: hidden;
`

const Iframe = styled.iframe`
  width: 100%;
  height: calc(100% + 120px);
  position: absolute;
  top: -60px;
  left: 0;
  pointer-events: none;
`

const CloseButton = styled.button`
  border: 0;
  background-color: #fff;
  width: 40px;
  height: 40px;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  position: absolute;
  right: 14px;
  top: 14px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const CancelTitle = styled.h2`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  line-height: 2;
`

const Banner = (el) => {
  const [movie, setMovie] = useState([])
  const [movieLogo, setMovieLogo] = useState('')
  const [isPlay, setIsPlay] = useState(false)
  const bgBaseUrl = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying)

    const results = request.data.results.filter((item) => {
      if (item.overview) return item
    })

    const movieId = results[Math.floor(Math.random() * results.length)].id

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'images,videos' },
    })

    setMovie(movieDetail)
    setMovieLogo(movieDetail.images.logos[0].file_path)
  }

  if (isPlay) {
    if (movie.videos.results.length === 0) {
      return (
        <Container>
          <CloseButton onClick={() => setIsPlay(false)}>&times;</CloseButton>

          <Inner>
            <CancelTitle>
              해당 영화에 해당하는 영상이 없습니다.
              <br />
              새로고침 해주세요!
            </CancelTitle>
          </Inner>
        </Container>
      )
    } else {
      return (
        <Container>
          <CloseButton onClick={() => setIsPlay(false)}>&times;</CloseButton>

          <Inner>
            <Iframe
              id="movie_iframe"
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
              title="YouTube video player"
              frameBorder="0"
              allowfullscreen
            ></Iframe>
          </Inner>
        </Container>
      )
    }
  } else {
    return (
      <div
        className="banner"
        style={{
          backgroundImage: `url('${bgBaseUrl}${movie.backdrop_path}')`,
        }}
      >
        <div className="banner__info">
          <div className="banner__logo">
            <img src={`${bgBaseUrl}${movieLogo}`} alt={movie.original_title} />
          </div>

          <p className="banner__description">{movie.overview}</p>

          <div className="banner__buttons">
            <button
              className="banner__button play"
              onClick={() => setIsPlay(true)}
            >
              <FaPlay />
              재생
            </button>
            <button className="banner__button info">
              <FaInfoCircle />
              상세정보
            </button>
          </div>
        </div>
        <script src="https://www.youtube.com/iframe_api"></script>
      </div>
    )
  }
}

export default Banner
