import React from 'react';
import './OurNavbar.scss';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import authData from '../../../helpers/data/authData';

class OurNavbar extends React.Component {
  state = {
    searchValue: '',
    id: '',
  }

  setSearchValue = (e) => {
    e.preventDefault();
    this.setState({searchValue: e.target.value})
  }

  logOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut()
    // .then(this.props.history.push('/home'))
    // .catch(err => console.log('unable to log out', err))
    
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const email = firebase.auth().currentUser.email;
        authData.getCustomers()
          .then(response => response.filter(x => x.emailAddress === email))
          .then(user => { 
            this.setState({id: user[0].customerID})
          })
      }
    }) 
  }

  render() {
    const { authed } = this.props;
    const searchKeywordValue = this.state.searchValue;
    const keywordLink = `/shop/search/${searchKeywordValue}`;

    
    const authedNavBar = () => {
      if (authed) {
        return (
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/home'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={`/customers/${this.state.id}`} >
                  Profile
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' onClick={this.logOut}>
                  Logout
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/animals'>
                  Animals
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/shop'>
                  Shop
                </Link>
              </li>
            </ul>
            </div>
          ); 
        } else if (!authed) {
          return (
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/home'>
                 Home
               </Link>
             </li>
             <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
             </li>
             <li className='nav-item'>
              <Link className='nav-link' to='/animals'>
                Animals
              </Link>
             </li>
             <li className='nav-item'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
             </li>
            </ul>
            </div>
          );
        } 
    }
    
    return (
      <div className='OurNavbar mx-auto'>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <Link className='navbar-brand' to='/home'>
            Creature & Canvas
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          {authedNavBar()}
          <form className="form-inline my-2 my-lg-0">
            <input onChange={this.setSearchValue} className="form-control mr-sm-2" type="text" placeholder="Search Products" aria-label="Search"/>
            <Link to={keywordLink} searchvalue={this.state.searchValue} className="btn btn-outline-success my-2 my-sm-0">
            Go
            </Link>
          </form>
        </nav>
      </div>
    );
  }
}

export default OurNavbar;
