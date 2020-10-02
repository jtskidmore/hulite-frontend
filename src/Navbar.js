import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css';
import './components/icons/mainLogo.png';
// import './components/icons/';


const pic = require('./components/icons/mainLogo.png');
// const prof = require('./components/icons/');

class Navbar extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div >
        <ul className='body'>
          {/* <form>
            <input/>
            </form> */}
          <NavLink
            to="/home"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
          /* add styling to Navlink */
          // style={link}
          /* add prop for activeStyle */
          // activeStyle={{
          //   background: '#185227'
          // }}
          >
            <li className='home'> <img src={pic} alt="Hulite Logo" /> </li>
          </NavLink>
          <NavLink
            to="/movies"
            exact
          // style={link}
          // activeStyle={{
          //   background: '#185227'
          // }}
          >
            <li className='link'> Movies </li></NavLink>

          <NavLink
            to="/tvshows"
            exact
          // style={link}
          // activeStyle={{
          //   background: '#185227'
          // }}
          >
            <li className='link'> TV Shows </li></NavLink>

          <NavLink

            to="/mystuff"
            exact
          // style={link}
          // activeStyle={{
          //   background: '#185227'
          // }} 
          >
            <li className='link'> My Stuff </li> </NavLink>
          {/* <NavLink */}

          {/* to="/login"
          exact
          // style={link}
          // activeStyle={{
          //   background: '#185227'
          // }}  */}
          {/* >  */}
          
            <div class="dropdown">
            <li className='dropdown fa fa-user-circle fa-2x'>
              <div class="dropdown-content">
                <h4>User: {this.props.username}</h4>
                <h4>Email: {this.props.email}</h4>
                <h4 onClick={() => this.props.logout()}>Logout</h4> 
                <h4 onClick={() => this.props.deleteUser()}>Delete Account</h4>
              </div>
              </li>
            </div>
          
          {/* </NavLink> */}
        </ul>
      </div>
    )
  }
}

export default Navbar;

// onClick={() => this.props.logout()}