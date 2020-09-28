import React, { Component } from 'react';
import CardContainer from './CardContainer';

export default class TvShows extends React.Component {





    render () {
        return (
            <div>
                <h1>This is the TV Shows page</h1>
                <CardContainer movies={this.props.movies}/>
            </div>
        )
    }
}