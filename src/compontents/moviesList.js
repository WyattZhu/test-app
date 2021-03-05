import React from 'react'
import './style.css'
import MovieCard from './movieCard'

const movieArr = [
  {
    id:'uuid_1',
    title:  'title1',
    desc: 'desc1'
  },  
  {
    id:'uuid_2',
    title:  'title2',
    desc: 'desc2'
  },  
  {
    id:'uuid_3',
    title:  'title3',
    desc: 'desc3'
  }]

export default function MovicesList() {
  return (
    <>
      {movieArr.map(movie => (
        <MovieCard title={movie.title} desc={movie.desc} key={movie.id} />
        ))}
    </>
  )
}
