import React, {Component} from 'react';
import {
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    FlatList,
    ScrollView,
    StatusBar,
    Button
    } 
from 'react-native';


export default class HomeScreen extends Component{
    
    constructor(props){
        super();
    }
    render(){ 
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    {/* Navbar */}
                    <Text style={styles.textMenuActivity} onPress={()=>this.props.navigation.navigate('Activity')}>Activity</Text>
                    <View style={styles.selectionMenuHome}>
                        <Text style={styles.textMenuHome}>Home</Text>
                    </View>
                    <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notifications')}>Notification</Text>
                    {/* Name */}   
                    <Text style={styles.textNameHeading} 
                    onPress={()=>this.props.navigation.navigate('Profile')} >Hello, Barud Tampubolon!</Text>
                        {/* Profile Picture */}
                    {/* MASIH BUG PENCET FOTO BELOM KE NAVIGATE */}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                        <Image style={styles.iconProfilePicture}
                        source={require('../../assets/images/I_ProfilePicture_Barud.png')} 
                        />
                    </TouchableOpacity>    

                    {/* Menu */}
                    <View style={{flexDirection: 'row'}}> 
                        {/* Presence */}
                        <View style={styles.rectangleMenuPresence}>
                            <Image 
                            style={{width: 50, height: 50, alignSelf: 'center'}}
                            source={require('../../assets/images/Icon_Presence.png')}/>
                            <Text 
                            style={{fontSize: 10, textAlign: 'center', fontFamily: 'Poppins-SemiBold', lineHeight: 20, color: '#262734'}}
                            onPress={()=>this.props.navigation.navigate('Presence')}
                            >
                            Presence
                            </Text>
                        </View>
                        {/* Attendance */}
                        <View style={styles.rectangleMenuAttendance}>
                            <Image 
                            style={{width: 50, height: 50, alignSelf: 'center'}}
                            source={require('../../assets/images/Icon_Attendance.png')}/>
                            <Text 
                            style={{fontSize: 10, textAlign: 'center', fontFamily: 'Poppins-SemiBold', lineHeight: 20, color: '#262734'}}
                            onPress={()=>this.props.navigation.navigate('Attendance')}
                            >
                            Attendance
                            </Text>
                        </View>
                        {/* Allowance */}
                        <View style={styles.rectangleMenuAllowance}>
                            <Image 
                            style={{width: 50, height: 50, alignSelf: 'center'}}
                            source={require('../../assets/images/Icon_Allowance.png')}/>
                            <Text 
                            style={{fontSize: 10, textAlign: 'center', fontFamily: 'Poppins-SemiBold', lineHeight: 20, color: '#262734'}}
                            onPress={()=>this.props.navigation.navigate('Allowance')}
                            >
                            Allowance
                            </Text>
                        </View>
                        {/* Perfomance */}
                        <View style={styles.rectangleMenuPerformance}>
                            <Image 
                            style={{width: 50, height: 50, alignSelf: 'center'}}
                            source={require('../../assets/images/Icon_Perfomance.png')}/>
                            <Text 
                            style={{fontSize: 10, textAlign: 'center', fontFamily: 'Poppins-SemiBold', lineHeight: 20, color: '#262734'}}
                            onPress={()=>this.props.navigation.navigate('Performance')}
                            >
                                Performance
                            </Text>            
                        </View>
                        {/* Payslip */}
                        <View style={styles.rectangleMenuPayslip}>
                            <Image 
                            style={{width: 50, height: 50, alignSelf: 'center'}}
                            source={require('../../assets/images/Icon_Salary.png')}/>
                            <Text 
                            style={{fontSize: 10, textAlign: 'center', fontFamily: 'Poppins-SemiBold', lineHeight: 20, color: '#262734'}}
                            onPress={()=>this.props.navigation.navigate('Presence')}
                            >
                            Payslip
                            </Text>                               
                        </View>
                        {/* Submission */}
                        <View style={styles.rectangleMenuSubmission}>
                            <Image 
                            style={{width: 50, height: 50, alignSelf: 'center'}}
                            source={require('../../assets/images/Icon_Submission.png')}/>
                            <Text 
                            style={{fontSize: 10, textAlign: 'center', fontFamily: 'Poppins-SemiBold', lineHeight: 20, color: '#262734'}}
                            onPress={()=>this.props.navigation.navigate('Presence')}
                            >
                            Submission
                            </Text>                        
                        </View>
                    </View>           

                    {/* News */}
                    <Text style={styles.textNewsHeading}>News for you</Text>
                    <Text style={styles.textNewsSeeMore} onPress={()=>this.props.navigation.navigate('News')}>See More</Text>
                    {/* News Column 1 */}
                    <View style={styles.rectangleNews}>
                        <Text style={styles.textDateNews}>Tuesday, Februari 23</Text>
                        <Text style={styles.textHeadlineNews}>Emergency Covid19 at Office</Text>
                        <Image 
                            style={{position: 'absolute', width: 110, height: 140}}
                            // style={styles.ellipseOrnamentBig}
                            source={require('../../assets/images/Test-BannerImageNews.png')}/>
                        <View style={styles.ellipseOrnamentBig}/>
                    </View>

                    {/* Guideline */}
                    <Text style={styles.textGuidelineHeading}>Guideline</Text>                    
                    <View style={styles.rectangleFAQ}>                                            
                        <View style={styles.ellipseOrnamentSmall}/>  
                        <Image 
                            style={{position: 'absolute', margin: -10, width: 85, height: 85}}                        
                            source={require('../../assets/images/Icon_FAQ.png')}/> 
                        <Text 
                            style={{left: 90, fontFamily: 'Poppins-Bold', fontSize: 14, lineHeight: 21, color: '#262734'}}
                            onPress={()=>this.props.navigation.navigate('FAQ')}>
                                Frequently Asked Questions
                        </Text>                                                
                    </View>                
                    <View style={styles.rectangleRules}>
                        <View style={styles.ellipseOrnamentSmall}/>
                        <Image 
                            style={{position: 'absolute', top: -7, left: -15, width: 85, height: 85}}                        
                            source={require('../../assets/images/Icon_Rules.png')}/>    
                        <Text 
                            style={{left: 90, fontFamily: 'Poppins-Bold', fontSize: 14, lineHeight: 21, color: '#262734'}}
                            onPress={()=>this.props.navigation.navigate('Rules')}>
                                Omindtech Rules
                        </Text>
                    </View>
                </View> 
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb'
        // paddingTop: StatusBar.currentHeight
    },
    textMenuActivity: {
        position: 'absolute',
        left: 55,
        top: 22,       
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(38, 39, 52, 0.4)'
    },
    textMenuHome: {        
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21

    },
    textMenuNotification: {
        position: 'absolute',
        left: 245,
        top: 22,      
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(38, 39, 52, 0.4)'
    },
    selectionMenuHome:{
        justifyContent: 'center',
        position: 'absolute',
        width: 56,
        height: 16,
        left: 152,
        top: 25,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
    textNameHeading:{
        position: 'absolute',       
        left: 25,
        top: 83,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    textNewsHeading:{
        position: 'absolute',
        left: 25,
        top: 211,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    textNewsSeeMore:{
        position: 'absolute',
        left: 288,
        top: 218,
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
        lineHeight: 15,
        color: '#262734'
    },
    textDateNews:{
        position: 'absolute',
        height: 15,
        left: 120,
        top: 30,
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
        lineHeight: 15,
        color: '#262734'
    },
    textHeadlineNews:{
        position: 'absolute',
        width: 165,
        height: 50,
        left: 120,
        top: 50,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    iconProfilePicture:{
        position: 'absolute',
        width: 25,
        height: 25,
        left: 310,
        top: 81,
        borderRadius: 5
    },
    rectangleMenuPresence:{        
        position: 'absolute',
        justifyContent: 'flex-end',
        width: 70,
        height: 70,
        left: 25,
        top: 121,       
        backgroundColor: '#fff',
        // Change this CSS Shadow
        elevation: 5,
        borderRadius: 10,
    },
    rectangleMenuAttendance:{
        position: 'absolute',
        width: 70,
        height: 70,
        left: 110,
        top: 121, 
        backgroundColor: '#fff',
        // Change this CSS Shadow
        elevation: 5,
        borderRadius: 10,
    },
    rectangleMenuAllowance:{
        position: 'absolute',
        width: 70,
        height: 70,
        left: 195,
        top: 121,
        backgroundColor: '#fff',
        // Change this CSS Shadow
        elevation: 5,
        borderRadius: 10,
    },
    rectangleMenuPerformance:{
        position: 'absolute',
        width: 70,
        height: 70,
        left: 280,
        top: 121,
        backgroundColor: '#fff',
        // Change this CSS Shadow
        elevation: 5,
        borderRadius: 10,
    },
    rectangleMenuPayslip:{
        position: 'absolute',
        width: 70,
        height: 70,
        left: 365,
        top: 121,
        backgroundColor: '#fff',
        // Change this CSS Shadow
        elevation: 5,
        borderRadius: 10,
    },
    rectangleMenuSubmission:{
        position: 'absolute',
        width: 70,
        height: 70,
        left: 450,
        top: 121,
        backgroundColor: '#fff',
        // Change this CSS Shadow
        elevation: 5,
        borderRadius: 10,
    },
    rectangleNews:{
        position: 'absolute',
        width: 310,
        height: 140,
        left: 25,
        top: 239,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5
    },
    textGuidelineHeading:{
        position: 'absolute',
        left: 25,
        top: 406,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    rectangleFAQ:{
        position: 'absolute',
        justifyContent: 'center',
        width: 310,
        height: 70,
        left: 25,
        top: 434,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10
    },
    ellipseOrnamentSmall:{
        position: 'absolute',
        width: 70,
        height: 70,
        backgroundColor: '#099f84',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10
    },
    ellipseOrnamentBig:{
        position: 'absolute',
        width: 110,
        height: 140,
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: 'rgba(9, 159, 132, 0.5)'
    },
    rectangleRules:{
        position: 'absolute',
        justifyContent: 'center',
        width: 310,
        height: 70,
        left: 25,
        top: 514,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10
    }
    
})