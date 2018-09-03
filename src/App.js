import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';



const Home = () => (
  <div>
    Home
  </div>
)

const About = () => (
  <div>
    <div class="bg-color-jasny">
				<div id="uslugi" class="container text-center">
					<div class="row">
						<div class="col-sm-4 text-left">
							<h2>Projekt jest cichym ambasadorem Twojej marki</h2>
							<hr class="line-blue"/>
							<p>Jesteśmy zespołem pełnym pasji, kreatywności i posiadającym narzędzia, odpowiadające potrzebom naszych Klientów. Uzupełniamy
								się umiejętnościami, dlatego nie ma dla nas rzeczy niemożliwych.</p>
							<p class="margin-text-servises">Ważne jest dla nas zrozumienie celów, planów oraz otoczenia. Słuchamy i wdrażamy skuteczne strategie, tworząc unikalne
								projekty.</p>
							<div class="text-center">
								<a href="portfolio.php">
									<button type="button" class="btn btn-primary">Więcej</button>
								</a>
							</div>
						</div>
						<div class="col-sm-7 col-sm-offset-1">
							<div class="row">
								<div id="test11" class="col-sm-6 servises">
									<i class="fa fa-users fa-4x text-primary sr1" aria-hidden="true"></i>
									<h3>Social media</h3>
									<p>kreujemy wizerunek zgodny z marką, angażujemy, monitorujemy i koordynujemy wszelkie działania</p>
								</div>
								<div class="col-sm-6 servises">
									<i class="fa fa-lightbulb-o fa-4x text-primary sr1" aria-hidden="true"></i>
									<h3>Kampanie reklamowe</h3>
									<p>opracowywanie strategii kampanii i jej optymalizacja to nieodłączny element marketingu</p>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6 servises">
									<i class="fa fa-camera fa-4x text-primary sr12" aria-hidden="true"></i>
									<h3>video & foto</h3>
									<p>fotografujemy, nagrywamy i edytujemy, by pokazać atuty Twojego produktu, usługi i całej marki</p>
								</div>
								<div class="col-sm-6 servises">
									<i class="fa fa-laptop fa-4x text-primary sr12" aria-hidden="true"></i>
									<h3>Strony www</h3>
									<p>zadbamy by Twoja strona internetowa była responsywna, intuicyjna i zatrzymywała klientów na dłużej</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  </div>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    info
  </div>
)

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/code">
        <button>code</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
      <Link to="/info">
        <button>info</button>
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
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/presence" component={info} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
