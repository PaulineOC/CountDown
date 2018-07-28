import React, { Component } from 'react'
import Column from './Columns.js';
import './../pyramid.css';


class Pyramid2 extends Component{
	constructor(props) {
		super(props);
        this.state= {
        	allNums: ["Four","Three","Two","One"],
        	allBlocks: [],
        	thisCol: -1,
        	thisRow: 0,
        	startBlinking: this.props.canBlink,
        }
        this.createPyramid=this.createPyramid.bind(this);
        this.timer = this.timer.bind(this);
    }

    //Create Pyramid - called in componentWillMount for rendering
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
				let column = {
		        	row: i,
		        	key: `${rowString}${colString}`,
		          	text: allNums[i],
		          	color: "blue"
		        };
				allCols.push(column);
			}
			finalPyramid.push(allCols);
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

    	//Instigates regular blinking:
    	this.wrapper();
    }
 
    compontDidUpdate(){
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


    			//Need to magically reset the last block whoops
    			newCol = allBlocks[allBlocks.length-1].length-1;
    			//correct last item: 
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
    	this.timer2 = setInterval(this.timer2,1000);
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
