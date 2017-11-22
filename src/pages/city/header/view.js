import React,{ Component } from "react"
import "./style.css";

export default class Header extends Component {
	render () {
		return (
			<div className="f-city">
				<div className="f-city-header">
					<span className="city-left iconfont icon-fanhui"></span>
					<span className="city-title">目的地列表</span>
				</div>
				<div className="f-city-nav">
					<div className="f-city-conter">  					
					<span className="f-sousuo iconfont icon-sousuo"></span>
					<input className="city-input" placeholder="北京/beijing/bj"/>
					</div>
				</div>
				
			</div>
		)
	}
}
