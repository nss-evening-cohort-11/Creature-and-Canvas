import React from 'react';
import './Paintings.scss';
import { Link } from 'react-router-dom';
import paintingData from '../../../helpers/data/paintingsData';



class Paintings extends React.Component {
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
    const shopLink = `/animals`
    return (
      <div className="SinglePaintingView">
        <div className="card w-100 mb-5">
          <div className="card-body">
            <h5 className="card-title">{painting.title}</h5>
            <p className="card-text">{painting.paintingDescription}</p>
            <img src={painting.imageURL} alt="" className="card-img-bottom"/>
            <p className="intro">See all paintings by</p>
            <Link className="toShop" to={shopLink}><h4 className="mt-3">{painting.animalName}</h4></Link>
            <button className="btn btn-secondary" onClick={() => console.log("Id: " + painting.itemId)}>Buy Immediately</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Paintings;