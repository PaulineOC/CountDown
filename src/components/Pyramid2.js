import React, { Component } from 'react'
import Column from './Columns.js';


class Pyramid2 extends Component{

	constructor(props) {
		super(props);
        this.state= {
        	allNums: ["Four","Three","Two","One"],
        	allBlocks: [],
        	filteredCols: [],
        	firstCols: [],
        	index: -1,
        	firstCol: "blue",
        	secondCol: "yellow",
        	startBlinking: true,
        	universalTimer: -1
        }
        this.createPyramid=this.createPyramid.bind(this);

    }

    //Create Pyramid

    createPyramid () {
    	let finalPyramid = [];
    	let {allNums}=this.state;

		//Rows
		for(let i=0;i<allNums.length;i++){
			let rowString = "RowNum: " +i;

			let allCols = [];
			//Cols
			for(let j=0;j<i+1;j++){
				let colString = "ColNum: "+j;
				let column = <Column className ="Column" key={rowString+colString} text={allNums[i]}/>
				allCols.push(column);
			}

			//Row component
			let rowComp = <div className="Row" key={"Row "+(i+1)}>{allCols}</div>
			finalPyramid.push(rowComp);
		}

		return finalPyramid;
	}

    componentWillMount(){
    	console.log("component will mount");
    	this.setState({allBlocks: this.createPyramid()});
    }

    componentDidMount(){
    	console.log("component did mount - here is the current state" );
    	console.log(this.state.allBlocks);

    	this.wrapper();


    	//this.state.filteredCols = this.state.allBlocks.map(row => 
    		//row.props.children).reduce((acc, ele)=> 
    		//acc.concat(ele),[]);
		//console.log(this.state.filteredCols);

    	//Start blink function
    	let count=0;
    	console.log("end of component Did mount");

    	//this.wrapper();
    	//this.timerID = setInterval(() => this.tick(), 1000);
    }

 

    timer(){
    	let newNum = this.state.index;
    	newNum++;

    	
    	console.log("New Num: "+ newNum);
    	
    	if(newNum<this.state.filteredCols.length){


    		//Change color initially
    	 	console.log("key is: "+ this.state.filteredCols[newNum].key);
    	 	this.state.filteredCols[newNum]= <p>"new comp"</p>;
    	 	this.render();
    	 	console.log("rendered");



    	 	//Here change color back
    	 	setTimeout(()=>console.log("CHANGE"),500);


    	 	//Sets index so can iterate to new item
    	 	this.setState({index: newNum});


    	 	//Somehow need to force rerender?
    	 	console.log(this.state.filteredCols);


    	}
    	else{
    		clearInterval(this.timer);
    		


    	}
    }

   wrapper(){

   	//Filter and set state
    	// this.state.allBlocks.forEach(
    	// 	(row)=>{
    	// 		console.log(row.props.children);

    	// 		row.props.children.forEach(
    	// 			(col)=>{
    	// 				console.log(col.key);

    	// 			}

    	// 		)
    	// 	}
    	// );









   		//OPTION 1: this.state.index gets changed weirdly
   		// if(this.state.startBlinking){
   		// 	this.timer = setInterval(this.timer,2000);
   		// }
   		//clearInterval(timer);
   		//timer=0;

   }

   		//this.state.filteredCols[i]),


	render(){
		return(
		<div className ="pyramid2">
			{this.state.allBlocks}
          </div>
         )
	}
  

}

export default Pyramid2;
