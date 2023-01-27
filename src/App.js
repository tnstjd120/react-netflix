import React, { useEffect } from 'react'
import styled from 'styled-components'
import './reset.css'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Row from './components/Row'
import Footer from './components/Footer'
import requests from './api/requests'

const Main = styled.div`
  background: rgb(0, 0, 0);
  padding: 0 20px;
  position: relative;
  z-index: 2;
`

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner props={this} />

      <Main>
        <Row
          title="NETFLIX 오리지널"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Row title="명작" fetchUrl={requests.fetchTopRated} />
        <Row title="지금 뜨는 콘텐츠" fetchUrl={requests.fetchTrending} />
        <Row title="액션&어드벤쳐" fetchUrl={requests.fetchActionMovies} />
        <Row title="코미디" fetchUrl={requests.fetchComedyMovies} />
      </Main>

      <Footer />
    </div>
  )
}

export default App
