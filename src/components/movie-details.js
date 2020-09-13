import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props){

    const [highlighted,sethighlighted] = useState(-1);

    const highlightedRate = high => evt =>{
        sethighlighted(high);
    }

    const rateClick = rate =>evt =>{
        fetch(`http://127.0.0.1:8000/api/movies/${props.SelectedMovie.id}/rate_movie/`,{
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json',
              'Authorization' : 'Token 25b8202fc2131537da6705fa0cd6030e89ab55e8'
            },
            body : JSON.stringify( {stars : rate + 1} )
          }).then( () => gatDetails())
          .catch(err => console.log(err))
          
    }
    const gatDetails = () =>{
        fetch(`http://127.0.0.1:8000/api/movies/${props.SelectedMovie.id}/`,{
            method : 'GET',
            headers : {
              'Content-Type' : 'application/json',
              'Authorization' : 'Token 25b8202fc2131537da6705fa0cd6030e89ab55e8'
            },
          }).then(resp => resp.json())
          .then(resp => props.MovieUpdate(resp))
          .catch(err => console.log(err))
          
    }
    return (

        <React.Fragment >
                { props.SelectedMovie  ? (
                <div >
                    <h2>{props.SelectedMovie.title}</h2>
                    <p>{props.SelectedMovie.description}</p>
                    <FontAwesomeIcon icon={faStar} className={props.SelectedMovie.avg_ratings > 0 ?  'orange' : '' }/>
                    <FontAwesomeIcon icon={faStar} className={props.SelectedMovie.avg_ratings > 1 ?  'orange' : '' }/>
                    <FontAwesomeIcon icon={faStar} className={props.SelectedMovie.avg_ratings > 2 ?  'orange' : '' }/>
                    <FontAwesomeIcon icon={faStar} className={props.SelectedMovie.avg_ratings > 3 ?  'orange' : '' }/>
                    <FontAwesomeIcon icon={faStar} className={props.SelectedMovie.avg_ratings > 4 ?  'orange' : '' }/>
                    ({props.SelectedMovie.no_of_ratings})
                    <div className="rate-continer">
                        <h2 >Rate it</h2>
                        {[...Array(5)].map((e,i)=>{
                            return  <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i -1 ?  'purple' : '' }
                                onMouseEnter = {highlightedRate(i)}
                                onMouseLeave = {highlightedRate(-1)}
                                onClick = {rateClick(i)}

                            />
                            
                        })}
                    </div>
                </div>
                    
                ) : null}              
        </React.Fragment>
        
    )
}

export default MovieDetails;