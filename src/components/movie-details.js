import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props){


    return (

        <div>
                <h1>Movie Details && Rating</h1>
                { props.SelectedMovie ? (
                    <div>
                    <h2>{props.SelectedMovie.title}</h2>
                    <p>{props.SelectedMovie.description}</p>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    </div>
                    
                ) : null}              
        </div>
              
        
        
    )
}

export default MovieDetails;