import React from 'react';
import './ShopSearch.scss';
import { Link } from 'react-router-dom';
import paintingsData from '../../../helpers/data/paintingsData';

class ShopSearch extends React.Component {
state = {
  searchValue: this.props.match.params,
  foundPainting: {},
}

getPaintingsByKeyword = () => {
  const keyword = this.state.searchValue.keyword;
  paintingsData.getPaintingsByKeyword(keyword)
    .then((response) => this.setState({ foundPainting: response }))
    //sets foundPainting as object = good
    .catch((err) => console.error('could not get single memory:', err));
}

componentDidMount() {
  this.getPaintingsByKeyword();
  console.log('componentMount:', this.state.foundPainting );
  // this consoles a blank object, even though i can see the foundPainting is not blank in state
  // is this something about the order/speed of retrieval?
}

getTitle = () => {
  const title = this.state.foundPainting.title;
  console.log('inside getTitle:', title);
  return title;
}

  render() {
    const { painting } = this.state;
    return (
      <div className="ShopSearch mt-3">
        <h1 className="Search mb-5">Search Results</h1>
    <h4>h4 {this.getTitle()}</h4>
    {/* <h3>h3 {painting.Title.foundPainting}</h3> */}
      </div>
    );
  }
}

export default ShopSearch;