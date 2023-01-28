import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import styled from 'styled-components'

import axios from '../../api/axios'

const SearchContainer = styled.div`
  padding: 100px 60px;

  @media screen and (max-width: 768px) {
    padding: 120px 30px;
  }
`

const MovieBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 60px;

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Movie = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 3px 50px rgba(50, 50, 50, 0.3);
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`

const NoResultContainer = styled.div`
  height: calc(100vh - 300px);
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  const searchTerm = query.get('q')
  const debounceSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    fetchSearchMovies(debounceSearchTerm)
  }, [debounceSearchTerm])

  const fetchSearchMovies = async (query) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${query}`,
      )
      setSearchResult(request.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const baseUrl = 'https://image.tmdb.org/t/p/original/'
  const renderSearchResult = () => {
    return searchResult.length > 0 ? (
      <SearchContainer>
        <MovieBox>
          {searchResult.map(
            (item) =>
              (item.poster_path || item.profile_path) && (
                <Movie key={item.id} onClick={() => navigate(`/${item.id}`)}>
                  <img
                    src={
                      baseUrl +
                      (item.poster_path ? item.poster_path : item.profile_path)
                    }
                    alt={item.name}
                  />
                </Movie>
              ),
          )}
        </MovieBox>
      </SearchContainer>
    ) : (
      <NoResultContainer>
        <h2>{`"${debounceSearchTerm}"`}</h2>
        <span>&nbsp;검색에 해당하는 자료가 없습니다.</span>
      </NoResultContainer>
    )
  }

  return renderSearchResult()
}

export default SearchPage
