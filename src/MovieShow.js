import React from 'react';
import { Fragment } from 'react';
import './MovieShow.css';
import Carousel from './Carousel'

const MovieShow = ({ match, movies, addToMyStuff, deleteFromMyStuff }) => {

    let movie = movies.filter(movie => movie.id === parseInt(match.params.showId))[0]
    //The three variables below help render the recommended list of movies
    const moviesFilteredbyisMovie = movies.filter(m => m.isMovie === movie.isMovie) //filter movies by isMovie attribute
    const removedCloneFromMovies = moviesFilteredbyisMovie.filter(m => m.id !== movie.id) //remove currently viewed show from recommended list
    const recommMovies = removedCloneFromMovies.filter(m => m.genre === movie.genre) // show movies related to the current movie genre

    return (

        <div className="MovieShowCanvas">
            {movies.length === 0 ? "" :
                <div>
                    <h1>{movie.title}</h1>
                    <div className="trailer-container">
                        <iframe
                            width="1000"
                            height="630"
                            src={`https://www.youtube.com/embed/${movie.trailerUrl.slice(17)}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen >
                        </iframe>
                    </div>
                    <h3>Release Year: {movie.dateAired}</h3>
                    <div className='summary'>
                        <p>{movie.description}</p>
                    </div>
                    <div className='poster-img'>
                        <img src={movie.posterUrl} alt={movie.title} width="300" height="400"></img>
                        {/* <button onClick={() => addToMyStuff(movie)}>Add to My Stuff</button> */}
                    </div>
                    <div><h3>Recommended</h3></div>
        
                    <div className='recommended'>
                        <Carousel deleteMovie={deleteFromMyStuff} addMovie={addToMyStuff} url={match.url} movies={recommMovies} />
                    </div>
                   
                </div>
            }
        </div>

    );
}

export default MovieShow;