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
		super(props)
		this.state = {
			colors: 'home',
			dropdown: false
		}
		this.hideMenuClick = this.hideMenuClick.bind(this)
		this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
	}

	componentDidUpdate() {
		!this.state.dropdown &&
			window.innerWidth < 768 &&
			document.getElementById('myNavbar').classList.remove('in')
	}

	setColors(x) {
		this.setState({ colors: x, dropdown: false })
		window.scrollTo(0, 0)
	}

	hideMenuClick() {
		window.innerWidth < 768 && this.state.dropdown && this.setState({ dropdown: false })
	}

	toggleMobileMenu() {
		this.state.dropdown ? this.setState({ dropdown: false }) : this.setState({ dropdown: true })
	}

	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<MainNav
							navClass="affix"
							color={this.state.colors}
							setColors={x => this.setColors(x)}
							toggleMobileMenu={this.toggleMobileMenu}
						/>
					</header>
					<main onClick={this.hideMenuClick}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/oferta" component={Offer} />
							<Route exact path="/portfolio" component={Portfolio} />
							<Route exact path="/kontakt" component={Contact} />
							<Route
								path="/portfolio/:user"
								render={props => <Elements {...props} colors={x => this.setColors(x)} />}
							/>
							}
						</Switch>
					</main>
					<MainFooter color={this.state.colors} />
				</div>
			</Router>
		)
	}
}

export default App
