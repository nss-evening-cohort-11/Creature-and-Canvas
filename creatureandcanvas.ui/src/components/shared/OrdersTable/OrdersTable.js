import React from 'react';
import './OrdersTable.scss';
import {Link} from 'react-router-dom';


class OrdersTable extends React.Component {
  render() {
    const { order } = this.props;
    const { customerId } = this.props;

    return (
    <>
    <tr>
      <td>{order.orderDate}</td>
      <td>total</td>
      <td><Link to={`/orderDetails/${customerId}`}>View Order</Link></td>
    </tr>
    </>
    );
  }
}

export default OrdersTable;
