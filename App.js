/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducer,compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './src/reducers'
import AppContainer from './src/containers/AppContainer'
const loggerMiddleware=createLogger({predicate:(getState,action)=>__DEV__});
function configureStore(initialState){
  const enhancer=compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer,initialState,enhancer)
}
//store used when you want to provide initial state to your app
const store =configureStore({});
export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
     <AppContainer/>
      </Provider>
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
