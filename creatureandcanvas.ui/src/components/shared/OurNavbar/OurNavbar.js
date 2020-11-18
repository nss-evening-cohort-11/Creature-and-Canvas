import React from 'react';
import './OurNavbar.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class OurNavbar extends React.Component {
  state = {
    searchValue: '',
    isOpen: false,
  };

  setSearchValue = (e) => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const searchKeywordValue = this.state.searchValue;
    const keywordLink = `/shop/search/${searchKeywordValue}`;

    const authedNavBar = () => {
      const { authed } = this.props;
      if (authed) {
        return (
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/home'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/customers/1'>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} className='nav-link' to='/login'>
                Logout
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
        <Navbar color='dark' dark expand='md' fixed='top'>
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
                className='btn btn-outline-success my-2 my-sm-0'>
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
