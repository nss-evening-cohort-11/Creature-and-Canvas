import React from 'react';
import './OrderHistory.scss';
import { Link } from 'react-router-dom';
import OrdersTable from '../../shared/OrdersTable/OrdersTable';

class OrderHistory extends React.Component {
  state = {
    orders: [],
  };

  componentDidMount() {
// order data get all orders isCompleted and not isDeleted
  }

  render() {
    const { orders } = this.state;
    // const buildOrdersTable = orders.map((order) => {
    //   return <OrdersTable key={order.orderId} order={order} />;
    // });

    return (
      <div className='OrderHistory mt-3 mx-auto'>
        <h1 className='OrderHistory mb-5'>Order History</h1>
        <OrdersTable/>
      </div>
    );
  }
}

export default OrderHistory;
