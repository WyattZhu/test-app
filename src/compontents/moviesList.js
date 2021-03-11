import React from 'react'
import './style.css'
import MovieCard from './movieCard'


export default function MovicesList(movies) {
  return (
    <>
      {movies.map(movie => (
        <MovieCard title={movie.title} desc={movie.desc} key={movie.id} />
        ))}
    </>
  )
}
