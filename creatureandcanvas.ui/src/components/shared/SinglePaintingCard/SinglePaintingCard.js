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
            <div className="card m-3">
              <div className="card-title">
                <h5 className="title mt-3">{painting.title}</h5>
              </div>
                <img src={painting.imageURL} className="card-img-top" alt="animal art"/>
                <div className="card-body text-left">
                  <p>Size: {painting.canvasSize}</p>
                  <p>Price: ${painting.price}</p>
                  <div className="btnContainer justify-content-center">
                    <Link className="view btn btn-secondary" to={singleLink}>View</Link>
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