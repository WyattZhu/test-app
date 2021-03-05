import './App.css'
import Header from './compontents/header'
import Footer from './compontents/footer'
import MoviesList from './compontents/moviesList'
import ErrorBoundray from './compontents/errorBoundary'

function App() {
  return (
    <div className="App">
      <Header title='TITLE'/>
      <ErrorBoundray>
        <MoviesList />
      </ErrorBoundray>
      <Footer />
    </div>
  )
}

export default App
