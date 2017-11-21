import React, { Component } from 'react';
import {Router, Route , hashHistory} from "react-router";
import index from "../pages/home/index";
import { Provider } from 'react-redux';
import store from './store';
import "./app.css";
import "./swiper.css"
class App extends Component {
  render() {
    return ( 
		   	
	  	<Provider store={store}>
		      <Router history={ hashHistory }>
		      		<Route path="/" component={index}></Route>	      					      		
		      </Router>     
	    </Provider>
	 
    )
  }
}

export default App;
 