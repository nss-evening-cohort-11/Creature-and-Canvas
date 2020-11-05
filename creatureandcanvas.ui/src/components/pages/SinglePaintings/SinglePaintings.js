import React from 'react';
import './SinglePaintings.scss';
import paintingData from '../../../helpers/data/paintingsData'



class SinglePaintings extends React.Component {
  state = {
    painting: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    console.log(itemId)
    paintingData.getSinglePainting(itemId)
      .then(response => this.setState({painting: response}))
      .catch(err => console.log(err))
  }

  render() {
    const { painting } = this.state;
    return (
      <div className="SinglePaintingView">
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">{painting.title}</h5>
          <p className="card-text">Price: {painting.price}</p>
          <p className="card-text">Size: {painting.canvasSize}</p>
          <p className="card-text">{painting.paintingDescription}</p>
          <img src={painting.imageURL} alt="" className="card-img-bottom"/>
          <button className="btn btn-secondary" onClick={() => console.log("Id: " + painting.itemId)}>Buy Immediately</button>
        </div>
      </div>
    </div>
    );
  }
}

export default SinglePaintings;