import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import axios from 'axios'
import Layout from '../components/Layout';
import Row from '../components/Row';

function NewandPopularPage() {
  const url = 'http://127.0.0.1:8000/api/v1/movies/fetch-data/'

return (
    <>
      <Layout/>
      <Row rowID='1' title = 'Popular' getURL={url}/>
      <Row rowID='2' title = 'Trending' getURL={url}/>
      <Row rowID='3' title = 'Top Rated' getURL={url}/>
      <Row rowID='4' title = 'Playing Now' getURL={url}/>
      <Row rowID='5' title = 'Action' getURL={url}/>
    </>
  )
}

export default NewandPopularPage