import React from 'react';
import './ShopSearch.scss';
import { Link } from 'react-router-dom';
import paintingsData from '../../../helpers/data/paintingsData';
import ResultCard from '../../shared/ResultCard/ResultCard';

class ShopSearch extends React.Component {
state = {
  foundPaintings: [],
}

getPaintingsByKeyword = () => {
  const keyword = this.props.match.params.keyword;
  paintingsData.getPaintingsByKeyword(keyword)
    .then((foundPaintings) => this.setState({ foundPaintings }))
    .catch((err) => console.error('could not get paintings:', err));
}

componentDidMount() {
  this.getPaintingsByKeyword();
}


  render() {
    const { foundPaintings } = this.state;
    const buildResults = foundPaintings.map((painting) => (
      <ResultCard key={painting.paintingId} painting={painting}/>
    ));
    return (
      <div className="ShopSearch mt-3">
        <h1 className="Search mb-5">Search Results</h1>
        <div className="d-flex flex-wrap col-12">{buildResults}</div>
      </div>
    );
  }
}

export default ShopSearch;