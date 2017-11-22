import React, { Component } from 'react';
import "./header.css"
import { Link } from 'react-router';

export default class Index extends Component {
	
  render() {
  	return ( 
  		<div>
			<div className="h-header">
				<Link to="/city">
					<div className="h-left">
						<span id="icon" className="h-sousuo iconfont icon-sousuo"></span>
						<span className="h-left-input">搜索:目的地/酒店/景点/航班号</span>
					</div>
				</Link>
				<div className="h-right">
					<p  className="iconfont icon-wodedangxuan"></p>
					<p>我的</p>
				</div>
			</div>
			
			
		</div>
  	)
  }
}  
  	



