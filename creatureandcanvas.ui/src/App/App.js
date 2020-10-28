import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';

import Home from '../components/pages/Home/Home';
import Animals from '../components/pages/Animals/Animals';
import SingleAnimal from '../components/shared/SingleAnimal/SingleAnimal';
import Paintings from '../components/pages/Paintings/Paintings';
import SinglePainting from '../components/shared/SinglePainting/SinglePainting';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {authed: true,}
  render() {
    const { authed } = this.state;

    return (
      <div className='App'>
        <BrowserRouter>
          <React.Fragment>
            <div className='container'>
              <div className='row'>
                <Switch>
                  <PublicRoute path='/home' exact component={Home} authed={authed}/>
                  <PublicRoute path='/animals' exact component={Animals} authed={authed}/>
                  <PublicRoute path='/animals/12345' exact component={SingleAnimal} authed={authed}/>
                  <PublicRoute path='/paintings' exact component={Paintings} authed={authed}/>
                  <PublicRoute path='/paintings/56789' exact component={SinglePainting} authed={authed}/>
                  <Redirect from='*' to='/home' />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
