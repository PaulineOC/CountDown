import React, { Component } from 'react'



class Ending extends Component{
	constructor(props){
		super(props);
		this.reset = this.reset.bind(this);
	}

	reset(){
		//this.props.startOver();
		window.location.reload();
	}

	render(){
		if(!this.props.canShow){
			return null;
		}
		else{
			return (
				<div class="Closer">
					<h3>
						Time to tackle it. 
					</h3>
					<p>Countdown is an experimental visualization of procrastination
					</p>
					<button onClick={this.reset} >Reset</button>
				</div>
			)
		}

	}

}

export default Ending;