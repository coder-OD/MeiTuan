/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Navigator
} from 'react-native';

import MainPage from "./app/Main/MainPage.js";
export default class MeiTuan extends Component {
  render() {
    return (

        <Navigator
            initialRoute={{ name: 'MainPage', component: MainPage }}
            configureScene={(route) => {
                return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
            }}
        >

        </Navigator>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
