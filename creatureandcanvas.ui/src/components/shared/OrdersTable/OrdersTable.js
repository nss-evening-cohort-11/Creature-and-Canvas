import React from 'react';
import './OrdersTable.scss';
import {Link} from 'react-router-dom';


class OrdersTable extends React.Component {
  render() {
    const { order, customerId } = this.props;
    const dateProp = order.orderDate;
    const shortDate = dateProp.substring(0, 10);

    if (order) {
      return (
        <>
        <tr>
          <td>{shortDate}</td>
          <td>total</td>
          <Link to={`/orderDetails/${customerId}`}>View Order</Link>
        </tr>
        </>
        );
    } else {
      return (
        <h4>You have no orders.</h4>
      )
    }
  }
}

export default OrdersTable;
