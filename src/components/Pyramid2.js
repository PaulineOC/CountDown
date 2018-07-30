import React, { Component } from 'react'
import Column from './Columns.js';
import './../pyramid.css';


class Pyramid2 extends Component{
	constructor(props) {
		console.log("constructor");

		super(props);
        this.state= {
        	allNums: ["Four","Three","Two","One"],
        	allBlocks: [],
        	thisCol: -1,
        	thisRow: 0,
        	startBlinking: this.props.canBlink,
        	thisWord: this.props.word
        }
        this.createPyramid=this.createPyramid.bind(this);
        this.timer = this.timer.bind(this);
        this.randonNums = this.randonNums.bind(this);
    }

    //Create Pyramid - called in componentWillMount for rendering
    createPyramid (newWord, allNums) {

    	let finalPyramid = [];
 		
    	let count = 0;
    	let countRange = ((allNums.length/2) + (Math.pow(allNums.length,2)/2) );
    	console.log("here is count range " +countRange+ " "+ allNums.length);

    	let randomArr = this.randonNums(countRange - 2, 1,countRange);
    	console.log("random Arr2 "+ randomArr);

    	//let toReplace = this.getNRandomNumbers(3, 1, allNums.length - 2);

		//Rows
		for(let i=0;i<allNums.length;i++){
			let rowString = "RowNum: " +i;
			let allCols = [];
			//Cols
			for(let j=0;j<i+1;j++){
				console.log();
				let colString = "ColNum: "+j;
				let column = {
		        	row: i,
		        	key: `${rowString}${colString}`,
		          	text: newWord !== "" && ((count % i )=== randomArr[j]) ? newWord : allNums[i],
		          	color: "blue"
		        };
				allCols.push(column);
				count++;
			}
			finalPyramid.push(allCols);
		}
		return finalPyramid;
	}

	randonNums(n, low, high){
		if (high <= low+1)
		{
		    console.log("no numbers in that range");
		    return null;
		}
		else{
		    let arr = []
		    while(arr.length < n){
		        let rand = Math.floor(Math.random() * (high-low-1)) + (low+1);
		        if(arr.includes(rand)){
		        	continue;
		        }
		        else{
		            arr.push(rand);
			    }
			}
			return arr;
		}
	}


    componentWillMount(){
    	console.log("component will mount");
    	this.setState({allBlocks: this.createPyramid( "",this.state.allNums)});
    }

    componentDidMount(){
    	console.log("component did mount - here is the current state" );
    	console.log(this.state.allBlocks);

    	//Instigates regular blinking:
    	this.wrapper();
    }
 
    componentDidUpdate(prevProps, prevState){


    	if(prevProps.word!==this.props.word){

    		console.log("form word "+ this.props.word );
    		this.setState({allBlocks: this.createPyramid(this.props.word, this.state.allNums)});
    	} 	   	
    }

    timer(){
    	let {allBlocks} = this.state;
    	let newCol = this.state.thisCol;
    	newCol++;
    	//If need to change row since newCol out of bounds: 
    	if(newCol >= allBlocks[this.state.thisRow].length){
    		let newRow = this.state.thisRow;
    		newRow++;
    		this.setState({thisCol: 0, thisRow: newRow});
    		//console.log("Changed Rows");
    		if(newRow >= allBlocks.length){
    			//Rest last item back to blue
    			newCol = allBlocks[allBlocks.length-1].length-1;
    			let lastItem = allBlocks[allBlocks.length-1][newCol];
    			allBlocks[allBlocks.length-1][newCol] = 
    				{
    				...lastItem,
    				color:"blue"};
    			this.setState(allBlocks: allBlocks);
    			clearInterval(this.timer);
				return;
			};
			newCol =0;
    	}

    	this.setState({thisCol: newCol});
    	let newBlocks = allBlocks.map((row, rowindex) => {
    		return row.map((column, colindex) => {
    			return {
    				...column,
    				color: (this.state.thisRow === rowindex && this.state.thisCol === colindex) ? "red": "blue"
          		};

        	});

      	});
    	this.setState({ allBlocks: newBlocks});
    }

   	wrapper(){
    	this.timer = setInterval(this.timer,1000);
    	this.setState({startBlinking: false});
   	}

	render(){
		return(
		<div className ="Pyramid2">


			{this.state.allBlocks.map((block, index) => {
	          return (
	            <div className="Row" key={"Row " + index}>
		            {block.map(column => (
	                <Column
	                  className="Column"
	                  key={column.key}
	                  text={column.text}
	                  color={column.color}
	                />
	                ))}
	            </div>
	          );
	        })}
		</div>
         )
	}
}

export default Pyramid2;
