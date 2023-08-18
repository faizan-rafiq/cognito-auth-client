import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import React from "react";
import ReactDOM from "react-dom";
import appConfig from "./config";

var returnres = "";
Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      returnres:'',

    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      })
    ];
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('user name is ' + result.user.getUsername());
      console.log('call result: ' + result);
      this.setState({returnres: "User id created" + result.user.getUsername()}); 
    });
  }

  handleLogin(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      })
    ];
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('user name is ' + result.user.getUsername());
      console.log('call result: ' + result);
      this.setState({returnres: "User id created" + result.user.getUsername()}); 
    });
  }


  render() {
    return (
    <div>


      
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
               value={this.state.email}
               placeholder="Email"
               onChange={this.handleEmailChange.bind(this)}/>
        <input type="password"
               value={this.state.password}
               placeholder="Password"
               onChange={this.handlePasswordChange.bind(this)}/>
        <input type="submit"/>
      </form>     
      <p> { this.state.returnres}</p>
      
    <form onSubmit={this.onSubmit}>
      <div>{this.props.error}</div>
      <div>{this.state.email}</div>
      <label>
        Username
        <input placeholder="Username" value={this.state.username} onChange={this.changeUsername} required />
      </label>
      <label>
        Password
        <input placeholder="Password" onChange={this.changePassword} type="password" required />
      </label>
      <button type="submit">Sign in</button>
    </form>
      <p> { this.state.returnres}</p>
      

</div>
    );
  }
}

ReactDOM.render(<SignUpForm />, document.getElementById('app'));

