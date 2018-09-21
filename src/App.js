import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './components/home/home'
import { Offer } from './components/offer/offer'
import { Portfolio } from './components/portfolio/portfolio'
import { Contact } from './components/contact/contact'
import { MainFooter } from './components/footer/main-footer'
import { MainNav } from './components/nav/main-nav'
import { Elements } from './components/portfolio/portfolio-element/element'

import './api/ourWorksData.json'
import './css/colors.css'
import './components/font-awesome/fontAwesome'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        colors: "home",
        dropdown: false
    }
    this.hideMenu = this.hideMenu.bind(this)
  }

  componentDidUpdate() {
    document.getElementById('myNavbar').classList.remove('in')
  }

  setColors(x) {
    this.setState({ colors: x})
    window.scrollTo(0,0)
  }

  hideMenu() {this.setState({ dropdown: true })}

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MainNav navClass="affix" color={this.state.colors} setColors={x => this.setColors(x)}/> 
          </header>
          <main onClick={this.hideMenu}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/oferta" component={Offer} />
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/kontakt" component={Contact} />
              <Route path="/portfolio/:user" render={(props) => <Elements {...props}  colors={x => this.setColors(x)}/>} />}
            </Switch>
          </main>
          <MainFooter color={this.state.colors}/>
        </div>
      </Router>
    );
  }
}

export default App;
