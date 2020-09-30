import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from 'react-router-dom';
import Card from './Card'


export default class Carousel extends React.Component {



    render() {
        return (
            <div className="carousel-container">
            <CarouselProvider
                naturalSlideWidth={15}
                naturalSlideHeight={20}
                orientation="horizontal"
                totalSlides={this.props.movies.length}
                visibleSlides={4}
                step={4}
                infinite={true}
            >
                <Slider className="slider">
                    {this.props.movies.map((movie, index) => <Slide key={index} index={index}><Link key={index} to={`${this.props.url}/${movie.id}`}><Card key={movie.title} movie={movie}/></Link></Slide>)}
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            </div>
        );
    }



}
