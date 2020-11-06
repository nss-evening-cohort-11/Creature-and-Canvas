import React from 'react';
import './Paintings.scss';
import paintingData from '../../../helpers/data/paintingsData'



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
    return (
      <div className="SinglePaintingView">
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title">{painting.title}</h5>
          <p className="card-text">{painting.paintingDescription}</p>
          <img src={painting.imageURL} alt="" className="card-img-bottom"/>
          <h4 className="mt-4">{painting.animalName}</h4>
          <button className="btn btn-secondary" onClick={() => console.log("Id: " + painting.itemId)}>Buy Immediately</button>
        </div>
      </div>
    </div>
    );
  }
}

export default Paintings;