import React, { Component } from "react";
import Header from "./component/header/view";
import Silder from "./component/swiper/view";
import TopocList from "./component/topicList/view";
import Nav from "./component/nav/view";
import Canvas from "./component/canvas/canvas"

class home extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Silder/>
				<Nav/>
				<TopocList/>
				<Canvas/>
			</div>
		)		
	}
	
}
export default home;