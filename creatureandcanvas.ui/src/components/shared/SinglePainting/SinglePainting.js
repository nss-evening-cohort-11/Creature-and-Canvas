import React from 'react';
import './SinglePainting.scss';
import {Link} from 'react-router-dom';
import paintingsData from '../../../helpers/data/paintingsData';

class SinglePainting extends React.Component {
  render() {
    const { painting } = this.props;
    const singleLink = `/paintings/${painting.itemID}`
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
                  <div className="btnContainer text-center">
                  <Link className="btn btn-secondary" to={singleLink}>Buy Immediately</Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePainting;