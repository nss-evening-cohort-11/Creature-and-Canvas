import React from 'react';
import './SinglePaintings.scss';
import paintingData from '../../../helpers/data/paintingsData'
import {Link} from 'react-router-dom'


class SinglePaintings extends React.Component {
  state = {
    painting: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    paintingData.getSinglePainting(itemId)
      .then(response => this.setState({painting: response}))
      .catch(err => console.log(err))
  }

  render() {
    const { painting } = this.state;
    const animalPaintingLink = `/animals/paintings/${painting.animalId}`
    return (
      <div className="SinglePaintingView mx-auto">
        <div className="card w-100 mb-5">
          <div className="card-body">
            <h5 className="card-title">{painting.title}</h5>
            <p className="card-text">Price: ${painting.price}</p>
            <p className="card-text">Size: {painting.canvasSize}</p>
            <p className="card-text">{painting.paintingDescription}</p>
            <img src={painting.imageURL} alt="" className="card-img-bottom"/>
            <p className="intro">See all paintings by</p>
            <Link to={animalPaintingLink}><h4 className="mt-3">{painting.animalName}</h4></Link>
            <button className="btn btn-secondary" onClick={() => console.log("Id: " + painting.itemId)}>Buy Immediately</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePaintings;