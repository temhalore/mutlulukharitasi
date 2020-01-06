import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
import Root from './src/Root'
import Form from './src/components/Form'
import { Router, Scene,Actions } from 'react-native-router-flux'


export default class App extends Component {
  render() {
    return (
      <Root />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});