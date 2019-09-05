import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import Routes from '../../routes';




class Header extends Component {
  constructor(props){
    super(props);

    this.logOut = this.logOut.bind(this); 
   }



  logOut(){

    return(<div>{Routes(false)}</div>);
    
  }
  render() {
    let username;
    let senha;
    let auth = false;
    return (

      <div className="header">
        <Link to="/">
        Filmaria
        </Link>
        <img alt="logOut" onClick={this.logOut} src={require("D:/Google Drive/Intcode/filmes/src/assets/logout.PNG")} className="img"/>
        <h4 onClick={this.logOut} className="logOut">
          Log Out
        </h4>
        
      </div>
    );
  }
}

export default Header;

export const criarBotaoLogOut = () => {
  
}