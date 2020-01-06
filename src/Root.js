import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Form from './components/Form';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="Root">
          <Scene key="Form" component={Form} initial hideNavBar/>
        </Scene>
      </Router>
    );
  }
}
