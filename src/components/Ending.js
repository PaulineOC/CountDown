import React, { Component } from 'react'



class Ending extends Component{
	constructor(props){
		super(props);
		this.reset = this.reset.bind(this);
	}

	reset(){
		this.props.startOver();
	}

	render(){
		if(!this.props.canShow){
			return null;
		}
		else{
			return (
				<div class="Closer">
					<p>Countdown is an experimental visualization of procrastination
					</p>
				</div>
			)
		}

	}

}

export default Ending;