// importing used files and options Header,Navbar,Landing,Login,Register,AddExpenses,Expenses,user
import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AddExpenses from "./Components/AddExpenses/AddExpenses";
import User from "./Components/User/User";
import Tips from "./Components/Tips/Tips";
import Navbar from './Components/nav';
import HomeLand from './Components/HomeLand/homeLand';
import About from './Components/AboutContact/About';
import Contact from './Components/AboutContact/Contact';
import Expenses from './Components/expenses(new)';
import Tobye from './Components/stuff/tobye'

// creat App Component
class App extends Component {
  state = { step: 1 };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // rendering step for showing our home page
  render() {
    const { step } = this.state;
    //Switch with cases
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          // App div
          <div className='App'>
            <Router>
              <div className='App'>
                <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="container">
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/AddExpenses" component={AddExpenses} />
                  <Route exact path="/user" component={User} />
                  <Route exact path="/Tips" component={Tips} />
                  <Route exact path="/homeLand" component={HomeLand} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path='/expenses' component={Expenses} />
                  <Route exact path='/list' component={Tobye} />
                </div>
              </div>
            </Router>
          </div>
        );
    }
  }
}

//
//
// Exporting App Component
export default App;
