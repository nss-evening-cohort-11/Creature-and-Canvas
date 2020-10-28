import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App/App.scss';

import Home from '../components/pages/Home/Home';
import Animals from '../components/pages/Animals/Animals';
import SingleAnimal from '../components/shared/SingleAnimal/SingleAnimal';
import Paintings from '../components/pages/Paintings/Paintings';
import SinglePainting from '../components/shared/SinglePainting/SinglePainting';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <React.Fragment>
            <div className='container'>
              <div className='row'>
                <Switch>
                  <PublicRoute path='/home' exact component={Home} />
                  <PublicRoute path='/animals' exact component={Animals} />
                  <PublicRoute path='/animals/12345' exact component={SingleAnimal} />
                  <PublicRoute path='/paintings' exact component={Paintings} />
                  <PublicRoute path='/paintings/56789' exact component={SinglePainting} />
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
