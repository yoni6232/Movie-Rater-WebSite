
export class API{
    static updateMovie(mov_Id,body,token){
        return fetch(`http://192.168.56.1:8000/api/movies/${mov_Id}/`,{
            method : 'PUT',
            headers : {
              'Content-Type' : 'application/json',
              'Authorization' : `Token ${token['mr-token']}`
            },
            body : JSON.stringify( body )
          }).then(resp => resp.json())
          .catch(err => console.log(err))
    }
    static createMovie(body,token){
      return fetch(`http://192.168.56.1:8000/api/movies/`,{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Token ${token['mr-token']}`
          },
          body : JSON.stringify( body )
        }).then(resp => resp.json())
        .catch(err => console.log(err))
  }
  static deleteMovie(mov_Id,token){
    return fetch(`http://192.168.56.1:8000/api/movies/${mov_Id}/`,{
        method : 'DELETE',
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Token ${token['mr-token']}`
        },
      }).catch(err => console.log(err))
}
static loginUser(body){
  return fetch(`http://192.168.56.1:8000/auth/`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify( body )
    }).then(resp => resp.json())
    .catch(err => console.log(err))
}
static registerUser(body){
  return fetch(`http://192.168.56.1:8000/api/users/`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Token 25b8202fc2131537da6705fa0cd6030e89ab55e8`
      },
      body : JSON.stringify( body )
    }).then(resp => resp.json())
    .catch(err => console.log(err))
}
}