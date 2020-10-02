import React, { Component } from 'react';
import CardContainer from './CardContainer'
import Carousel from './Carousel'
export default class MyStuff extends React.Component {





    render () {

        let movies = this.props.movies.filter(movie => movie.favorited)
        
       

        
        
        console.log(this.props.movies)
        return (
            <div>
                <h1>This is the My Stuff page</h1>
                <div className="mystuff-fill-top"></div>
                {/* {movies.length > 0 ? <CardContainer addMovie={this.props.addMovieToMyStuffState} deleteMovie={this.props.deleteMovieFromMyStuff} url={this.props.match.url} movies={movies}/> : <h1></h1>} */}
                <Carousel deleteMovie={this.props.deleteMovieFromMyStuff} addMovie={this.props.addMovieToMyStuffState} url={this.props.match.url} movies={movies} />  
                <div className="mystuff-fill-bottom"></div>    
               
            </div>
        )
    }
}