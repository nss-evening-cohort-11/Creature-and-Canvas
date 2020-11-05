import React from 'react';
import './Animals.scss';
import animalsData from '../../../helpers/data/animalsData';
import SingleAnimal from '../../shared/SingleAnimal/SingleAnimal';

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
      return <SingleAnimal key={animal.animalName} animal={animal} />;
    });

    return (
      <div className='Animals'>
        <h1>Animals</h1>
        {buildAnimalsList}
      </div>
    );
  }
}

export default Animals;
