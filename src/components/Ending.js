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

			let link = "https://www.youtube.com/watch?v=2Lz0VOltZKA&t=1057s#t=9m48s"
			return (
				<div class="Closer">
					<h1>Time to stop thinking about you should do and do it.</h1>
					<h1 style={{"color": "gold"}}>Time for liftoff. </h1>
					<p>
						Countdown is a simple timer and a visualization of the 5 Second Rule, popularized by speaker Mel Robbins.  
					</p>
					<p>
						The 5 Second Rule is a method to catalyze self-motivation by using a mental countdown of 5 seconds 
						to focus on a goal or task; during this window of time, the mind is theoretically prevented from 
						killing the determination and willpower needed to take action.
						For more on it, check it out <a target="_blank" href="https://www.youtube.com/watch?v=2Lz0VOltZKA&t=1057s#t=9m48s">
						here</a>.
					</p>
					<p>
						I was also inspired by the short meditation tool, <a target="_blank" href= "http://www.pixelthoughts.co/">Pixel Thoughts</a>. 
						Instead of being centered around the idea of releasing a thought and actively forgetting it, I wanted the user to be reminded 
						of the task at hand and keep it in the forefront of their mind. I wanted this to be represented by featuring the task from the 
						input field to be included in the countdown itself.  
					</p>
					<p>
						Lastly, I wanted the user to visually explore the idea of procrastination. You know how when people count down and 
						instead of the straight 5-4-3-2-1, they delay it by saying 5-4-3-2-1.75-1.5-1.25...etc? I wanted to represent this same delay
						by having the countdown have repeated numbers (so really the countdown is actually 15 seconds instead of 5).
					</p>
					
					<button onClick={this.reset} >Reset</button>
				</div>
			)
		}

	}

}

export default Ending;