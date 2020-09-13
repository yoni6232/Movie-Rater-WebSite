const TOKEN = "25b8202fc2131537da6705fa0cd6030e89ab55e8"

export class API{
    static updateMovie(mov_Id,body){
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_Id}/`,{
            method : 'PUT',
            headers : {
              'Content-Type' : 'application/json',
              'Authorization' : `Token ${TOKEN}`
            },
            body : JSON.stringify( body )
          }).then(resp => resp.json())
          .catch(err => console.log(err))
    }
    static createMovie(body){
      return fetch(`http://127.0.0.1:8000/api/movies/`,{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Token ${TOKEN}`
          },
          body : JSON.stringify( body )
        }).then(resp => resp.json())
        .catch(err => console.log(err))
  }
  static deleteMovie(mov_Id){
    return fetch(`http://127.0.0.1:8000/api/movies/${mov_Id}/`,{
        method : 'DELETE',
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Token ${TOKEN}`
        },
      }).catch(err => console.log(err))
}
static loginUser(body){
  return fetch(`http://127.0.0.1:8000/auth/`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify( body )
    }).then(resp => resp.json())
    .catch(err => console.log(err))
}
}