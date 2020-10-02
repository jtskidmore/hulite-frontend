import React, { Component, Fragment } from 'react';

export default class Card extends React.Component {


    render() {
        return (
            <div>
            <div className="outer-div-card">
                <div className="front-card">
                    <img src={this.props.movie.posterUrl} className="poster" />
                    <div className="gradient">
                </div>
                </div>
                <div className="movie-details">
                    <h3>{this.props.movie.title}</h3>
                    <h5>{this.props.movie.dateAired}</h5>
                    <p>{this.props.movie.description}</p>
                </div>
                
            </div>
            <div>
            {this.props.movie.favorited ? (<button class="add-btn fa fa-minus" onClick={() => this.props.deleteMovie(this.props.movie, false)}></button>) : (<button class="add-btn fa fa-plus" onClick={() => this.props.addMovie(this.props.movie, true)} ></button>)}
            </div>
            </div>
        )
    }
}