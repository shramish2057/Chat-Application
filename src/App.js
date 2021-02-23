import React from 'react';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects

class AppContainer extends React.Component {

  componentWillMount() {
    this.checkForSavedAuth();
  }

  constructor() {
    super();
    firebase.initializeApp({
    apiKey: "AIzaSyDXvBQV_gcoCgJ4aymNlSjpbpPW2oumPTo",
    authDomain: "chatapp-11d96.firebaseapp.com",
    projectId: "chatapp-11d96",
    storageBucket: "chatapp-11d96.appspot.com",
    messagingSenderId: "718686552404",
    appId: "1:718686552404:web:1aee4e1e23d827e0b8c8c1",
    measurementId: "G-6JH6G5MK1C"
    });
    this.db = firebase.firestore();
    this.state = {
      user: null
    };
}

  render() {
    if(this.state.user)
      return <DashboardComponent user={this.state.user}></DashboardComponent>
    else
      return <SignupComponent loginFn={this.loggedIn}></SignupComponent>
  }

  checkForSavedAuth = () => {
    console.log(firebase.auth().currentUser);
  };

  loggedIn = (user) => this.setState({ user: user });

}

export default AppContainer;
