import React from 'react';
import './OurFooter.scss';

class OurFooter extends React.Component {
  render() {
    return (
      <nav style={{backgroundColor: '#CA2E55', color: '#fff'}}
           className="navbar bottom fixed-bottom">
          <i className="navbar-brand text-center mx-auto">@2020 Creature & Canvas</i>
      </nav>
    );
  }
}

export default OurFooter;