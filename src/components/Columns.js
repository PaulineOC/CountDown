
import React, { Component } from 'react';

class Columns extends Component{
	constructor(props){
		super(props);
		this.state={
			textColor: this.props.color}
	}

	componentDidUpdate(){
		console.log("Col component updated");
	}


	render(){
		return(
			<div className ="Columns" style={{"color": this.state.textColor}}>{this.props.text}</div>
		)
	}







}

export default Columns;
