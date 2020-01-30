import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Form from './components/Form';
import Map from './components/Map';
import Sonuc from './components/Sonuc';
import Paylas from './components/Paylas';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="Root">
          <Scene key="Form" component={Form} initial hideNavBar/>
          <Scene key="Map" component={Map} hideNavBar/>
          <Scene key="Sonuc" component={Sonuc} hideNavBar/>
          <Scene key="Paylas" component={Paylas} initial hideNavBar/>
        </Scene>
      </Router>
    );
  }
}
