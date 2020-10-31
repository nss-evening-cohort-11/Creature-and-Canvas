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
          <img className="logo text-center rounded mx-auto" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2abc6e0-238f-477c-9dc5-a102af71b559/CC_logo2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201031T144921Z&X-Amz-Expires=86400&X-Amz-Signature=802561e81dd5714fa91ef900a6b6f71d0dbc6e223188c6b6fc3e4d1ef6ec1b19&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22CC_logo2.png%22"/>
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
