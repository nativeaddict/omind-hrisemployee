import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class PresenceScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <View style={styles.rectangleBack}>
                    <Image
                        style={{position: 'absolute', width: 17, height: 17}}
                        source={require('../../assets/images/arrow-back.png')}
                    />
                </View>
                <Text style={styles.textYourLocation} onPress={()=>this.props.navigation.navigate('Home')}>Your Location</Text>
                <Text style={styles.textCurrentLocation}>Jl. Kenangan IV No. 18</Text>
                {/* Header */}
                <Text style={styles.textClock}>09.09 AM</Text> 
                {/* Information */}
                <View style={styles.rectangleAnnouncement}>
                    <View style={styles.ellipseSmall}></View>
                    <Image 
                        style={{position: 'absolute', left: 7, width: 35, height: 35}}
                        source={require('../../assets/images/Icon_Announcement.png')}/>
                    <Text style={{position: 'absolute', left: 60, width: 115, fontFamily: 'Poppins-Medium', fontSize: 12, lineHeight: 18}}
                    onPress={()=>this.props.navigation.navigate('Home')}>You’re not{'\n'}Clock In yet today!</Text>
                </View>
                {/* Presence */}
                <Text style={styles.textPresenceHeading}>Press the button!</Text>
                <TouchableOpacity style={styles.buttonClockIn}>
                    <Image 
                        style={{top: 10, position: 'absolute', width: 55, height: 55}}
                        source={require('../../assets/images/Icon_ClockIn.png')}
                    /> 
                    <Text style={{top: 65, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#262734'}}>Clock In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonClockOut}>
                    <Image 
                        style={{top: 10, position: 'absolute', width: 55, height: 55}}
                        source={require('../../assets/images/Icon_ClockOut.png')}
                    /> 
                    <Text style={{top: 65, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#262734'}}>Clock Out</Text>
                </TouchableOpacity>
                {/* Feel */}
                <Text style={styles.textFeelHeading}>How was your day?</Text>
                <View style={styles.rectangleFeel}>
                    <Image 
                        style={{width: 70, height: 70}}
                        source={require('../../assets/images/Icon_Happy.png')}/>
                    <Image 
                        style={{width: 70, height: 70}}
                        source={require('../../assets/images/Icon_Sad.png')}/>
                    <Image 
                        style={{width: 70, height: 70}}
                        source={require('../../assets/images/Icon_Sleepy.png')}/>  
                    <Image 
                        style={{width: 70, height: 70}}
                        source={require('../../assets/images/Icon_Confused.png')}/>                       
                </View>
                {/* History */}
                <View style={styles.rectanglePresenceHistory}>
                    <Text style={{left: 30, fontFamily: 'Poppins-Bold', fontSize: 14}} onPress={()=>this.props.navigation.navigate('PresenceHistory')}>Presence History</Text>
                    {/* <View style={{left: 90, position: 'absolute', width: 12, height: 12, borderRadius: 100, backgroundColor: '#099F84'}}/> */}
                    <View style={{left: 270, position: 'absolute', width: 20, height: 20, borderRadius: 100, backgroundColor: '#099F84', alignSelf: 'center'}}>
                        <Image 
                        style={{top: 2, width: 15, height: 15, alignSelf: 'center'}}
                        source={require('../../assets/images/arrow-next.png')}/>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',        
    },
    rectangleBack:{
        position: 'absolute',
        justifyContent:'center',
        width: 15,
        height: 15,
        top: 23,
        left: 22,       
        backgroundColor: '#F2F2F2',
        borderRadius: 2,
    },
    textYourLocation:{
        position: 'absolute',
        left: 47,
        top: 15,
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        lineHeight: 15,
        color: '#262734'
    },
    textCurrentLocation:{
        position: 'absolute',
        width: 244,
        height: 17,
        left: 47,
        top: 29,
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        lineHeight: 18,
        color: '#262734'
    },
    textClock:{
        position: 'absolute',
        width: 113,
        height: 36,
        left: 25,
        top: 83,
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        lineHeight: 36,        
        color: '#099F84'
    },
    rectangleAnnouncement:{
        position: 'absolute',
        justifyContent: 'center',
        width: 186,
        height: 50,
        left: 148,
        top: 76,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1
    },
    ellipseSmall:{ 
        position: 'absolute',
        width: 55,
        height: 50,
        backgroundColor: '#f5f9fa',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10    
    },
    textPresenceHeading:{
        position: 'absolute',
        left: 25,
        top: 136,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    }, 
    buttonClockIn:{
        position: 'absolute',        
        alignItems: 'center',
        width: 85,
        height: 85,
        left: 66,
        top: 164,        
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 1.5
    },
    buttonClockOut:{
        position: 'absolute',    
        alignItems: 'center',
        width: 85,
        height: 85,
        left: 209,
        top: 164,        
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 1.5
    },
    textFeelHeading:{
        position: 'absolute',
        left: 25,
        top: 267,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    }, 
    rectangleFeel:{            
        position: 'absolute',
        justifyContent: 'center',
        flexDirection : 'row',
        width: 310,
        height: 70,
        left: 25,
        top: 295,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    },
    rectanglePresenceHistory:{ 
        position: 'absolute',
        justifyContent: 'center',
        width: 310,
        height: 30,
        left: 25,
        top: 385,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    }

})