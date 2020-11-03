import React from 'react';
import './ShopSearch.scss';
import { Link } from 'react-router-dom';

class ShopSearch extends React.Component {
state = {
  searchValue: '',
}

componentDidMount() {
  console.log('here?: ', this.props.match.params)
}

  render() {
    return (
      <div className="ShopSearch mt-3">
        <h1 className="Search mb-5">Search Results</h1>
        <h4>test search</h4>
      </div>
    );
  }
}

export default ShopSearch;