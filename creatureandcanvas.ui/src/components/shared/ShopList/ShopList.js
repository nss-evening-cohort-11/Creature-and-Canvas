import React from 'react';
import './ShopList.scss';
import {Link} from 'react-router-dom'


class ShopList extends React.Component {
  render() {
    const { animal } = this.props;
    const topThree = animal.topThreePaintings;

    const buildAnimalList = topThree.map((aPainting) => {
      return <Link className="list-group-item subheading"
                   style={{backgroundColor: '#EBFAFF', borderRadius: '.75rem', margin: '.4rem'}}
                   to={`/paintings/${aPainting.itemID}`}>{aPainting.title}</Link>
    });

    return (
      <div className='ShopList mb-5'>
        <li className='card' style={{backgroundColor: '#99E6FF', borderRadius: '1.5rem'}}>
          <div className="d-flex">
            <h2 className='heading card-title item-name mx-auto'>{animal.animalName}</h2>
          </div>
          <div className="card-body">
            <ul className='list-group list-group-flush mt-5 mb-5'>
              {buildAnimalList}
            </ul>
          </div>
        </li>
      </div>
    );
  }
}

export default ShopList;
