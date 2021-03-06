import React from 'react';
import './UserProfile.scss';
import authData from '../../../helpers/data/authData';
import OrderHistory from '../OrderHistory/OrderHistory';



class UserProfile extends React.Component {
  state = {
    customer: {},
  }

  componentDidMount() {
    const { customerId } = this.props.match.params;
    authData.getUserInfo(customerId)
      .then(response => this.setState({customer: response}))
      .catch(err => console.log(err))
  }

  render() {
    const { customer } = this.state;
    return (
      <div className="SinglePaintingView">
        <div className="card w-100 mb-8 mx-auto">
          <div className="card-body">
            <h5 className="card-title">Hello {customer.firstName} {customer.lastName}</h5>
            <p className="card-text">Email Address: {customer.emailAddress}</p>
            <p className="card-text">Mailing Address {customer.mailingAddress}</p>
          </div>
        </div>
        <OrderHistory customerId={this.props.match.params} customer={this.state.customer}/>
      </div>
    );
  }
}

export default UserProfile;