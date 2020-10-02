import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from './Card';
import Carousel from './Carousel';
import {Link} from 'react-router-dom';


export default class CardContainer extends React.Component {



    render() {
        const action = this.props.movies.filter(movie => movie.genre === "Action")
        const romance = this.props.movies.filter(movie => movie.genre === "romance")
        const horror = this.props.movies.filter(movie => movie.genre === "horror")
        const documentary = this.props.movies.filter(movie => movie.genre === "documentary")
        const animated = this.props.movies.filter(movie => movie.genre === "Animated")
        const comedy = this.props.movies.filter(movie => movie.genre === "comedy")
        const drama = this.props.movies.filter(movie => movie.genre === "Drama")
        // const fantasy = this.props.movies.filter(movie => movie.genre === "fantasy")
        const scifi = this.props.movies.filter(movie => movie.genre === "Sci-Fi")
        const family = this.props.movies.filter(movie => movie.genre === "Family")
        const mystery = this.props.movies.filter(movie => movie.genre === "Mystery")
        const anime = this.props.movies.filter(movie => movie.genre === "Anime")


        return (
            <div className="carousel-container">
                <h1 className='genre-title'>Action</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={action}/>
                <h1 className='genre-title'>Romance</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={romance}/>
                <h1 className='genre-title'>Horror</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={horror}/>
                <h1 className='genre-title'>Documentary</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={documentary}/>
                <h1 className='genre-title'>Animated</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={animated}/>
                <h1 className='genre-title'>Comedy</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={comedy}/>
                <h1 className='genre-title'>Drama</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={drama}/>
                {/* <h1 className='genre-title'>Fantasy</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={fantasy}/> */}
                <h1 className='genre-title'>Sci-fi</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={scifi}/>
                <h1 className='genre-title'>Family</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={family}/>
                <h1 className='genre-title'>Mystery</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={mystery}/>
                <h1 className='genre-title'>Anime</h1>
                <Carousel deleteMovie={this.props.deleteMovie} addMovie={this.props.addMovie} url={this.props.url} movies={anime}/>
            </div>
        );
    }



}



