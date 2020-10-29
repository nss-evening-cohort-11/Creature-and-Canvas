import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 className="home mt-5">Home</h1>
        <button className="btn btn-outline-secondary mr-5">Filter By Animal</button>
        <button className="btn btn-outline-secondary">Filter By Size</button>
        <button className="btn btn-outline-secondary ml-5">Sort By Price</button>
      </div>
    );
  }
}

export default Home;