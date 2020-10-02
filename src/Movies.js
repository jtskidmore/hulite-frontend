import React, { Component } from 'react';
import CardContainer from './CardContainer'
import {Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import MovieShow from './MovieShow';


const URL = "http://localhost:3000/movies"

export default class Movies extends React.Component {

    


    render () {
    let movies = this.props.movies.filter(movie => movie.isMovie)
        return (
            
            <div>
                <h1>This is the Movie Page</h1>
                <CardContainer addMovie={this.props.addMovieToMyStuffState} deleteMovie={this.props.deleteMovieFromMyStuff} url={this.props.match.url} movies={movies}/>
            </div>
        )
    }
}



