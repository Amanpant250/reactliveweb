import React from 'react';
import logo from './logo.svg';
import './index.css'
import './App.css';
import '/home/aman/reactjs/practice5/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/home/aman/reactjs/practice5/node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
