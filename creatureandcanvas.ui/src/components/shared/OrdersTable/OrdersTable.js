import React from 'react';
import './OrdersTable.scss';
import {Link} from 'react-router-dom'


class OrdersTable extends React.Component {
  render() {
    const { orders } = this.props;

    return (
      <div className='OrdersTable mb-5'>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Order Date</th>
      <th scope="col">Total</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  {/* foreach here  */}
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
      </div>
    );
  }
}

export default OrdersTable;
