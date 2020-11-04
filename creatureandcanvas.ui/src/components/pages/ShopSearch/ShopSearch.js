import React from 'react';
import './ShopSearch.scss';
import { Link } from 'react-router-dom';
import paintingsData from '../../../helpers/data/paintingsData';

class ShopSearch extends React.Component {
state = {
  searchValue: this.props.match.params,
  newthing: {},  //working on setting state?
}

componentDidUpdate() {
  const {keyword} = this.state.searchValue;
  paintingsData.getPaintingsByKeyword(keyword)
    .then((response) => this.setState({ newthing: response })) // not sure what to do with response?
    .catch((err) => console.error('could not get paintings:', err));
  console.log('search results:', this.state.newthing );
}

componentDidMount() {
  const {keyword} = this.state.searchValue;
  paintingsData.getPaintingsByKeyword(keyword)
    .then((response) => this.setState({ newthing: response })) // not sure what to do with response?
    .catch((err) => console.error('could not get paintings:', err));
  console.log('search results:', this.state.newthing );
}

  render() {
    const { key } = this.state;
    return (
      <div className="ShopSearch mt-3">
        <h1 className="Search mb-5">Search Results</h1>
        <h4>{key}</h4>
      </div>
    );
  }
}

export default ShopSearch;