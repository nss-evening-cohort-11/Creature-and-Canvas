import React from 'react';
import './ShopSearch.scss';
import { Link } from 'react-router-dom';

class ShopSearch extends React.Component {
state = {
  searchKeyword: '',
}

componentDidMount() {
  const { keyword } = this.props.match.params;
}

  render() {
    return (
      <div className="ShopSearch mt-3">
        <h1 className="Search mb-5">ShopSearch</h1>
        <h4></h4>
      </div>
    );
  }
}

export default ShopSearch;