import React, { Component } from 'react';
import CardContainer from './CardContainer'

export default class MyStuff extends React.Component {





    render () {
        return (
            <div>
                <h1>This is the My Stuff page</h1>
               
                <CardContainer movies={this.props.movies}/>
            </div>
        )
    }
}