import React from 'react';
import './AnimalCard.scss';
import { Link } from 'react-router-dom';
import paintingsData from '../../../helpers/data/paintingsData';

class AnimalCard extends React.Component {
  render() {
    const { animal } = this.props;
    const singleAnimalLink = `animals/paintings/${animal.animalID}`
    return (
      <div className='SingleAnimal'>
        <div className='row'>
          <div className='col-sm d-flex'>
            <div className='card m-3' id={animal.animalID}>
              <div className='card-title'>
                <h5 className="title mt-3">{animal.animalName}</h5>
              </div>
              <img src={animal.imageUrl} className="card-img-top" alt="animal pic"/>
              <div className="card-body">
                <p className="bio">{animal.bio}</p>
                <div className="btnContainer text-center">
                    <Link className="btn btn-secondary" to={singleAnimalLink}>View</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
