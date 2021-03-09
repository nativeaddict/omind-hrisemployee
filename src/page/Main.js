import React, { Component } from 'react';
import {} from 'react-native';
// Install this library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './Splash';
import OnboardingScreen from './Onboarding'; 
import LoginScreen from './Login';

const MainNavigator = createStackNavigator({
    // Every screen in this apps 
    Splash: {screen: SplashScreen},
    Onboarding: {screen: OnboardingScreen},
    Login: {screen: LoginScreen}
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});
export default createAppContainer(
    MainNavigator
);
