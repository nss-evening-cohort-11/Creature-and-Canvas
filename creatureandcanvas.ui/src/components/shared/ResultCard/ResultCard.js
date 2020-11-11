import React from 'react';
import { Link } from 'react-router-dom';

class ResultCard extends React.Component {

  render() {
    const { painting } = this.props;
    const itemLink = `/paintings/${painting.itemID}`
    return (
      <div className="ResultCard col-12">
        <Link to={itemLink} className="card custom-card">
          <div className="card-body low-pad">
            <h5 className="card-title">{painting.title}</h5>
          </div>
        </Link>
      </div>
    );
  }
}

export default ResultCard;