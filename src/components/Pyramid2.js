import React, { Component } from 'react'
import blocks from './Blocks.js';


class Pyramid2 extends Component{

	constructor(props) {
		super(props);
        this.state= {
        	allBlocks: [],
        	filteredCols: [],
        	firstCols: [],
        	index: -1,
        	firstCol: "blue",
        	secondCol: "yellow",
        	stopBlinking: true,
        	universalTimer: -1
        }


         this.timer=this.timer.bind(this);



    }

    // componentDidUpdate(){
    // 	console.log("component did update O_O");
    // }

    componentWillMount(){
    	console.log("component will mount");
    	this.setState({allBlocks: this.test()});
    }

    componentDidMount(){
    	console.log("component did mount - triggering clock" );

    	//Filter and set state
    	this.state.filteredCols = this.state.allBlocks.map(row => 
    		row.props.children).reduce((acc, ele)=> 
    		acc.concat(ele),[]);
		//console.log(this.state.filteredCols);

    	//Start blink function
    	let count=0;
    	console.log("end of component Did mount");

    	this.wrapper();
    	//this.timerID = setInterval(() => this.tick(), 1000);
    }

 

    timer(){
    	let newNum = this.state.index;
    	newNum++;

    	console.log("here is new num "+ newNum);

    	//this.state.filteredCols.length
    	if(newNum<3){


    		//Change color initially
    	 	console.log("key is: "+ this.state.filteredCols[newNum].key);
    	 	this.state.filteredCols[newNum]= <p>"new comp"</p>;
    	 	//console.log(this.state.filteredCols[newNum]);
    	 	//this.render();


    	 	setTimeout(()=>console.log("CHANGE"),500);

    	 	
    	 	this.setState({index: newNum});


    	 	console.log(this.state.filteredCols);


    	}
    	else{
    		clearInterval(this.state.universalTimer);
    		console.log("should be blank");
    		this.state.setBlinking=false;


    	}
    }

   wrapper(){
   		let timer;
   		//OPTION 1: this.state.index gets changed weirdly
   		if(this.state.stopBlinking){
   			timer = setInterval(this.timer,2000);
   		}
   		//clearInterval(timer);
   		//timer=0;

    	//OPTION 2: This is going through each of the items and then running each setTimeOut
    	// --> however it essentially starts them all at once so they all fire at the same time
    	// for(let i=0;i<this.state.filteredCols.length;i++){
    	// 	setTimeout(this.timer, 3000);
    	// }
   }

   		//this.state.filteredCols[i]),



    blink(col){
		//Turns new color
		col.props.style= {color: "white"};
		//Turns old color

	//Set new color:

    }
	

    tick() {
    	//iterates through all of it? 
	    this.setState({
	      date: new Date()
	    });
	    console.log(this.state.date);
  	}

      
    test () {
		let returnMe = [];
		for(let i=0;i<5;i++){
			let cols = [];
			for(let j=0;j<i+1;j++){
				let col = <p key={j+i} style={{color: this.state.firstCol}}>{j+i}</p>
				cols.push(col);
			}
			let row = <div key={i} className ="Row">{cols}</div>


			returnMe.push(row);
		}
		return returnMe;
	}

	render(){
		return(
		<div className ="pyramid2">
			{this.state.allBlocks}
          </div>
         )
	}
  

}

export default Pyramid2;
