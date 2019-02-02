import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './UserOutput.css'


class App extends Component {
  state = {
    username: 'Katarzyna'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        changed={this.usernameChangedHandler}
        currentUsername={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username="K" />
      </div>
    );
  }
}

export default App;
