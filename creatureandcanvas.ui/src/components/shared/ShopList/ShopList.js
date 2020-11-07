import React from 'react';
import './ShopList.scss';
import pData from '../../../helpers/data/paintingsData'
import { baseUrl } from '../../../helpers/constants.json'

class ShopList extends React.Component {
 


  printPaintingsList = (animalPaintings) => new Promise((resolve, reject) => {
    animalPaintings.forEach(painting => {
      pData.getPaintingIdByTitle(painting.title)
      .then(painting => {
          console.log(painting, 'painting')
          let animalLink = `${baseUrl}/paintings/${painting.itemID}`
          console.log(animalLink, 'animalLink')
          return <h5><a href={animalLink}>{painting.title}</a></h5>
        })

     
    }).catch(err => reject(err))
  });
  
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
             { this.printPaintingsList(animal.topThreePaintings) }
          </div>
        </li>
      </div>
    );
  }
}

export default ShopList;
