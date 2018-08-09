import React from 'react';
import { StyleSheet, Text, View,AppRegistry} from 'react-native';
import LogIn from './scr/LogIn/LogIn';
import SignIn from './scr/SignIn/SignIn';
import LoginForm from './scr/LoginForm/LoginForm';
//import {StackNavigator,createStackNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      
      <LogIn/>
    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

