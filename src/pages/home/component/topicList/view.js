import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { connect } from 'react-redux';
import { getIndexAction } from './actionCreator';
import { getNavAction } from '../nav/actionCreator';
import IScroll from "iscroll";
import "./iscroll.css";

 class Slider extends Component {
	
  render() {
  	const list = this.props.list.map((item, index) => {
			return (
				<li className="listLi" key={item.id}>
					<p ref={(a)=>{this.b=a}} className={item.icon}></p>
					<p>{item.titel}</p>
				</li>
			)
		})
  	return (   
	  	<div>	  		
			<div className="wrapper" ref={(event) => (this.wrapper=event)}>
				<div className="scroller">
					<ul className="listUl">{list}</ul>
				</div>
			</div>		
		</div>
  	)
  }  
  
	componentDidMount() {		
		this.getIndexInfo();
		setTimeout((myScroll)=>{
				   new IScroll(this.wrapper, { scrollY: true,mouseWheel: true });
			},1)
	} 
	conmponentDidUpdata () {
		
	}
	getIndexInfo() {
		axios.get('/api/home.json')
			.then(this.props.handleGetInfoSucc.bind(this));
	}
}
	const mapStateToProps = (state) => ({
		list: state.list.list
	})

	const mapDispatchToProps = (dispatch) => ({
		handleGetInfoSucc: (response) => {				
			const list = response.data.data.list;	
			const navList = response.data.data.travelList;
			dispatch(getIndexAction(list));
			dispatch(getNavAction(navList));
		}
	})
	
export default connect(mapStateToProps, mapDispatchToProps)(Slider);

