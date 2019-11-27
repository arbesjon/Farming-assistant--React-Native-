import React, { Component } from "react";
import { SwitchNavigator } from "react-navigation";
import MainNavigator from "./MainNavigator";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import firebase from 'firebase';
import Config from './Config';
import StyleWrapper from './StyleWrapper';
import IntroScreen from "./IntroScreen";

!firebase.apps.length ? firebase.initializeApp(Config.firebaseConfig) : firebase.app();

//firebase.initializeApp(Config.firebaseConfig);

class App extends Component {
    render() {
        return (
            <StyleWrapper>
        <AppNavigator/>
      </StyleWrapper>);
    }
}

const AppNavigator = SwitchNavigator({
    Intro: { screen: IntroScreen },
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    Main: { screen: MainNavigator }
}, {
    headerMode: 'none'
});

export default App;
