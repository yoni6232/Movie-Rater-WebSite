import React,{ useState,useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list'
import MovieDetails from './components/movie-details'


function App() {
  const [movies , setMovies] = useState([]);
  const [SelectedMovie,setSelectedMovie] = useState([null])

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : 'Token 25b8202fc2131537da6705fa0cd6030e89ab55e8'
      }
    }).then(resp => resp.json())
    .then(resp => setMovies(resp))
    .catch(err => console.log(err))
    
  },[])

  const movieClicked = movie => {
    setSelectedMovie(movie)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Movie Rater</h1>
      </header>
      <div className="Layout">
        <MovieList movies = {movies} movieClicked = {movieClicked}/>
        
        <div><MovieDetails SelectedMovie = {SelectedMovie}/></div>
        </div>
      </div>
  );
}

export default App;
