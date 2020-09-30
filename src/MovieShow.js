import React from 'react';
import { Fragment } from 'react';


const MovieShow = ({ match, movies }) => {
    console.log(movies)
    let movie = movies.filter(movie => movie.id === parseInt(match.params.showId))[0]
    
    return (

        <div>
            {movies.length === 0 ? "" :
                <div>
                    <h1>{movie.title}</h1>
                    <img src={movie.posterUrl}></img>
                    <p>{movie.description}</p>
                    <h5>Release Year: {movie.dateAired}</h5>
                    <div className="trailer-container">
                        <iframe width="560" height="315"
                            src={`https://www.youtube.com/embed/${movie.trailerUrl.slice(17)}`}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            }
        </div>
    );
}

export default MovieShow;