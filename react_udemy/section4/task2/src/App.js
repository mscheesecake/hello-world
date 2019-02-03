import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent';
import Char from './CharComponent';

class App extends Component {

  state = {
    userInput: '',
  };

  inputChanged = (event) => {
    this.setState({userInput: event.target.value})
  };

  removeChar = (index) => {
    let text = this.state.userInput.split('');
    text.splice(index, 1);
    let updatedText = text.join('')
    this.setState({userInput: updatedText})
  };

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch}
        key={index}
        onClick={() => this.removeChar(index)} />
    });

    return (
      <div className="App">
        <input 
          type="text"
          onChange={this.inputChanged}
          value={this.state.userInput} />
        <p>Input length: {this.state.userInput.length} </p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
