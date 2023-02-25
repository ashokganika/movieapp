import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
import Search from './components/Search'
import { MOVIES, MovieType } from './constants/movies'

import './App.scss'

function App() {
  const [movies, setMovies] = useState<MovieType[]>([])
  const [searchMovie, setSearchMovie] = useState<MovieType[]>([])

  useEffect(() => {
    const getMovies = async (): Promise<void> => {
      try {
        // const response = await fetch('https://www.omdbapi.com/?t=&apikey=6dd2d144')
        // const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
        //   headers: {
        //     'X-RapidAPI-Key': 'dc561dc689mshbc86d7867b40d40p1ca171jsn06b732fd7eb3',
        //     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        //   },
        // })

        // const movies = await response.json()
        setMovies(MOVIES)
        setSearchMovie(MOVIES)
      } catch (error) {
        console.log('error fetcing movies')
      }
    }

    getMovies()
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    if (!value) {
      setSearchMovie(() => movies)
      return
    }

    setSearchMovie(() =>
      movies.filter((movie: MovieType) =>
        movie.title.toLowerCase().includes(value.toLocaleLowerCase()),
      ),
    )
  }

  return (
    <div className='app'>
      <div className='container'>
        <div className='search'>
          <Search name='search' placeholder='Search Movie...' handleSearch={handleSearch} />
        </div>
        {searchMovie.map((x) => (
          <Movie {...x} />
        ))}
      </div>
    </div>
  )
}

export default App
