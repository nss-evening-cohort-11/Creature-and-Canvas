import React from 'react';
import './Shop.scss';
import { Link } from 'react-router-dom';
import animalsData from '../../../helpers/data/animalsData';
import ShopList from '../../shared/ShopList/ShopList';

class Shop extends React.Component {
  state = {
    animals: [],
  };

  componentDidMount() {
    let promise = animalsData.getAnimalAndTopThreePaintings();
    promise.then((animals) => {
      this.setState({ animals });
    });
  }

  render() {
    const { animals } = this.state;
    const buildAnimalList = animals.map((animal) => {
      return <ShopList key={animal.animalId} animal={animal} />;
    });

    return (
      <div className='Shop mt-3 justify-content-center'>
        <h1 className='shop mb-5'>Shop</h1>
        <div className='btnContainer'>
          <Link to='/animals'>
            <button className='btn btn-secondary mr-5'>Filter By Animal</button>
          </Link>
          <button className='btn btn-secondary mr-5'>Filter By Size</button>
          <button className='btn btn-secondary'>Sort By Price</button>
        </div>
        <div className='d-flex justify-content-center'>
          <ul className='list-group mt-5 mb-5'>
            {buildAnimalList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Shop;
