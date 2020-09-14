import React, {useState, useEffect} from 'react'
import { API } from '../api-service'
import {useCookies} from 'react-cookie'

function MovieForm(props){

    const [title,setTitle]= useState('')
    const [description,setDescription]=useState()
    const [token] = useCookies(['mr-token'])

    useEffect( () => {
        setTitle(props.editdMovie.title) ;
        setDescription(props.editdMovie.description);
    }, [props.editdMovie])


    const UpdateClick = () =>{

        API.updateMovie(props.editdMovie.id, {title,description},token) 
        .then(resp => props.updatedMovie(resp))
        .catch(error =>console.log(error))
        
    }

    const CreateClick = () =>{

        API.createMovie({title,description},token) 
        .then(resp => props.MovieCreated(resp))
        .catch(error =>console.log(error))
        
    }

    const isDisabled = title.length === 0 || description === 0

    return(
    <React.Fragment >
        { props.editdMovie  ? (
            <div>
                <label htmlFor="title">Title</label><br/>
                <input id="title" type="text" placeholder="title" value={title}
                    onChange = {evt => setTitle(evt.target.value)}
                />
                <br/>
                <label htmlFor="description">Description</label><br/>
                <textarea id="description" type="text" placeholder="description" value={description}
                        onChange = {evt => setDescription(evt.target.value)}

                /><br/>
                {
                    props.editdMovie.id ? 
                    <button onClick={UpdateClick} disabled={isDisabled}>Update</button> :
                    <button onClick={CreateClick} disabled={isDisabled}>Create</button>


                }
            </div>
        ) : null }
    </React.Fragment>
    )
    
}
export default MovieForm;