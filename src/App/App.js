import React, { Component } from 'react';
import {Router, Route , hashHistory} from "react-router";
import home from "../pages/home/home.js";
import { Provider } from 'react-redux';
import store from './store';

import "./app.css";

class App extends Component {
  render() {
    return ( 
  	<Provider store={store}>
	      <Router history={ hashHistory }>
	      		<Route path="/" component={home}></Route>	      					      		
	      </Router>     
    </Provider> 
    )
  }
}

export default App;
 