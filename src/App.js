import React, { Component } from 'react';
import './style.css';
import Routes from './routes';



class App extends Component {
  constructor(props){
    super(props);

  }


  render() {
    return (

      <div className="app">
       
        {Routes(false)}
          
          }
      </div>
    );
  }
}

export default App;