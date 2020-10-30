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
        <h1 className="home mt-3 mb-3">Home</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {buildPaintingCards}
        </div>

      </div>
  );
  }
}

export default Home;
