import React from 'react';

class OrderDetails extends React.Component {
  render() {
    return (
      <div className="OrderDetails">
        <h1>Order Details</h1>
        <div className='DetailsTable mb-5'>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            
            </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default OrderDetails;