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
  max-width: 500px;
  height: 84vh;
  overflow: auto;
  background-color: #fff;
  border-radius: 12px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

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
  return (
    <ModalBackground onClick={() => setModalOpen(false)}>
      <Modal>
        <div className="modal__banner"></div>
      </Modal>
    </ModalBackground>
  )
}

export default MovieModal
