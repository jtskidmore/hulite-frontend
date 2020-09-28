import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from './Card'
import Carousel from './Carousel';


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
                <Carousel movies={action}/>
                <Carousel movies={romance}/>
                <Carousel movies={horror}/>
                <Carousel movies={documentary}/>
                <Carousel movies={animated}/>
                <Carousel movies={comedy}/>
                <Carousel movies={drama}/>
                <Carousel movies={fantasy}/>
                <Carousel movies={scifi}/>
                <Carousel movies={family}/>
                <Carousel movies={mystery}/>
                <Carousel movies={anime}/>
            </div>
        );
    }



}



