import React from 'react';
import './SingleAnimal.scss';


class SingleAnimal extends React.Component {
  render() {
    const{ animal } = this.props;
    return (
      <div className="SingleAnimal">
        <h1>{animal.animalName}</h1>
      </div>
    );
  }
}

export default SingleAnimal;