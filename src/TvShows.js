import React, { Component } from 'react';
import CardContainer from './CardContainer';
import {Route} from 'react-router-dom';
import MovieShow from './MovieShow';

export default class TvShows extends React.Component {





    render () {
        return (
            <div>
                <h1>This is the TV Shows page</h1>
                <CardContainer url={this.props.match.url} movies={this.props.movies}/>
            </div>
        )
    }
}