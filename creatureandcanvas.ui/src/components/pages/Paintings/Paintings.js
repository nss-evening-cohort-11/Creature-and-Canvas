import React from 'react';
import './Paintings.scss';
import { Link } from 'react-router-dom';

class Paintings extends React.Component {
  render() {
    return (
      <div className="Paintings">
        <h1>Paintings</h1>
        <Link to="/paintings/56789">Single Painting</Link>
      </div>
    );
  }
}

export default Paintings;