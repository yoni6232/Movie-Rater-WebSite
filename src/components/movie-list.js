import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import { API } from '../api-service';
import {useCookies} from 'react-cookie'

function MovieList(props){

    const [token] = useCookies(['mr-token'])

    const movieClicked= movie => evt =>{
        props.movieClicked(movie);
    }
    const editClick = movie => {
        props.editClick(movie);
    }

    const deleteClick = movie => {
        
        API.deleteMovie(movie.id,token)
        .then(() => props.deleteClick(movie))
    }
    return (

        <div className = "movie">
         { props.movies && props.movies.map(movie =>{
          return( 
              <div key = {movie.id} className="movie-item">
              <h2 style={{'cursor': 'pointer'}} onClick={movieClicked(movie)}>{movie.title}</h2>
              <FontAwesomeIcon icon={faEdit} onClick={()=>editClick(movie)}/>
              <FontAwesomeIcon icon={faTrash} onClick={()=>deleteClick(movie)}/>
              </div>
              )
        })}
        </div>
    )
}

export default MovieList;