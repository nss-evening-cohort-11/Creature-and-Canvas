import React from 'react';
import './AnimalPaintingCard.scss';

class AnimalPaintingCard extends React.Component {
  render() {
    const { painting } = this.props;
    return (
       <div className='SingleAnimalPaintingCard'>
        <div className='row my-4'>
          <div className='col-sm d-flex'>
            <div className='card m-3'  style={{backgroundColor: '#99E6FF', borderRadius: '1.5rem'}}>
              <div className='card-title heading'>
                <h5 className="title mt-3">{painting.title}</h5>
              </div>
              <img src={painting.imageURL} className="card-img-top" alt="animal pic"/>
              <div className="card-body">
                <p>{painting.canvasSize}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalPaintingCard;