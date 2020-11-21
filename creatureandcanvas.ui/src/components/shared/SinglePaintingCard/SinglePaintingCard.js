import React from 'react';
import './SinglePaintingCard.scss';
import {Link} from 'react-router-dom';

class SinglePaintingCard extends React.Component {
  render() {
    const { painting } = this.props;
    const singleLink = `paintings/${painting.itemID}`
    return (
      <div className="SinglePainting">
        <div className="row my-4">
          <div className="col-sm d-flex">
            <div className="card m-3" 
             style={{backgroundColor: '#99E6FF', borderRadius: '1.5rem'}}>
              <div className="card-title">
                <h4 className="title mt-3 heading">{painting.title}</h4>
              </div>
                <img src={painting.imageURL} className="card-img-top" alt="animal art"/>
                <div className="card-body text-center">
                  <h5 className='subheading'>Size: {painting.canvasSize}</h5>
                  <h5 className='subheading'>Price: ${painting.price}</h5>
                  <div className="btnContainer justify-content-center">
                    <Link 
                    className="view btn" 
                    to={singleLink}
                    style={{
                          backgroundColor: '#FFB7C3', 
                          borderRadius: '.75rem', 
                          color: '#FFF'
                          }}
                    >View</Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePaintingCard;