import React from 'react';
import {} from 'react-native';
// Install this library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './Splash';
import OnboardingScreen from './Onboarding'; 
import NotificationsScreen from './Notifications';
import LoginScreen from './Login';
import HomeScreen from './Home';
import PresenceScreen from './Presence';
import AttendanceScreen from './Attendance';
import AllowanceScreen from './Allowance';
import PerformanceScreen from './Performance';
import NewsScreen from './News';
import FAQScreen from './FAQ';
import RulesScreen from './Rules';
import ActivityScreen from './Activity';
import ProfileScreen from './Profile';
import PersonalInfoScreen from './Personalinfo';
import ChangePassScreen from './ChangePass';
import ApprovalScreen from './Approval';
import TeamScreen from './Team';
import TargetScreen from './Target';


const MainNavigator = createStackNavigator({
    // Every screen in this apps 
    Splash: {screen: SplashScreen},
    Onboarding: {screen: OnboardingScreen},
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    News: {screen: NewsScreen},
    Presence: {screen: PresenceScreen},
    Attendance: {screen: AttendanceScreen},
    Allowance: {screen: AllowanceScreen},
    Performance: {screen: PerformanceScreen},
    FAQ: {screen: FAQScreen},
    Rules: {screen: RulesScreen},
    Notifications: {screen: NotificationsScreen},
    Activity: {screen: ActivityScreen},
    Profile: {screen: ProfileScreen},
    Personalinfo: {screen: PersonalInfoScreen},
    ChangePass: {screen: ChangePassScreen},
    Approval: {screen: ApprovalScreen},
    Team: {screen: TeamScreen},
    Target: {screen: TargetScreen},

}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);
