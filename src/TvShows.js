import React, { Component } from 'react';
import CardContainer from './CardContainer';
import {Route} from 'react-router-dom';
import MovieShow from './MovieShow';

export default class TvShows extends React.Component {





    render () {
        let tvshows = this.props.movies.filter(movie => movie.isMovie === false)
        return (
            <div>
                <h1>This is the TV Shows page</h1>
                <CardContainer addMovie={this.props.addMovieToMyStuffState} deleteMovie={this.props.deleteMovieFromMyStuff} url={this.props.match.url} movies={tvshows}/>
            </div>
        )
    }
}