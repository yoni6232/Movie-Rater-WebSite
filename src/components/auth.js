import React , {useState , useEffect } from 'react'
import { API } from '../api-service'
import {useCookies} from 'react-cookie'

function Auth () {

    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const [token,setToken] = useCookies(['mr-token'])
    const [islogin,setlogins] = useState(true)

    useEffect(()=>{
      if(token['mr-token']) window.location.href= '/movies'
    },[token])


    const loginClick =() => {
        API.loginUser( {username,password})
        .then(resp => setToken('mr-token',resp.token))
        .catch(err => console.log(err))
    }

    const RegisterClick =() => {
        API.registerUser({username,password})
        .then(() => loginClick())
        .catch(err => console.log(err))
    }
    const isDisabled = username.length === 0 || password === 0

    return(
        <div className="App">
        <header className="App-header">
        {islogin ? <h1>Login</h1> : <h1>Register</h1>}
        </header>
           <div className="login-continer">
                <label htmlFor="username">User Name</label><br/>
                <input id="username" type="text" placeholder="username" value={username}
                    onChange = {evt => setusername(evt.target.value)}
                />
                <br/>
                <label htmlFor="password">Password</label><br/>
                <input id="password" type="password" placeholder="password" value={password}
                        onChange = {evt => setpassword(evt.target.value)}

                /><br/>       
                    {islogin ?  
                    <button onClick={loginClick} disabled={isDisabled}>Login</button>  :    
                    <button onClick={RegisterClick} disabled={isDisabled}>Register</button>   
                    }
                   
                    {islogin ?  
                    <p style={{'cursor': 'pointer'}} onClick={()=>setlogins(false)}> Dont have an account? Register here</p> :    
                    <p style={{'cursor': 'pointer'}} onClick={()=>setlogins(true)}> Alredy have an account? Login here</p>    
                    }
                   
                </div>
            </div>
    )
}

export default Auth