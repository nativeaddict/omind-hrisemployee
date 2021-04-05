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
import PresenceHistoryScreen from './PresenceHistory';
import AttendanceScreen from './Attendance';
import AllowanceScreen from './Allowance';
import PerformanceScreen from './Performance';
import PayslipScreen from './Payslip';
import SubmissionScreen from './Submission';
import SubmissionHistoryScreen from './SubmissionHistory';
import SubmissionApplyScreen from './SubmissionApply';
import NewsScreen from './News';
import FAQScreen from './FAQ';
import RulesScreen from './Rules';
import ActivityScreen from './Activity';
import ProfileScreen from './Profile';
import PersonalInfoScreen from './Personalinfo';
import ChangePassScreen from './ChangePass';
import TeamScreen from './Team';
import TargetScreen from './Target';
import TaskScreen from './Task';
import DetailTaskScreen from './DetailTask';
import DetailNewsScreen from './DetailNews';




const MainNavigator = createStackNavigator({
    // Every screen in this apps 
    Splash: {screen: SplashScreen},
    Onboarding: {screen: OnboardingScreen},
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    News: {screen: NewsScreen},
    Presence: {screen: PresenceScreen},
    PresenceHistory: {screen: PresenceHistoryScreen},
    Attendance: {screen: AttendanceScreen},
    Allowance: {screen: AllowanceScreen},
    Performance: {screen: PerformanceScreen},
    Payslip: {screen: PayslipScreen},
    Submission: {screen: SubmissionScreen},
    SubmissionHistory: {screen: SubmissionHistoryScreen},
    SubmissionApply: {screen: SubmissionApplyScreen},
    FAQ: {screen: FAQScreen},
    Rules: {screen: RulesScreen},
    Notifications: {screen: NotificationsScreen},
    Activity: {screen: ActivityScreen},
    Profile: {screen: ProfileScreen},
    Personalinfo: {screen: PersonalInfoScreen},
    ChangePass: {screen: ChangePassScreen},
    Team: {screen: TeamScreen},
    Target: {screen: TargetScreen},
    Task: {screen: TaskScreen},
    DetailTask: {screen: DetailTaskScreen},
    DetailNews: {screen: DetailNewsScreen},

}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);
