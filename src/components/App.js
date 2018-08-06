import React, { Component } from 'react';
import './App.css';
import Pyramid2 from './Pyramid2.js';
import AddWord from "./AddWord.js";
import Opener from "./Opener.js";
import Ending from "./Ending.js";



class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      formWord: "",
      startBlink: true,
      showEnd: false,
      canSubmit: true
    }

    this.addWordToPyramid = this.addWordToPyramid.bind(this);
    this.showEnding = this.showEnding.bind(this);
    this.reset = this.reset.bind(this);
  }

  addWordToPyramid(word){
    this.setState({formWord: word.value, StartBlink:true  });
  }

  showEnding(){
    this.setState({startBlink: false, showEnd: true  });
  }

  reset(){
    console.log("in reset");
    //console.log(this.state);
    this.setState({startBlink: true, showEnd: false, formWord: "", canSubmit:true});
    this.getElementsByClassName('inputText').value='';
  }


  render(){
    return (
      <div className="App">
        <div className="App-Body">
          <Opener />
          <AddWord submit={this.state.canSubmit} onAddWord={this.addWordToPyramid} />
          <Pyramid2 canBlink={this.state.startBlink} word={this.state.formWord} showWord={this.showEnding}/>
          <Ending canShow={this.state.showEnd} startOver={this.reset} />
        </div>

    </div>

    )
  }
}


export default App;
