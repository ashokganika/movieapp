import React from 'react'
import { MovieType } from 'src/constants/movies'

import './style.scss'

function Movie(props: MovieType) {
  const { title, genre, director, thumbnail, image } = props
  return (
    <div className='movie_container'>
      <div className='image_container'>
        <img src={image} alt={title} />
      </div>
      <div className='content_container'>
        <p className='title'>{title}</p>
        <p className='genre'>
          {genre.map((g) => (
            <span key={g}>{g}</span>
          ))}
        </p>
        <p className='director'>{director}</p>
      </div>
    </div>
  )
}

export default Movie
