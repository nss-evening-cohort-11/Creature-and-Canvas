import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../../helpers/data/authData';

class Login extends React.Component {
  state = {
    // user: {
    //   email: '',
    //   password: '',
    // },
  };

//   loginClickEvent = (e) => {
//     const { user } = this.state;
//     e.preventDefault();
//     authRequests
//       .loginUser(user)
//       .then(() => {
//         this.props.history.push('/customers');
//       })
//       .catch(error => {
//         console.error('there was an error in registering', error);
//       });
//   };

logUserIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(() => {
        this.props.history.push('/home');
    });
  }

  render () {
    const { user } = this.state;
    return (
      <div className="Login row">
        <div className="Login-Section col-6">
            <h3>Create an account</h3>
        </div>
        <div className="Login-Section col-6">
            <h3>Login</h3>
            <button className="btn btn-primary" onClick={this.logUserIn}>Login with Google</button>
        </div>
      </div>
    );
  }
}

export default Login;