import React, { Component } from 'react';
require('../index.css');


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

			let link = "https://www.youtube.com/watch?v=2Lz0VOltZKA&t=1057s#t=9m48s"
			return (
				<div class="Closer">
					<h1>Time to stop thinking about what you should do and actually execute.</h1>
					<h1 style={{"color": "gold"}}>Time for lift off. </h1>
					<p>
						Countdown is a simple timer and a visualization of the 5 Second Rule, popularized by speaker Mel Robbins.  
					</p>
					<p>
						The 5 Second Rule is a method to catalyze self-motivation by using a mental countdown of 5 seconds 
						to focus on a goal or task; during this window of time, the mind is theoretically prevented from 
						killing the determination and willpower needed to take action.
						For more on it, check it out <a target="_blank" href="https://youtu.be/HSn-L9IXbOY?t=590">
						here</a>!
					</p>
					<p>
						Another part of this inspiration was the short meditation tool, <a target="_blank" href= "http://www.pixelthoughts.co/">Pixel Thoughts</a>. 
						Instead of being centered around the idea of releasing a thought and actively forgetting it, the user's inputted task is supposed to be kept in the forefront of their mind, 
						visualized by including it multiple times in the countdown itself.  
					</p>
					<p>
						Lastly, I wanted to explore the idea of procrastination. Similar to the delaying habit where people extend a countdown by decrementing in fractions (eg, 5-4-3-2-1.75-1.5-1.25...etc), this countdown is delayed by including featuring repeated numbers (so really the countdown is actually 15 seconds instead of 5). I chose to use repeating numbers instead of fractions to preserve the structure of the pyramid.
					</p>
					
					<button onClick={this.reset} >Reset</button>
				</div>
			)
		}

	}

}

export default Ending;