import React, { Component } from 'react';
import CardContainer from './CardContainer'

export default class Home extends React.Component {





    render () {
        return (
            <div>
                <h1>This is the home page</h1>
                <CardContainer url={this.props.match.url} movies={this.props.movies}/>
            </div>
        )
    }
}