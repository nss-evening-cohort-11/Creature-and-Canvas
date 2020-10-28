import React from 'react';
import './Animals.scss';
import { Link } from 'react-router-dom';

class Animals extends React.Component {
  render() {
    return (
      <div className="Animals">
        <h1>Animals</h1>
        <Link to="/animals/12345">Single Animal</Link>
      </div>
    );
  }
}

export default Animals;