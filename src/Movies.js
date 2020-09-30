import React, { Component } from 'react';
import CardContainer from './CardContainer'
import {Route} from 'react-router-dom';
import MovieShow from './MovieShow';

const URL = "http://localhost:3000/movies"

export default class Movies extends React.Component {

    state = {
        movies: []
      }

    componentDidMount() {
        this.fetchMovies()
      }
    
      fetchMovies = () => {
        console.log(localStorage.getItem("token"))
        if (localStorage.getItem("token")) {
          fetch(URL, { 
            method: "GET",
            headers: {
              'Authorization': `JWT ${localStorage.getItem("token")}`
            }
           }).then(res => res.json()).then(data => {
            this.setState({ movies: data })
            console.log(data)
           }
          
           )} 
      }


    render () {
        let allMoviesAndTvShows = []
        let tvShows = []
        let movies = []
        if (this.state.movies.length > 0) {
        allMoviesAndTvShows = this.state.movies
        tvShows = this.state.movies.filter(movie => movie.isMovie === false)
        movies = this.state.movies.filter(movie => movie.isMovie)
        }
        return (
            
            <div>
                <h1>This is the moive page</h1>
                <CardContainer url={this.props.match.url} movies={movies}/>
            </div>
        )
    }
}



