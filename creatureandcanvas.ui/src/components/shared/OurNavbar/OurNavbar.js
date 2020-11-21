import React from 'react';
import './OurNavbar.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
import authData from '../../../helpers/data/authData';

class OurNavbar extends React.Component {
  state = {
    searchValue: '',
    isOpen: false,
    id: '',
  };

  setSearchValue = (e) => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut()
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const email = firebase.auth().currentUser.email;
        authData.getCustomers()
          .then(response => response.filter(x => x.emailAddress === email))
          .then(user => this.setState({id: user[0].customerID}))
          .catch(err => console.error('Could not filter customers', err))
      }
    })
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { isOpen } = this.state;
    const { authed } = this.props;
    const searchKeywordValue = this.state.searchValue;
    const keywordLink = `/shop/search/${searchKeywordValue}`;

    const authedNavBar = () => {
      if (authed) {
        return (
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link text-center' to='/home'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to={`/customers/${this.state.id}`}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/animals'>
                Animals
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/shop'>
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/shopping-cart'>
                Shopping Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <Button className="btn btn-light my-2 my-sm-0" onClick={this.logOut}>
                Logout
             </Button>
            </NavItem>
          </Nav>
        );
      } else if (!authed) {
        return (
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/home'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/login'>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/animals'>
                Animals
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/shop'>
                Shop
              </NavLink>
            </NavItem>
          </Nav>
        );
      }
    };

    return (
      <div className='OurNavbar'>
        <Navbar style={{backgroundColor: '#CA2E55'}} dark expand='md' fixed='top'>
          <NavbarBrand href='/home'>Creature & Canvas</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {authedNavBar()}
            <form className='form-inline my-2 my-lg-0'>
              <input
                onChange={this.setSearchValue}
                className='form-control mr-sm-2'
                type='text'
                placeholder='Search Products'
                aria-label='Search' />
              <NavLink
                tag={RRNavLink}
                to={keywordLink}
                searchvalue={this.state.searchValue}
                className='btn my-2 my-sm-0'
                style={{backgroundColor: '#FFB7C3'}}>
                Go
              </NavLink>
            </form>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default OurNavbar;
