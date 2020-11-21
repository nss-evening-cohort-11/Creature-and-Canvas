import React from 'react';
import './OrdersTable.scss';
import {Link} from 'react-router-dom'


class OrdersTable extends React.Component {
  render() {
    const { order } = this.props;
    const dateProp = order.orderDate;
    const shortDate = dateProp.substring(0, 10);

    return (
    <>
    <tr>
      <td>{shortDate}</td>
      <td>total</td>
      <Link to={`/orders/${order.orderID}`}>View Order</Link>
    </tr>
    </>
    );
  }
}

export default OrdersTable;
