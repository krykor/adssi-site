import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { Home } from './components/home/home';



const Oferta = () => (
  <div>
    Oferta
  </div>
)

const Portfolio = () => (
  <div>
    Code
  </div>
)

const Kontakt = () => (
  <div>
    Contact
  </div>
)

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/oferta">
        <button>Oferta</button>
      </Link>
      <Link to="/portfolio">
        <button>Portfolio</button>
      </Link>
      <Link to="/kontakt">
        <button>kontakt</button>
      </Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu/>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/oferta" component={Oferta} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/kontakt" component={Kontakt} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
