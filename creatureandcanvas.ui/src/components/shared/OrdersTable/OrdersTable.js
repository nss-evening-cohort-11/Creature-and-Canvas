import React from 'react';
import './OrdersTable.scss';
import {Link} from 'react-router-dom'


class OrdersTable extends React.Component {
  render() {
    const { order } = this.props;

    return (
    <>
    <tr>
      <td>{order.orderDate}</td>
      <td>total</td>
      <Link to={`/orders/${order.orderID}`}>View Order</Link>
    </tr>
    </>
    );
  }
}

export default OrdersTable;
