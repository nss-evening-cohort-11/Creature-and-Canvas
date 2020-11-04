import React from 'react';
import './Home.scss';
import paintingsData from '../../../helpers/data/paintingsData';
import SinglePainting from '../../shared/SinglePainting/SinglePainting';

class Home extends React.Component {
  state = {
    paintings: [],
  }

  componentDidMount() {
    paintingsData.getAllPaintings()
    .then((paintings) => {
      this.setState({ paintings });
    });
  }

  render() {
    const { paintings } = this.state;
    const buildPaintingCards = paintings.map((painting) => {
      return <SinglePainting key={painting.itemId} painting={painting} />;
    });

    return (
      <div className="Home">
        <div className="img-container d-flex flex-wrap text-center">
          <img className="logo text-center rounded mx-auto" src="https://i.ibb.co/gwfF0Lx/CC-logo2.png"/>
        </div>
        <h1>Welcome to Creature & Canvas</h1>
        <div className="blurb-container d-flex text-center">
          <h4 className="d-flex text-left mx-auto">
            Founded in 1973, Creature and Canvas has dedicated the last fourty years to showing the world that beautiful art is not a human-only phenomena.
            We believe that all creatures possess the need to create, and our job is to facilitate that need (as well as make a little som'n som'n on the side, we got rent to pay too.)
          </h4>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {buildPaintingCards}
        </div>

      </div>
  );
  }
}

export default Home;
