import React, { Component } from 'react';
import './App.css';
import Pyramid2 from './Pyramid2.js';
import AddWord from "./AddWord.js"



class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      formWord: "",
    }

    this.addWordToPyramid = this.addWordToPyramid.bind(this);
  }

  componentDidUpdate(){
    console.log("changed");

  }


  addWordToPyramid(word){
    this.setState({formWord: word.value });


  }

  render(){
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Countdown</h1>
      </header>
      <AddWord submit={true} onAddWord={this.addWordToPyramid} />
      <div className="App-intro">
      <Pyramid2 canBlink={true} word={this.state.formWord}/>
      </div>
    </div>

    )
  }

}




export default App;
