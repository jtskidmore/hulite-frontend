import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import TvShows from './TvShows'
import Movies from './Movies'
import MyStuff from './MyStuff'
import Navbar from './Navbar'

const URL = "http://localhost:3000/movies"

export default class App extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch(URL).then(res => res.json()).then(data => this.setState({ movies: data }))
  }

  render() {
    let allMoviesAndTvShows = this.state.movies
    let tvShows = this.state.movies.filter(movie => movie.isMovie === false)
    let movies = this.state.movies.filter(movie => movie.isMovie)
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={() => (
            <Home  movies={allMoviesAndTvShows} />
          )} />
          <Route exact path="/tvshows" render={() => (
            <TvShows  movies={tvShows} />
          )} />
          <Route exact path="/movies" render={() => (
            <Movies  movies={movies} />
          )} />
          <Route exact path="/mystuff" render={() => (
            <MyStuff  movies={movies} />
          )} />
        </div>
      </Router>
    );
  }
}



//<Login />

//<Sign Up />

//<Home /> 
  //<Navbar />
  //<Carousel Container />
      //<Carousel />
          //<Card />

//<TV Show />
    //<Navbar />
    //<Carousel Container />
        //<Carousel />
            //<Card />

//<Movies />
    //<Navbar />
    //<Carousel Container />
        //<Carousel /> 
            //<Card />

//<My Stuff />
    //<Card Container />
        //<Cards />

//<Account />

