import React from 'react';
import CardContainer from './CardContainer'

const URL = "http://localhost:3000/movies"
const MYSTUFF_URL = "http://localhost:3000/user_movies"



export default class Home extends React.Component {

    state = {
        movies: []
    }

    componentDidMount() {
        

        this.fetchMovies()
        // this.fetchUserMovies()
    }

    makeUserMoviesFavorites = (arrayOfIds, ids) => {
        let movies = [...this.state.movies]
        arrayOfIds.forEach((id) => {
           movies = movies.map(m => {
                const newMovie = { ...m }
                if (id === newMovie.id) {
                    newMovie.favorited = true
                }
                return newMovie
            })
        })
        
        this.props.getMovies(movies, ids)
    }


    fetchUserMovies = () => {
        if (localStorage.getItem("token")) {
            fetch(MYSTUFF_URL, {
                method: "GET",
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("token")}`
                }
            }).then(res => res.json()).then(data => {
                
                    this.makeUserMoviesFavorites(data.map(m => m.movie_id), data)
            
                //  MAKE FUNCTION TO CHANGE MOVIES IN RESPONSE TO FAVORITED this.setState({ movies: data })
            }
            )
        }
    }

    fetchMovies = () => {
      
        if (localStorage.getItem("token")) {
            fetch(URL, {
                method: "GET",
                headers: {
                    'Authorization': `JWT ${localStorage.getItem("token")}`
                }
            }).then(res => res.json()).then(data => {
                this.setState({ movies: data })
                setTimeout(this.fetchUserMovies(), 2000)
                // this.props.getMovies(data)
               
            })
        }
    }





    render() {
        let movies = []
        if (this.state.movies.length > 0) {
            movies = this.state.movies
        }
        return (
            <div>
                <h1>This is the home page</h1>
                <CardContainer addMovie={this.props.addMovieToMyStuffState} deleteMovie={this.props.deleteMovieFromMyStuff} url={this.props.match.url} movies={movies} />
            </div>
        )
    }
}