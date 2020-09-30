import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from './Card';
import Carousel from './Carousel';
import {Link} from 'react-router-dom';


export default class CardContainer extends React.Component {



    render() {
        const action = this.props.movies.filter(movie => movie.genre === "adventure")
        const romance = this.props.movies.filter(movie => movie.genre === "romance")
        const horror = this.props.movies.filter(movie => movie.genre === "horror")
        const documentary = this.props.movies.filter(movie => movie.genre === "documentary")
        const animated = this.props.movies.filter(movie => movie.genre === "animated")
        const comedy = this.props.movies.filter(movie => movie.genre === "comedy")
        const drama = this.props.movies.filter(movie => movie.genre === "drama")
        const fantasy = this.props.movies.filter(movie => movie.genre === "fantasy")
        const scifi = this.props.movies.filter(movie => movie.genre === "Sci-Fi")
        const family = this.props.movies.filter(movie => movie.genre === "family")
        const mystery = this.props.movies.filter(movie => movie.genre === "mystery")
        const anime = this.props.movies.filter(movie => movie.genre === "anime")


        return (
            <div className="carousel-container">
                <Carousel url={this.props.url} movies={action}/>
                <Carousel url={this.props.url} movies={romance}/>
                <Carousel url={this.props.url} movies={horror}/>
                <Carousel url={this.props.url} movies={documentary}/>
                <Carousel url={this.props.url} movies={animated}/>
                <Carousel url={this.props.url} movies={comedy}/>
                <Carousel url={this.props.url} movies={drama}/>
                <Carousel url={this.props.url} movies={fantasy}/>
                <Carousel url={this.props.url} movies={scifi}/>
                <Carousel url={this.props.url} movies={family}/>
                <Carousel url={this.props.url} movies={mystery}/>
                <Carousel url={this.props.url} movies={anime}/>
            </div>
        );
    }



}



