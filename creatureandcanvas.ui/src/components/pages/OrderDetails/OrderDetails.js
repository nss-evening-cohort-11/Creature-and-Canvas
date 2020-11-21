import React from 'react';
import './OrderDetails.scss';
import productOrdersData from '../../../helpers/data/productOrdersData';
import DetailsTable from '../../../components/shared/DetailsTable/DetailsTable';

class OrderDetails extends React.Component {
  state = {
    productOrders: [],
  };

  componentDidMount() {
    const customerId = this.props.match.params.customerId;
    productOrdersData.getOrderDetailsByCustomerId(customerId)
    .then((productOrders) => this.setState({ productOrders }))
      .catch((err) => console.log(err));
  }


  render() {
    const { productOrders } = this.state;
    const buildDetailsTable = productOrders.map((productOrder) => {
      return <DetailsTable key={productOrder.customerId} productOrder={productOrder}/>
    });

    return (
      <div className='OrderDetails'>
        <h1>Order Details</h1>
        <div className='DetailsTable mb-5'>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Item</th>
                <th scope='col'>Price</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {buildDetailsTable}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OrderDetails;
