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
      .then(response => this.setState({painting: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    const { painting } = this.state;
    const what = () => console.log(painting.itemId)
    return (
      <div className="SinglePaintingView">
      <div className="card mb-3">
        <div className="card-body">
          {what()}
          <h5 className="card-title">{painting.Title}</h5>
          <p className="card-text">{painting.paintingDescription}</p>
          <img src={painting.imageURL} alt="" className="card-img-bottom"/>
        </div>
      </div>
    </div>
    );
  }
}

export default Paintings;