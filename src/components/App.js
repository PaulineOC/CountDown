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
      <div className="App-Body">
        <AddWord submit={true} onAddWord={this.addWordToPyramid} />
        <Pyramid2 canBlink={true} word={this.state.formWord}/>
      </div>
    </div>

    )
  }

}




export default App;
