/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react"
import {Platform, StyleSheet, Text, View} from "react-native"
import {createStackNavigator, createAppContainer} from "react-navigation"
import HomeScreen from "./screens/HomeScreen"
import DetailScreen from "./screens/DetailScreen"
import ExampleScreen from "./screens/ExampleScreen"

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Example: {
    screen: ExampleScreen
  },
  Detail: {
    screen: DetailScreen
  }
},
{
  defaultNavigationOptions: {
    header: null
  },
})

const App = createAppContainer(MainNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
