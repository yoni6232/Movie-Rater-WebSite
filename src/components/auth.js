import React , {useState, useContext, useEffect } from 'react'
import { API } from '../api-service'
import {TokenContext} from '../index'


function Auth () {

    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const {token,setToken} = useContext(TokenContext)

    useEffect(()=>{
       if(token) window.location.href= '/movies'
    },[token])


    const loginClick =() => {
        API.loginUser( {username,password})
        .then(resp => setToken(resp.token))
        .catch(err => console.log(err))
    }

    return(
           <div>
                <label htmlFor="username">User Name</label><br/>
                <input id="username" type="text" placeholder="username" value={username}
                    onChange = {evt => setusername(evt.target.value)}
                />
                <br/>
                <label htmlFor="password">Password</label><br/>
                <input id="password" type="password" placeholder="password" value={password}
                        onChange = {evt => setpassword(evt.target.value)}

                /><br/>       
                    <button onClick={loginClick}>Login</button>         
            </div>
    )
}

export default Auth