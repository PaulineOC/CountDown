//import './Pyramid.scss'
import React, { Component } from 'react'
import Blocks from './Blocks.js';


const Pyramid = ({store}) => {

	const createCols = (colText, overallCount, colNum) => {
        let cols = [];
        for (let i=0;i<colNum;i++){
        	let newCount = overallCount++;
        	console.log(newCount);
        	let potentialComp = <Blocks text = {colText} key={newCount} />;
        	cols.push(potentialComp);
        }
        return cols;
    }

	const test = () => {
		let returnMe = [];
		for(let i=0;i<5;i++){
			let cols = [];
			for(let j=0;j<i+1;j++){
				let col = <p key = {j+i}>"Col"</p>
				cols.push(col);
			}
			let row = <div key={i} className ="Row">{cols}</div>
			returnMe.push(row);
		}
		return returnMe;
	}

	const blink = (arr) => { 
		for(let i=0;i<arr.length;i++){
			console.log();
		}
	}



	return(
		<div className ="pyramid">
			{test()}
          </div>
	)
}


