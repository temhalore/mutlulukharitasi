import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Form from './components/Form';
import Map from './components/Map';
import Sonuc from './components/Sonuc';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Scene key="Root">
          <Scene key="Form" component={Form} initial hideNavBar/>
          <Scene key="Map" component={Map} hideNavBar/>
          <Scene key="Sonuc" component={Sonuc} hideNavBar/>
        </Scene>
      </Router>
    );
  }
}
