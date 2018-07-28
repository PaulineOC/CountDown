
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
			<div className ="Columns" style={{"color": this.props.color}}>{this.props.text}</div>
		)
	}
}

export default Columns;
