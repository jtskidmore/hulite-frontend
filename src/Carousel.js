import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
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
                    visibleSlides={5}
                    step={5}
                    infinite={true}

                >
                    <div className="carousel">
                        
                        <div className="slider">
                            <Slider >
                                {this.props.movies.map((movie, index) => <Slide key={index} index={index}><Link key={index} to={`${this.props.url}/${movie.id}`}><Card addMovie={this.props.addMovie} deleteMovie={this.props.deleteMovie} key={movie.title} movie={movie} /></Link></Slide>)}
                            </Slider>
                        </div>
                        <div className="control-btn backbutton">
                        <ButtonBack className='arrow-buttons fa fa-angle-left'></ButtonBack>
                        </div>
                        <div className="control-btn nextbutton">
                        <ButtonNext className="arrow-buttons fa fa-angle-right"></ButtonNext>
                        </div>
                    </div>
                </CarouselProvider>
            </div>
        );
    }



}
