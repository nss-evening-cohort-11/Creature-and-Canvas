import React from 'react';
import './OrderHistory.scss';
import { Link } from 'react-router-dom';
import OrdersTable from '../../shared/OrdersTable/OrdersTable';
import ordersData from '../../../helpers/data/ordersData';

class OrderHistory extends React.Component {
  state = {
    orders: [],
  };

  grabIdThenGetOrders = () => {
    const customerId = this.props.customerId.customerId;
    ordersData.getOrdersByCustomerId(customerId)
    .then(orders => this.setState({ orders }))
// order data get all orders isCompleted and not isDeleted
  }

  componentDidMount() {
    this.grabIdThenGetOrders();
;  }

  render() {
    const { orders } = this.state;
    const buildOrdersTable = orders.map((order) => {
      return <OrdersTable key={order.orderID} order={order} />;
    });

    return (
      <div className='OrderHistory mt-3 mx-auto'>
        <h1 className='OrderHistory mb-5'>Order History</h1>
        <div className='OrdersTable mb-5'>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Order Date</th>
                <th scope="col">Total</th>
                <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
            {buildOrdersTable}
            </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default OrderHistory;
