import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { connect } from 'react-redux';
import { getIndexAction } from './actionCreator';
import { getNavAction } from '../nav/actionCreator';

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
  				
		<ul className="listUl">{list}</ul>

  	)
  }  
  
	componentDidMount(){		
			this.getIndexInfo();		 				 											
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

