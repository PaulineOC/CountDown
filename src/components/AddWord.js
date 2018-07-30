import React, { Component } from 'react'

class AddWord extends Component{
	constructor(props){
		super(props);
		this.state={
			canSubmit: this.props.submit,
			submitting: false,
			passToParent: this.props.onAddWord
		}
		this.submitform = this.submitform.bind(this);
	}

	submitform(e){
		e.preventDefault();
		console.log("Add Word Submit Function");
		const {_word}= this.refs;

		//having trouble calling this function
		//console.log(this.state.passToParent)
		this.state.passToParent(_word);
		this.setState({submitting: true});
	}

	render(){
	    return (
	        <form className="Add-Word" name="addWord" onSubmit={this.submitform}>
	            <input 
	            	ref="_word" 
	            	type="text"
	            	placeholder="study"
	            	required
	            />
	            <input type="submit" value="Submit" disabled={this.state.submitting} />	            

	       
	        </form>

	    )
	}

}

export default AddWord;
