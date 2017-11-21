import React, { Component } from 'react';
import "./style.css"
import { connect } from 'react-redux';

 class Nav extends Component {
	
  render() {
  	
  	const list = this.props.list.map((item, index) => {
			return (
				<li className="nav-footer-li" key={item.id}>
					{item.title}
				</li>
				)
		})
  	
  	return ( 
  		<div className="nav">
			<ul className="f-nav">
				<li className="f-nav-li f-nav-li1">
					<p className="nav-title">酒店</p>
					<p className="iconfont icon-jiudian"></p>
				</li>
				<li className="f-nav-li">
					<p className="nav-list1">海外酒店</p>
					<p className="nav-list2">特价酒店</p>
				</li>
				<li className="f-nav-li">
					<p className="nav-list1">团购</p>
					<p className="nav-list2">名宿&客栈</p>
				</li>
			</ul>
			
			<ul className="f-nav2">
				<li className="f-nav-li f-nav-li1">
					<p className="nav-title">机票</p>
					<p className="iconfont icon-feiji"></p>
				</li>
				<li className="f-nav-li">
					<p className="nav-list1">火车票*抢票</p>
					<p className="nav-list2">特价机票</p>
				</li>
				<li className="f-nav-li">
					<p className="nav-list1">汽车票*船票</p>
					<p className="nav-list2">专车*租车</p>
				</li>
			</ul>
			
			<ul className="f-nav3">
				<li className="f-nav-li f-nav-li1">
					<p className="nav-title">旅游</p>
					<p className="iconfont icon-lvyou"></p>
				</li>
				<li className="f-nav-li">
					<p className="nav-list1">目的地攻略</p>
					<p className="nav-list2">周边游</p>
				</li>
				<li className="f-nav-li">
					<p className="nav-list1">游轮旅行</p>
					<p className="nav-list2">定制旅行</p>
				</li>
			</ul>
			
			<ol className="f-nav-footer">
				{list}
			</ol>
		</div>
  	)
  }
}  
	const mapStateToProps = (state) => ({
		list: state.navList.navList
	})

export default connect(mapStateToProps)(Nav);
  	



