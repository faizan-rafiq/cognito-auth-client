import React, { Component } from 'react';
import Signup from './Signup'
import Signin from './Signin'
import UserStatus from './UserStatus'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <center> <h2>AWS Cognito Authentication</h2></center> 
        </div>
        <p className="App-intro">
        </p>
        <Signup />
        <hr />
        <Signin />
        <UserStatus />
      </div>
    );
  }
}

export default App;
