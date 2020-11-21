import React from 'react';
import './Animals.scss';
import animalsData from '../../../helpers/data/animalsData';
import AnimalCard from '../../shared/AnimalCard/AnimalCard';

class Animals extends React.Component {
  state = {
    animals: [],
  };

  componentDidMount() {
    animalsData.getAllAnimals()
    .then((animals) => {
      this.setState({ animals });
    });
  }

  render() {
    const { animals } = this.state;
    const buildAnimalsList = animals.map((animal) => {
      return <AnimalCard key={animal.animalName} animal={animal} />;
    });

    return (
      <div className='Animals'>
        <h1 className='heading'>Animals</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {buildAnimalsList}
          </div>
      </div>
    );
  }
}

export default Animals;
