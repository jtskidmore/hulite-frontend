import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom';
import axios from 'axios'
import { createBrowserHistory } from "history";
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Start from './components/Start.js'
import TvShows from './TvShows'
import Movies from './Movies'
import MyStuff from './MyStuff'
import Navbar from './Navbar'
import MovieShow from './MovieShow'
import Login from './components/registration/Login.js'
import Signup from './components/registration/Signup.js'
import { PrivateRoute } from './PrivateRoute'

const USER_URL = "http://localhost:3000/api/v1/users"
const URL = "http://localhost:3000/movies"
const MYSTUFF_URL = "http://localhost:3000/user_movies"
const customHistory = createBrowserHistory();

export default class App extends React.Component {

  state = {
    movies: [],
    ids: [],
    username: "",
    email: ""
  }

  logout = () => {
    localStorage.clear()
    window.location.href = "/login"
  }

// at this time, we do not know how to access the User Id. 
// we pass in any number to the fetch url bc the delete route requires an :id parameter, 
// but we let the backend get the current user id


  deleteUser = () => {
    fetch(`${USER_URL}/1}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `JWT ${localStorage.getItem("token")}`
      }
    })
    this.logout()
  }

  setUserState = (username, email) => {
    this.setState({ username: username, email: email})
    console.log(username, email)
  }

  getMovies = (movies, ids) => {
    this.setState({ movies: movies, ids: ids })
  }

  addMovieToMyStuffState = (movie, favorite) => {
    const newMovies = this.state.movies.map(m => {
      const newMovie = { ...m }
      if (movie.id === newMovie.id) {
        newMovie.favorited = favorite
      }
      return newMovie
    })
    this.setState({ movies: newMovies })
    if (favorite === true) {
      fetch(MYSTUFF_URL,
        {
          method: "POST",
          headers: {
            'Authorization': `JWT ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            "movie_id": movie.id
          })
        })
        .then(resp => resp.json()).then(data => {console.log(data)
        this.setState({ ids: [...this.state.ids, data]})
        })
    }
  }

  deleteMovieFromMyStuff = (movie) => {
    this.addMovieToMyStuffState(movie, false)
    // const currentMovies = this.state.movies
    // this.setState({
    //   movies: currentMovies.filter(m => m.id !== movie.id)
    // })
    let id = movie.id
    fetch(`${MYSTUFF_URL}/${this.state.ids.filter(hash => hash.movie_id === id)[0].id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `JWT ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }
    })
  }

  addToMyStuff = (movie) => {
    // this.setState({ myStuff: [...this.state.myStuff, movie] });
    
  }


  render() {
    
    return (
      <Router history={customHistory}>
        <div className="App">
          <Navbar deleteUser={this.deleteUser} username={this.state.username} email={this.state.email} logout={this.logout}/> 
          <Route exact path='/start' render={props => (
            <Start {...props} />
          )} />
          <Route exact path='/login' render={props => (
            <Login {...props} getUserInfo={this.setUserState} />
          )} />
          <Route exact path='/signup' render={props => (
            <Signup {...props} getUserInfo={this.setUserState}/>
          )} />
          <PrivateRoute exact path="/home" deleteMovieFromMyStuff={this.deleteMovieFromMyStuff} addMovieToMyStuffState={this.addMovieToMyStuffState} getMovies={this.getMovies} component={Home} />     
          <PrivateRoute exact path="/home/:showId" movies={this.state.movies} addToMyStuff={this.addToMyStuff} component={MovieShow} />
          <PrivateRoute exact path="/tvshows" addMovieToMyStuffState={this.addMovieToMyStuffState} deleteMovieFromMyStuff={this.deleteMovieFromMyStuff} movies={this.state.movies} component={TvShows} />
          <PrivateRoute exact path="/tvshows/:showId" movies={this.state.movies} addToMyStuff={this.addToMyStuff} component={MovieShow}/>
          <PrivateRoute exact path="/movies" movies={this.state.movies} deleteMovieFromMyStuff={this.deleteMovieFromMyStuff} addMovieToMyStuffState={this.addMovieToMyStuffState} component={Movies} />
          <PrivateRoute exact path="/movies/:showId" movies={this.state.movies} addToMyStuff={this.addToMyStuff} deleteFromMyStuff={this.deleteMovieFromMyStuff} component={MovieShow}/>
          <PrivateRoute exact path="/mystuff"  deleteMovieFromMyStuff={this.deleteMovieFromMyStuff} addMovieToMyStuffState={this.addMovieToMyStuffState} movies={this.state.movies} component={MyStuff} />
          <PrivateRoute exact path="/mystuff/:showId" movies={this.state.movies} addToMyStuff={this.addToMyStuff} component={MovieShow}/>
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

// fetch('http://localhost:3000/api/v1/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',

    //   },
    //   body: JSON.stringify({
    //     user: {
    //       username: "MeytonWoods",
    //       password_digest: "Ilovehavemercy2020!",
    //       name: "Meyton Woods",
    //       email: "meytonwoods@gmail.com"
    //     }
    //   })
    // })
    //   .then(r => r.json())
    //   .then(console.log)