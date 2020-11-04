import React from 'react';
import './OurNavbar.scss';
import { Link } from 'react-router-dom';

class OurNavbar extends React.Component {
  state = {
    searchValue: '',
  }

  setSearchValue = (e) => {
    e.preventDefault();
    this.setState({searchValue: e.target.value})
  }

  render() {
    const searchKeywordValue = this.state.searchValue;
    const keywordLink = `/shop/search/${searchKeywordValue}`;
    return (
      <div className='OurNavbar'>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <Link className='navbar-brand' to='/shop'>
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
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/home'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/animals'>
                  Animals
                </Link>
              </li>
            </ul>
          </div>
          //goes here

        </nav>
      </div>
    );
  }
}

export default OurNavbar;
