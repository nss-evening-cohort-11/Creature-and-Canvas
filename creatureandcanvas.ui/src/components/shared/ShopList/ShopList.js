import React from 'react';
import './ShopList.scss';
import pData from '../../../helpers/data/paintingsData'

class ShopList extends React.Component {
  render() {
    const{ animal } = this.props;
    return (
      <div className='ShopList justify-content-center'>
        <li className='list-group-item m-3'>
          <div className="d-flex">
            <h2 className='item-name'>{animal.animalName}</h2>
            <p className='count mr-auto mt-1'>({animal.paintingsCount})</p>
          </div>
          <div className="text-left">
            <h5>{animal.topThreePaintings[0].title}</h5>
            <h5>{animal.topThreePaintings[1].title}</h5>
            <h5>{animal.topThreePaintings[2].title}</h5>
          </div>
        </li>
      </div>
    );
  }
}

export default ShopList;
