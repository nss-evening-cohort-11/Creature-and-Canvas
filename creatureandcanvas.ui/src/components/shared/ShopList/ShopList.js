import React from 'react';
import './ShopList.scss';
import {Link} from 'react-router-dom'


class ShopList extends React.Component {
  render() {
    const { animal } = this.props;
    const topThree = animal.topThreePaintings;

    const buildAnimalList = topThree.map((aPainting) => {
      return <Link to={`/paintings/${aPainting.itemID}`}>{aPainting.title}</Link>
    });

    return (
      <div className='ShopList mb-5'>
        <li className='list-group-item'>
          <div className="d-flex">
            <h2 className='item-name'>{animal.animalName}</h2>
            <p className='count mr-auto mt-1'>({animal.paintingsCount})</p>
          </div>
          <div className="text-left">
            <ul className='list-group mt-5 mb-5'>
              {buildAnimalList}
            </ul>
          </div>
        </li>
      </div>
    );
  }
}

export default ShopList;
