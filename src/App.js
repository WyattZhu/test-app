import './App.css'
import React,{ Compontent } from 'react'
import Header from './compontents/header'
import Footer from './compontents/footer'
import MoviesList from './compontents/moviesList'
import ErrorBoundray from './compontents/errorBoundary'

class App extends Compontent {
  state = {
    movies:[
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
      }],
      app:{title:'sssss'}

  }
  render() {
    const {movies, app }  = this.state
    return (
      <div className="App">
        <Header app={app}/>
        <ErrorBoundray>
          <MoviesList movies={movies}/>
        </ErrorBoundray>
        <Footer />
      </div>
    )
  } 
}

export default App
