import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';

import fbConnection from "../helpers/data/connection";

import Login from '../components/pages/Login/Login';
import OurNavbar from '../components/shared/OurNavbar/OurNavbar';
import Shop from '../components/pages/Shop/Shop';
import ShopSearch from '../components/pages/ShopSearch/ShopSearch';
import Home from '../components/pages/Home/Home';
import Animals from '../components/pages/Animals/Animals';
import AnimalsPaintings from '../components/pages/AnimalPaintings/AnimalPaintings'
import SinglePaintings from '../components/pages/SinglePaintings/SinglePaintings';
import OurFooter from '../components/shared/OurFooter/OurFooter';
import Register from '../components/pages/Register/Register'

fbConnection();

// const PublicRoute = ({ component: Component, authed, ...rest }) => {
//   const routeChecker = (props) => (authed === false
//     ? (<Component {...props} />)
//     : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
//   return <Route {...rest} render={(props) => routeChecker(props)} />;
// };

class App extends React.Component {
  // state = {authed: false,}

  // componentDidMount() {
  //   this.removeListener = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ authed: true });
  //     } else {
  //       this.setState({ authed: false });
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this.removeListener();
  // }

  render() {
    //const { authed } = this.state;

    return (
      <div className='App'>
        <BrowserRouter>
          <React.Fragment>
            <OurNavbar/>
            <div className='container d-flex justify-content-center'>
              <div className='row w-100'>
                <Switch>
                  <Route path='/login' component={Login}/>
                  <Route path='/register' exact component={Register}/>
                  <Route path='/shop' exact component={Shop}/>
                  <Route path='/shop/:animalId' exact component={Shop}/>
                  <Route path='/shop/search/:keyword' exact component={ShopSearch}/>
                  <Route path='/home' exact component={Home}/>
                  <Route path='/animals' exact component={Animals}/>
                  <Route path='/animals/paintings/:animalId' exact component={AnimalsPaintings}/>
                  <Route path='/paintings/:itemId' exact component={SinglePaintings}/>
                  <Redirect from='*' to='/home' />
                </Switch>
              </div>
            </div>
            <OurFooter/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
