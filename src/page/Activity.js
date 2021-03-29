import React, {Component} from 'react';
import {
    Text, 
    View, 
    TextInput, 
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Button,
    Touchable,
    } from 'react-native';


export default class ActivityScreen extends Component{

    // constructor(proops){
    //     super();
    // }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View >
                {/* Navbar */}
                    <View style={styles.selectionMenuActivity}>
                        <Text style={styles.textMenuActivity}>Activity</Text>
                    </View>
                    <Text style={styles.textMenuHome} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                    <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notification')}>Notification</Text>
                </View>
                
                {/* Day View */}
                <Text style={styles.textDate}>Friday, February 5, 2021</Text>

                {/* Calendar Container */}
                <View style={{flexDirection:'row', backgroundColor: '#ffffff', width: 310, height: 55, left: 25, top: 100, borderRadius: 5, elevation: 3}}>
                    <View style={{flexDirection: 'column', width: 45, height: 45, left: 15, top: 4.5, borderRadius: 5,backgroundColor: '#f5f9fa'}}>
                        <TouchableOpacity>
                            <Text style={styles.textDayCalendar}>Mon</Text>
                            <Text style={styles.textDateCalendar}>1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'column', width: 45, height: 45, left: 28, top: 4.5, borderRadius: 5,backgroundColor: '#f5f9fa'}}>
                        <TouchableOpacity>
                            <Text style={styles.textDayCalendar}>Tues</Text>
                            <Text style={styles.textDateCalendar}>2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'column', width: 45, height: 45, left: 41, top: 4.5, borderRadius: 5,backgroundColor: '#f5f9fa'}}>
                        <TouchableOpacity>
                            <Text style={styles.textDayCalendar}>Wed</Text>
                            <Text style={styles.textDateCalendar}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'column', width: 45, height: 45, left: 54, top: 4.5, borderRadius: 5,backgroundColor: '#f5f9fa'}}>
                        <TouchableOpacity>
                            <Text style={styles.textDayCalendar}>Thurs</Text>
                            <Text style={styles.textDateCalendar}>4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'column', width: 45, height: 45, left: 67, top: 4.5, borderRadius: 5,backgroundColor: '#099f84'}}>
                        <TouchableOpacity>
                            <Text style={styles.textDayCalendar}>Fri</Text>
                            <Text style={styles.textDateCalendar}>5</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Task Containar */}
                <View style={{flexDirection: 'row', backgroundColor: '#ffffff', width: 150, height: 105, left: 25, top: 175, position: 'absolute', borderRadius: 10, elevation: 3}}>
                    <Image 
                    style={{width: 89.14, height: 90, top: 6}}
                    source={require('../../assets/images/V_Task.png')} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 36, fontFamily: 'Poppins-Bold', top: 17}}>10</Text>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12}}>Task</Text>
                        <Text style={{fontFamily: 'Poppins-Light', fontSize: 10}}>Details</Text>
                        <Image 
                        source={require('../../assets/images/arrow-next.png')}
                        style={{width: 7, height: 10,left: 40, top: -14}}
                        />  
                    </View>  
                </View>
                
                {/* Target Container */}
                <View style={{flexDirection: 'row', backgroundColor: '#ffffff', width: 150, height: 105, left: 185, top: 175, position: 'absolute', borderRadius: 10, elevation: 3}}>
                    <Image 
                    style={{width: 100.03, height: 160, top: -23}}
                    source={require('../../assets/images/V_Target.png')} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, top: 30, left: -15}}>Target</Text>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 10, top: 28, left: -15}}>this month</Text>
                        <Text style={{fontSize: 10, fontFamily: 'Poppins-Light', top: 35, left: -15}}>Details</Text>
                        <Image 
                        source={require('../../assets/images/arrow-next.png')}
                        style={{width: 7, height: 10, top:21, left: 25}} />
                    </View>
                </View>
                
                {/* Text Meeting */}
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 25, top: 300, position: 'absolute'}}>Meeting</Text>
                
                {/* Meeting Container */}
                <View style={{backgroundColor: '#ffffff', width: 310, height: 100, left: 25, top: 328, position: 'absolute', borderRadius: 10,elevation: 3}}>
                    <Image 
                    style={{width: 106, height: 100, left: -6}}
                    source={require('../../assets/images/V_Meeting.png')} />
                    <Text style={{top: -90, left: 110, fontFamily: 'Poppins-Bold', fontSize: 14}}>Sprint Retropective</Text>
                    <Text style={{top: -90, left: 110, fontFamily: 'Poppins-Medium', fontSize: 14}}>Weekly Retrosprective</Text>
                    <Text style={{fontFamily: 'Poppins-Light', fontSize: 10, left: 110, top: -90}}>3.40 PM</Text>
                    <Text style={{fontFamily: 'Poppins-Light', fontSize: 10, left: 110, top: -90}}>Friday, February 20, 2021</Text>
                </View>
                
                {/* Ourteam Text */}
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 25, top: 448, position: 'absolute'}}
                onPress={()=>this.props.navigation.navigate('Team')}>Our Team</Text>
                
                {/* Ourteam Container */}
                <View style={{backgroundColor: '#ffffff', width: 310, height: 140, left: 25, top: 476, borderRadius: 10, position: 'absolute', elevation: 3}}>
                    <View style={{top: 34}}>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, textAlign: 'center',  alignSelf: 'center' }}
                        onPress={()=>this.props.navigation.navigate('Team')}>See Our Greatest Team {'\n'} From Omindtech</Text>
                        <Text style={{fontFamily: 'Poppins-Medium', fontSize: 10, top: -60, left: 239}}
                        onPress={()=>this.props.navigation.navigate('Team')} >View More</Text>
                        <Image 
                        style={{width: 7, height: 10, top: -75, left: 295}}
                        source={require('../../assets/images/arrow-next.png')} />
                    </View>
                    <View>
                        <Image 
                        style={{width: 310 , height: 140, top: -71, borderRadius: 10}}
                        source={require('../../assets/images/V_Ourteam.png')} />
                    </View>    
                    
                </View>
                {/* <View style={{position: 'absolute'}}>
                    <View style={{flexDirection: 'row', padding: 5, width: 310, height: 50, backgroundColor:'pink',left:25 , top: 100, borderRadius: 5}}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', height: 44, width: 35, marginLeft: 2.5, top: -2}}>
                            <Text style={styles.textDayCalendar}>Mon</Text>
                            <Text style={styles.textDateCalendar}>1</Text>    
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', height: 44, width: 35, marginLeft: 8, top: -2}}>
                            <Text style={styles.textDayCalendar}>Tues</Text>
                            <Text style={styles.textDateCalendar}>2</Text>    
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', height: 44, width: 35, marginLeft: 8, top: -2}}>
                            <Text style={styles.textDayCalendar}>Wed</Text>
                            <Text style={styles.textDateCalendar}>3</Text>    
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', height: 44, width: 35, marginLeft: 8, top: -2}}>
                            <Text style={styles.textDayCalendar}>Thurs</Text>
                            <Text style={styles.textDateCalendar}>4</Text>    
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: '#099F84', height: 44, width: 35, marginLeft: 8, borderRadius: 5, top: -2}}>
                            <Text style={styles.textDayCalendarActive}>Fri</Text>
                            <Text style={styles.textDateCalendarActive}>5</Text>    
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', height: 44, width: 35, marginLeft: 8, top: -2}}>
                            <Text style={styles.textDayCalendar}>Sat</Text>
                            <Text style={styles.textDateCalendar}>6</Text>    
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff', height: 44, width: 35, marginLeft: 8, top: -2}}>
                            <Text style={styles.textDayCalendar}>Sun</Text>
                            <Text style={styles.textDateCalendar}>7</Text>    
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: 310, height: 105, left: 26, top: 170, backgroundColor: 'rgba(196, 196, 196, 0.4)', position: 'absolute' }}>
                    <View style={{width: 150, height: 105, backgroundColor: '#fff', borderRadius: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image 
                            style={{width: 89.14, height: 90, top: 7}}
                            source={require('../../assets/images/V_Task.png')} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 36, marginTop: 17}}>10</Text>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, marginTop: -19, marginLeft: 3}}>Task</Text>
                                <View style={{flexDirection: 'row',backgroundColor: '#fff', width: 60.42, height: 15}}>  
                                    <Text style={{fontFamily: 'Poppins-Light', fontSize: 10}}>Details</Text>
                                    <Image 
                                    style={{width: 7, height: 10, left: 5, top: 2.5}}
                                    source={require('../../assets/images/arrow-next.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{width: 150, height: 105, backgroundColor: '#fff', marginLeft: 10, borderRadius: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image 
                            style={{width: 100.03, height: 160, top: -21}}
                            source={require('../../assets/images/V_Target.png')} />
                            <View style={{flexDirection: 'column', right: 10, top: 8}}>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, top: 17}}>Target</Text>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, top: 12}}>this</Text>
                                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 12, top: 7}}>month</Text>
                                <View style={{flexDirection: 'row', backgroundColor: '#fff', width: 60.42, height: 15, marginTop: 10}}>
                                    <Text style={{fontFamily: 'Poppins-Light', fontSize: 10}}>Details</Text>
                                    <Image 
                                    style={{width: 7, height: 10, left: 5, top: 2.5}}
                                    source={require('../../assets/images/arrow-next.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{width: 310, height: 128, left: 26, top: 292, backgroundColor: '#FFF', borderTopLeftRadius: 10,borderTopRightRadius: 10 }}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 5}}>Meeting</Text>
                    <View style={{flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 10}}> 
                        <Image 
                        source={require('../../assets/images/V_Meeting.png')}
                        style={{width: 106, height: 100}} />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 11}}>Sprint Retrospective</Text>
                            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, left: 11}}>Weekly Retrospective</Text>
                            <Text style={{fontFamily: 'Poppins-Light', fontSize: 11, left: 11}}>3:40 PM</Text>
                            <Text style={{fontFamily: 'Poppins-Light', fontSize: 11, left: 11}}>Friday, February 20, 2021</Text>
                        </View>
                    </View>
                </View> */}
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
    },
    textMenuActivity:{      
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: '#f9f9fb',
        textAlign: 'center',
    },
    textMenuHome:{
        position: 'absolute',
        left: 158,
        top : 22,
        color: 'rgba(38, 39, 52, 0.4)',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
    textMenuNotification:{
        position: 'absolute',
        left: 245,
        top: 22,      
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: 'rgba(38, 39, 52, 0.4)'
    },
    selectionMenuActivity:{
        justifyContent: 'center',
        position: 'absolute',
        width: 70,
        height: 16,
        left: 49,
        top: 25,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
    textDate:{
        position: 'absolute',
        left: 25,
        top: 75,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        // lineHeight: 149
    },
    boxCalendar:{

    },
    textDayCalendar:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 11,
        textAlign: 'center',
    },
    textDayCalendarActive:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 11,
        color: '#fff',
        textAlign: 'center',
    },
    textDateCalendar:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 11,
        textAlign: 'center',
    },
    textDateCalendarActive:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 11,
        textAlign: 'center',
        color: '#fff',
    },
})
