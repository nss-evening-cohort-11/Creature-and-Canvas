import React from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

    render() {
        <form className="form-inline my-2 my-lg-0">
            <input onChange={this.setSearchValue} value={props.inputValue} className="form-control mr-sm-2" type="text" placeholder="Search Products" aria-label="Search"/>
            <Link to={keywordLink} searchValue={this.state.searchValue} className="btn btn-outline-success my-2 my-sm-0">
            Go
            </Link>
          </form>
    }
}