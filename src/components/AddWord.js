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
		console.log(e);
		e.preventDefault();
		const {_word}= this.refs;
		this.state.passToParent(_word);
		this.setState({submitting: true});
	}

	render(){
	    return (
	    	<div className="formContainer" >
		        <form className="Add-Word" name="addWord" onSubmit={this.submitform}>
		            <input
		            	className="inputText"
		            	ref="_word"
		            	type="text"
		            	placeholder="clean room"
		            	required
		            /><br />
		            <input className="Buttons" type="submit" value="Submit" disabled={this.state.submitting} />            
		        </form>
	        </div>

	    )
	}

}

export default AddWord;
