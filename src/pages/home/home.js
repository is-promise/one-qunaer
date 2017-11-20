import React, { Component } from "react";
import Header from "./header/view.js";
import Silder from "./slider/view.js";

class home extends Component {
	render(){
		return(
			<div>
				<Header/>
				<Silder/>
			</div>
		)		
	}
}
export default home;