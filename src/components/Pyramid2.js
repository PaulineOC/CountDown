import React, { Component } from 'react'
import Column from './Columns.js';
//import './index.css';



class Pyramid2 extends Component{
	constructor(props) {
		super(props);
        this.state= {
        	allNums: ["Four","Three","Two","One"],
        	allBlocks: [],

        	thisCol: -1,
        	thisRow: 0,

        	startBlinking: true,
        }
        this.createPyramid=this.createPyramid.bind(this);
        this.timer2 = this.timer2.bind(this);

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
    	console.log(this.state.allBlocks);
    }

    componentDidMount(){
    	console.log("component did mount - here is the current state" );
    	console.log(this.state.allBlocks);

    	//Instigates regular blinking:
    	//this.wrapper();
    }
 
    compontDidUpdate(){
    	console.log("state changed: "+ this.state.allBlocks);

    }

    timer2(){
    	let {allBlocks} = this.state;

    	let newCol = this.state.thisCol;
    	newCol++;


    	//If need to change row since newCol out of bounds: 
    	if(newCol >= allBlocks[this.state.thisRow].props.children.length){
    		let newRow = this.state.thisRow;
    		newRow++;
    		this.setState({thisCol:0, thisRow: newRow});
    		console.log("Changed Rows");
    		newCol =0;

    		if(newRow >= allBlocks.length){
    			console.log("End of pyramid, stopping timer");
				clearInterval(this.timer2);
				return;
    		}
    	}

    	this.setState({thisCol: newCol})
    
    	//Access the correct item: 
    	let currElement = allBlocks[this.state.thisRow].props.children[newCol];
    	//console.log("Curr item key: "+ currElement.key + " is color: "+ currElement.props.color); 

    	let currEle = allBlocks[this.state.thisRow].props.children[newCol];
    	//console.log(currEle);

    	//Cloning attempt: 
    	let newItem = React.cloneElement(currEle, {"color": "#FF0000"});
    	allBlocks[this.state.thisRow].props.children[newCol] = newItem;
    	//console.log("new item " + allBlocks[this.state.thisRow].props.children[newCol].key+" "+allBlocks[this.state.thisRow].props.children[newCol].props.color);

    	//Force Re-render
    	this.render();


    }

   wrapper(){
    	let {allBlocks} = this.state;
    	this.timer2 = setInterval(this.timer2,2000);
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
