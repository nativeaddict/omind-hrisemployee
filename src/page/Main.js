import React from 'react';
import {} from 'react-native';
// Install this library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './Splash';
import OnboardingScreen from './Onboarding'; 
import LoginScreen from './Login';
import HomeScreen from './Home';
import ActivityScreen from './Activity';
import ProfileScreen from './Profile';
import NotificationsScreen from './Notifications';
import FAQScreen from './FAQ';

// export default class Main extends React.Component{
//     render(){
//     return <AppContainer/>
//     }
// }
// const AppNavigator = createStackNavigator({
//     Splash: {screen: SplashScreen},
//     Onboarding: {screen: OnboardingScreen},
//     Login: {screen: LoginScreen},
//     Home: {screen: HomeScreen},
//     NotificationsScreen: {screen: NotificationsScreen},
//     Activity: {screen: ActivityScreen},
//     Profile: {screen: ProfileScreen},
//     FAQ: {screen: FAQScreen}
//   });

//   const AppContainer = createAppContainer(AppNavigator);

const MainNavigator = createStackNavigator({
    // Every screen in this apps 
    Splash: {screen: SplashScreen},
    Onboarding: {screen: OnboardingScreen},
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    Notifications: {screen: NotificationsScreen},
    Activity: {screen: ActivityScreen},
    Profile: {screen: ProfileScreen},
    FAQ: {screen: FAQScreen}

}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);
