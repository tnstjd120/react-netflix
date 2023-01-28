import React from 'react'
import styled from 'styled-components'
import './MovieModal.css'

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 11;
`

const Modal = styled.div`
  width: 100%;
  max-width: 800px;
  height: 84vh;
  overflow: auto;
  background-color: #111;
  border-radius: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const list = [1, 2, 3, 4, 5]

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  const bgBaseUrl = 'https://image.tmdb.org/t/p/original/'

  return (
    <ModalBackground>
      <Modal>
        <div className="modal__header">
          <img src={bgBaseUrl + backdrop_path} />

          <button className="modal__close" onClick={() => setModalOpen(false)}>
            &times;
          </button>
        </div>

        <div className="modal__body">
          <div className="modal__detail">
            <span>97% 일치</span> {release_date ? release_date : first_air_date}
          </div>

          <h2 className="modal__title">{title ? title : name}</h2>

          <div className="modal__average">평점 : {vote_average}</div>

          <p className="modal__overview">{overview}</p>

          {/* <div className="modal__list">
            <h3>
              <strong>회차</strong>
              <small>{title ? title : name}</small>
            </h3>

            <ul>
              {list.map((item, index) => (
                <li key={index}>
                  <h4>{`${item}화`}</h4>
                  <p>{overview}</p>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </Modal>
    </ModalBackground>
  )
}

export default MovieModal
