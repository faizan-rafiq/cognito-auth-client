import React, { Component } from 'react'
import { authenticateUser } from './Cognito'

class Signin extends Component {
  constructor (props) {
    super(props)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.handleSigninSubmit = this.handleSigninSubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      loading: false,
    }
  }

  changeEmail (e) {
    this.setState({ email: e.target.value })
  }

  changePassword (e) {
    this.setState({ password: e.target.value })
  }

  handleSigninSubmit (e) {
    e.preventDefault()
    this.setState({ loading: true })
    console.log('Entered:', this.state)
    authenticateUser(this.state.email, this.state.password, (err, result) => {
      if (err) {
        console.log(err)
        this.setState({ loading: false })
        return
      }
      console.log(result)
      this.setState({ loading: false })
      window.location.reload()
    })
  }

  render () {
    return (
      <div className="Signin">
      <center>  <h2>Sign In</h2></center>
      <div className="container">
        <form onSubmit={this.handleSigninSubmit}>
          <div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                  <input
                    value={this.state.email}
                    placeholder='Email/username'
                    type='text'
                    onChange={this.changeEmail} />
                                      </div>
          </div>
          <div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Password</label>
            <input
              value={this.state.password}
              placeholder='Password'
              type='password'
              minLength={6}
              onChange={this.changePassword} />
            </div>

          </div>
          <div>
            <button type='submit' disabled={this.state.loading} className="btn btn-primary">Sign In</button>
          </div>
        </form>
        </div>
     </div>

    )
  }
}

export default Signin
