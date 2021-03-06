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
      <div className='Shop mx-auto'>
        <h1 className='shop mb-5 heading'>Shop</h1>
        <div className='btnContainer'>
          <Link to='/animals'>
            <button className='animal view btn mr-5'>Filter By Animal</button>
          </Link>
          <button className='size btn view mr-5'>Filter By Size</button>
          <button className='price btn view'>Sort By Price</button>
        </div>
        <div className='paintingContainer d-flex justify-content-center'>
          <ul className='list-group mt-5 mb-5'>
            {buildAnimalList}
          </ul>

        </div>
      </div>
    );
  }
}

export default Shop;
