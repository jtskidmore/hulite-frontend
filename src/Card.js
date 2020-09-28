import React, { Component, Fragment } from 'react';

export default class Card extends React.Component {


    render() {
        return (

            <div className="outer-div-card">
                
                    <img src={this.props.movie.posterUrl} className="poster" />
                    <div className="gradient">

                    </div>
                    <div className="movie-details">
                        <h3>{this.props.movie.title}</h3>
                        <h5>{this.props.movie.dateAired}</h5>
                        <p>{this.props.movie.description}</p>
                    </div>
                
            </div>
        )
    }
}