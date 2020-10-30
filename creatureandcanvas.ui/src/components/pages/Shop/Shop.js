import React from 'react';
import './Shop.scss';
import { Link } from 'react-router-dom';

class Shop extends React.Component {
  render() {
    return (
      <div className="Shop mt-3">
        <h1 className="shop mb-5">Shop</h1>
        <div className="btnContainer">
          <Link to='/home'><button className="btn btn-secondary mr-5">Filter By Animal</button></Link>
          <button className="btn btn-secondary mr-5">Filter By Size</button>
          <button className="btn btn-secondary">Sort By Price</button>
        </div>
      </div>
    );
  }
}

export default Shop;