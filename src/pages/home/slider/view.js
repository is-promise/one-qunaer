import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { connect } from 'react-redux';
import { getIndexAction } from './actionCreator';

 class Slider extends Component {
	
  render() {
  	
  	const list = this.props.list.map((item, index) => {
			return (<li key={item.id}>{item.titel}</li>)							
		})
  	
  	return ( 
  				
		<ul>
			{list}
		</ul>

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
			dispatch(getIndexAction(list));
		}
	})
	
export default connect(mapStateToProps, mapDispatchToProps)(Slider);

