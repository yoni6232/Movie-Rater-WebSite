import React,{ useState,useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list'
import MovieDetails from './components/movie-details'
import MovieForm from './components/movie-form'
import {useCookies} from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [movies , setMovies] = useState([]);
  const [SelectedMovie,setSelectedMovie] = useState(null)
  const [editdMovie,seteditdMovie] = useState(null)
  // eslint-disable-next-line
  const [token,setToken,removeToken] = useCookies(['mr-token'])

//set the movies list from the django API

  useEffect(()=>{
    fetch("http://192.168.56.1:8000/api/movies/",{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${token['mr-token']}`
      }
    }).then(resp => resp.json())
    .then(resp => setMovies(resp))
    .catch(err => console.log(err))
  // eslint-disable-next-line  
  },[])

  useEffect(()=>{
    if(!token['mr-token']) window.location.href= '/';
  },[token])


  const loadMovie = movie => {
    setSelectedMovie(movie);
    seteditdMovie(null);
  }

  //set the efited movit to the edit array
  const editClick = movie => {
    seteditdMovie(movie);
    setSelectedMovie(null);
  }
//delete function find the movie id and delete from the array
  const deleteClick = movie => {
    const newMovieDelete = movies.filter(mov => mov.id !== movie.id)
    setMovies(newMovieDelete);
  }

  //search
  const updatedMovie = movie1 => {
    const newMovie = movies.map( mov=> {
      if (mov.id === movie1.id){
        return movie1
      } 
      return mov
    })
    setMovies(newMovie)
  }

  const newMovie = () =>{
    seteditdMovie({title:'',description:''});
    setSelectedMovie(null);

  }

  const MovieCreated = movie =>{
    setMovies([...movies,movie]);
  }

  const logOutUser = () =>{
    removeToken(['mr-token'])
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>
      <FontAwesomeIcon icon={faFilm}/>
      <span>Movie Rater</span>
      </h1>
      <FontAwesomeIcon icon={faSignOutAlt} onClick={logOutUser}/>

      </header>
      <div className="Layout">
      <div>
      <MovieList 
       movies = {movies}
       movieClicked = {loadMovie}
       editClick={editClick} 
       deleteClick={deleteClick}
       />

      <button onClick={newMovie}>New Movie</button>
      </div>
       
        <MovieDetails 
        SelectedMovie = {SelectedMovie} 
        MovieUpdate = {loadMovie}

        />
        { editdMovie ?  
        <MovieForm editdMovie={editdMovie}  updatedMovie={updatedMovie} MovieCreated={MovieCreated}

        /> : 
        null}
        </div>
      </div>
  );
}

export default App;
