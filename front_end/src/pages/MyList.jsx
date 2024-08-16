import React from 'react'
import { useState, useEffect } from "react";
import Layout from '../components/Layout'
import Row from '../components/Row'
import { api } from '../utilities'

function MyList() {
  const [favorites, setFavorites] = useState([])
  const url = 'http://127.0.0.1:8000/api/v1/movies/fetch-data/'

  const addFavorite = async() => {
    let response = await api.post('Favorites/')
  }

  const getFavorites = async() => {
      let response = await api.get('Favorites/')
      setFavorites(response)

  }

  return (
    <>
    <Layout/>
      <Row rowID='1' title = 'My List' getURL={url}/>
      </>
  )
}

export default MyList