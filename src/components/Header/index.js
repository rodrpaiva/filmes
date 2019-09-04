import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import Routes from '../../routes';




class Header extends Component {
  render() {
    let username;
    let senha;
    let auth = false;
    return (

      <div className="header">
        <Link to="/">
        Filmaria
        </Link>
        
        <h4  className="logOut">
          Log Out
        </h4>
      </div>
    );
  }
}

export default Header;