import React from 'react';
import './SinglePainting.scss';

class SinglePainting extends React.Component {
  render() {
    const {painting} = this.props;
    return (
      <div className="SinglePainting">
        <div className="row my-4">
          <div className="col-sm d-flex">
            <div className="card m-3">
             <img src={painting.imageURL} className="card-img-top" alt="animal art"/>
              <div className="card-body text-left">
                <p>Size: {painting.canvasSize}</p>
                <p>Price: ${painting.price}</p>
                <div className="btnContainer text-center">
                  <button className="btn btn-secondary">Buy Immediately</button>
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