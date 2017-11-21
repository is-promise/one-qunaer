import React, { Component } from "react";
import  Swiper  from "swiper";
import "./style.css";


export default class Slider extends Component {
	
	render () {
		return (		
		  <div className="swiper-box" ref={(event) => (this.swiper = event)}>
		    <div className="swiper-wrapper">
		      <div className="swiper-slide">
		      	   <img className="swiperImg" alt="1" src="//dimg04.c-ctrip.com/images/700c0m000000dqj376612_640_128_25.jpg"/>
		      </div>
		      <div className="swiper-slide">
		   		   <img className="swiperImg" alt="1" src="//dimg04.c-ctrip.com/images/700g0m000000domwuDD31_640_128_25.jpg"/>
		      </div>
		      <div className="swiper-slide">
		   		   <img className="swiperImg" alt="1" src="//dimg04.c-ctrip.com/images/700h0m000000dlvb22B6C_640_128_25.jpg"/>
		      </div>
		      <div className="swiper-slide">
		      	   <img className="swiperImg" alt="1" src="//dimg04.c-ctrip.com/images/700q0m000000dir1dD605_640_128_25.jpg"/>
		      </div>
		      <div className="swiper-slide">
		      		<img className="swiperImg"  alt="1" src="//dimg04.c-ctrip.com/images/700j0d0000006vsun890D_640_128_25.jpg"/>
		      </div>
		      <div className="swiper-slide">
		      		<img className="swiperImg" alt="1" src="//dimg04.c-ctrip.com/images/700g0l000000dar6mB9CE_640_128_25.jpg"/>
		      </div>		     
		    </div>
		    <div className="swiper-pagination" ref={(event) => (this.swiperpagination = event)}></div>		
		    
		  </div>
		)
	}
	
	componentDidMount() {
		 new Swiper(this.swiper,{		  
		   autoplay: {
		    disableOnInteraction: false,
		   	 },	
		   	slidesPerView: 1,
	      	spaceBetween: 30,
	     	loop: true,
	      	pagination: {
	        	el: this.swiperpagination,
	        	clickable: true,
		  	}	 		      
	    })
	}
 }
