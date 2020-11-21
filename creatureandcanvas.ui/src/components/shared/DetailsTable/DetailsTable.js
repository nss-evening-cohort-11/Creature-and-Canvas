import React from 'react';
import './DetailsTable.scss';
import { Link } from 'react-router-dom';

class DetailsTable extends React.Component {
  render() {
    const { productOrder } = this.props;

    return (
    <>
      <tr>
        <td>{productOrder.item}</td>
        <td>${productOrder.price}</td>
        <td><Link to={`/paintings/${productOrder.itemId}`}>View Item</Link></td>
      </tr>
    </>
    );
  }
}

export default DetailsTable;