import React from 'react'
import TMDB_API_KEY from '../../../back_end/back_end/settings.py'

function layout() {

    const getShows = async() => {
        response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
        console.log(response.data)
    }

  return (
    <div  className='relative'>
        <header>

        </header>
    </div>
  )
}

export default layout