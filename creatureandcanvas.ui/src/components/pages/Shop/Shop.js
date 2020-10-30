import React from 'react';
import './Shop.scss';
import { Link } from 'react-router-dom';

class Shop extends React.Component {
  render() {
    return (
      <div className="Shop mt-3">
        <h1 className="shop mb-5">Shop</h1>
        <Link to='/home'><button className="btn btn-secondary">Filter By Animal</button></Link>
      </div>
    );
  }
}

export default Shop;