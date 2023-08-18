import React, { Component } from 'react'
import { createUser, verifyUser } from './Cognito'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeVerifyCode = this.changeVerifyCode.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleVerifySubmit = this.handleVerifySubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      verifyCode: '',
      username: '',
      showVerification: false,
    }
  }

  changeEmail (e) {
    this.setState({ email: e.target.value })
  }

  changeUsername (e) {
    this.setState({ username: e.target.value })
  }

  changePassword (e) {
    this.setState({ password: e.target.value })
  }

  changeVerifyCode (e) {
    this.setState({ verifyCode: e.target.value })
  }

  handleSignupSubmit (e) {
    const { username, email, password } = this.state
    e.preventDefault()
    console.log('Entered:', this.state)
    createUser(username, email, password, (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(result.user)
      this.setState({ showVerification: true })
    })
  }

  handleVerifySubmit (e) {
    e.preventDefault()
    verifyUser(this.state.username, this.state.verifyCode, (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      alert(result)
    })
  }

  render () {
    return (
      <div className="Signup">

        {
          !this.state.showVerification ? (
			<div className="container">
            <form onSubmit={this.handleSignupSubmit}>
              <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
	                <input
	                  value={this.state.email}
	                  placeholder='Email'
	                  type='email'
	                  onChange={this.changeEmail}
	                  className="form-control" />
                  </div>
              </div>
              <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
	                <input
	                  value={this.state.username}
	                  placeholder='Username'
	                  onChange={this.changeUsername} 
	                  className="form-control"/>
                 </div>
              </div>
              <div className="form-group row">
                 <label for="inputEmail3" className="col-sm-2 col-form-label">Password</label>
                 <div className="col-sm-10">
	                <input
	                  value={this.state.password}
	                  placeholder='Password'
	                  type='password'
	                  minLength={6}
	                  onChange={this.changePassword} 
	                  className="form-control"/>
                  </div>
              </div>
              <div>
                <button type='submit' className="btn btn-primary">Sign up</button>
              </div>
            </form>
            </div>
          ) : (
  			<div className="container">

		            <form onSubmit={this.handleVerifySubmit}>
		                  <div className="form-group row">
        						<label for="inputEmail3" className="col-sm-2 col-form-label">Verify</label>
        				  <div className="col-sm-10">
				              <input
				                value={this.state.verifyCode}
				                onChange={this.changeVerifyCode}
				                placeholder='code' 
				                className="form-control" />
				              </div>  
		                  </div>
		                	<div className="col-sm-10">
						    	<button type='submit' className="btn btn-primary">Verify</button>
						    </div>
		            </form>
                </div>

          )
        }
      </div>
    )
  }
}

export default Signup
