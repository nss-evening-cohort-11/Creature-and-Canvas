import React from 'react';


import authRequests from '../../../helpers/data/authData';

class Register extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      mailingAddress: '',
      isDeleted: false
    }
  };

  registerClickEvent = (e) => {
    const { user } = this.state;
    e.preventDefault();
    if(user.email !== '') {
      authRequests.registerUser(user)
      .then(() => this.props.history.push('/login'))
      .catch((err) => console.error('cant register', err))
    } else {
      window.alert('You have to use an email!')
    }
    
    
  };

  emailChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.email = e.target.value;
    this.setState({ user: tempUser });
  };

  passwordChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.password = e.target.value;
    this.setState({ user: tempUser });
  };

  firstNameChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.firstName = e.target.value;
    this.setState({ user: tempUser });
  };

  lastNameChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.lastName = e.target.value;
    this.setState({ user: tempUser });
  };

  mailingAddressChange = e => {
    const tempUser = { ...this.state.user };
    tempUser.mailingAddress = e.target.value;
    this.setState({ user: tempUser });
  };
  // register = (email, password) => authRequests.registerUser(email, password)

  render () {
    const { user } = this.state;
    
    return (
      <div className="register w-100" style={{margin: '5rem'}}>
        <div id="register-form">
          <h1 className="text-center">Register</h1>
          <form className="form-horizontal col-sm-6 col-sm-offset-3 mx-auto">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-4 control-label">
                Email:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-4 control-label">
                Password:
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputFirstName" className="col-sm-4 control-label">
                First Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="First Name"
                  value={user.firstName}
                  onChange={this.firstNameChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputLastName" className="col-sm-4 control-label">
                Last Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Last Name"
                  value={user.lastName}
                  onChange={this.lastNameChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputMailingAddress" className="col-sm-4 control-label">
                Mailing Address:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputMailingAddress"
                  placeholder="Mailing Address"
                  value={user.mailingAddress}
                  onChange={this.mailingAddressChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn view col-xs-12"
                  onClick={this.registerClickEvent}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;