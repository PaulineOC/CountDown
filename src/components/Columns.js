
import React, { Component } from 'react';

class Columns extends Component{
	constructor(props){
		super(props);
		this.state={
			textColor: "blue"
		}
	}

	render(){
		return(
			<div className ="Columns" style={{"color": this.state.textColor}}>{this.props.text}</div>


		)
		



	}







}

export default Columns;
