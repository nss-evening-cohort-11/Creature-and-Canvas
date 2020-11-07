import React from 'react';
import './AnimalPaintings.scss';
import paintingsData from '../../../helpers/data/paintingsData';
import AnimalPaintingCard from '../../shared/AnimalPaintingCard/AnimalPaintingCard';

class AnimalPaintings extends React.Component {
  state = {
    paintings: [],
  };

  componentDidMount() {
    const animalId = this.props.match.params.animalId;
    paintingsData
      .getAllAnimalPaintingsById(animalId)
      .then((paintings) => this.setState({ paintings }))
      .catch((err) => console.log(err));
  }

  render() {
    const { paintings } = this.state;
    const buildAnimalPaintings = paintings.map((painting) => {
    return <AnimalPaintingCard key={painting.animalId} painting={painting} />;
    });
    return (
      <div className='AnimalPainting'>
        <div className='d-flex flex-wrap justify-content-center'>
          {buildAnimalPaintings}
        </div>
      </div>
    );
  }
}

export default AnimalPaintings;
