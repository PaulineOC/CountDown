
import React, { Component } from 'react';

class Columns extends Component{
	constructor(props){
		super(props);
		this.state={
			textColor: this.props.color}
	}

	componentDidUpdate(){
		
	}

	render(){
		return(
			<div className ="Columns" style={
				{
					"color": this.props.color,
					"width:": this.props.width,
					"float": "left",
					"font-size": (10.0 / this.props.text.length)+".5vw"
				}

			}>
			{this.props.text}</div>
		)
	}
}

export default Columns;
