import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class AttendanceScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Home')}}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{position: 'absolute', width: 17, height: 17}}
                            source={require('../../assets/images/arrow-back.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Attendance</Text>
                {/* Banner */}
                <View style={styles.bannerAttendance}>
                    <Text style={{top: 55, right: 60, fontFamily: 'Poppins-Bold', fontSize: 18, lineHeight: 27, color: '#262734'}}>Stay on track,{'\n'}you Guys!</Text>
                    <Image 
                        style={{bottom: 30, left: 90, width: 105, height: 115}}
                        source={require('../../assets/images/V_BannerAttendance.png')}
                    />                    
                </View>
                {/* Attendance */}
                <Text style={styles.textAttendanceHeading}>Your attendance this month</Text>
                <View style={styles.rectanglePresent}>
                    <View style={styles.ellipsePresent}>
                        <Image 
                            style={{width:70, height:100}}
                            source={require('../../assets/images/Icon_Present.png')}                            
                            />
                    </View>
                    <Text style={{top: 5, left: 85, fontFamily: 'Poppins-Black', fontSize: 48, color: '#f5f9fa'}}>15</Text>
                    <Text style={{top: -20, left: 85, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#f5f9fa'}}>Present</Text>
                </View>

                <View style={styles.rectangleAbsent}>
                    <View style={styles.ellipseAbsent}>
                        <Image
                            style={{width: 55, height: 55}}
                            source={require('../../assets/images/Icon_Absent.png')}
                        />
                    </View>
                    <Text style={{left: 70, top: 8, fontFamily: 'Poppins-Black', fontSize: 36, color: '#f5f9fa'}}>2</Text>
                    <Text style={{left: 70, top: -14, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#f5f9fa'}}>Absent</Text>
                </View>
                <View style={styles.rectanglePercentage}> 
                    <Text style={{left: 10, top: 5, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#f5f9fa'}}>Percentage</Text>
                    <Text style={{left: 10, top: -10, fontFamily: 'Poppins-Black', fontSize: 36, color: '#f5f9fa'}}>70%</Text>
                </View>
                {/* Attendance Recap */}
                <Text style={styles.textAttendanceRecapHeading}>Attendance Recap</Text>
                <FlatList 
                        style={{top: 452, left: 25, flex: 1}}                        
                        showsVerticalScrollIndicator={true}
                        contentContainerStyle={{paddingBottom: 40}}            
                        ListFooterComponent={<View style={{height:410}}/>}
                        data={[
                            {
                                id: 'jan',
                                month: 'January'                                                
                            },
                            {
                                id: 'feb',
                                month: 'February'                                
                            },
                            {
                                id: 'mar',
                                month: 'March'                                
                            },
                            {
                                id: 'apr',
                                month: 'April'                                
                            },
                            {
                                id: 'may',
                                month: 'May'                                
                            },
                            {
                                id: 'jun',
                                month: 'June'                                
                            },
                            {
                                id: 'jul',
                                month: 'July'                                
                            },
                            {
                                id: 'aug',
                                month: 'August'                                
                            },
                            {
                                id: 'sep',
                                month: 'September'                                
                            },
                            {
                                id: 'oct',
                                month: 'October'                                
                            },
                            {
                                id: 'nov',
                                month: 'November'                                
                            },
                            {
                                id: 'dec',
                                month: 'December'                                
                            },
                        ]}                    
                        renderItem={({item}) =>  
                        <TouchableOpacity style={styles.rectangleHistory}>                            
                            <Text 
                            style={{left: 20, fontSize: 14, fontFamily: 'Poppins-SemiBold', color: '#262734'}}                            
                            >
                            {item.month}
                            </Text>
                            <Image 
                            style={{width: 10, height: 10, alignSelf: 'flex-end'}}
                            source={require('../../assets/images/arrow-next2.png')}/>
                        </TouchableOpacity>
                        }                
                    />             
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
        backgroundColor: '#f2f2f2',
        borderRadius: 2,
    },
    textNavigation:{
        position: 'absolute',
        left: 47,
        top: 21,
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,    
        color: '#262734'
    },
    bannerAttendance:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 310,
        height: 140,
        left: 25,
        top: 76,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    },
    textAttendanceHeading:{
        position: 'absolute',
        left: 25,
        top: 236,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734',
    },
    rectanglePresent:{ 
        position: 'absolute',
        justifyContent: 'center',
        width: 151,
        height: 140,
        left: 25,
        top: 264,        
        backgroundColor: '#099F84',
        borderRadius: 10,
    },
    ellipsePresent:{
        position: 'absolute',
        justifyContent: 'center',
        width: 75,
        height: 140,
        backgroundColor: '#F4997C',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10
    },
    rectangleAbsent:{
        position: 'absolute',
        justifyContent: 'center',
        width: 151,
        height: 60,
        left: 185,
        top: 264,
        backgroundColor: '#099F84',
        borderRadius: 10,
    },
    ellipseAbsent:{
        position: 'absolute',
        justifyContent: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#F4997C',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10
    },
    rectanglePercentage:{
        position: 'absolute',
        width: 151,
        height: 74,
        left: 185,
        top: 330,        
        backgroundColor: '#099F84',
        borderRadius: 10,
    },
    textAttendanceRecapHeading:{
        position: 'absolute',
        left: 25,
        top: 424,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    rectangleHistory:{   
        flex: 1,   
        marginBottom: 20,  
        justifyContent: 'center',
        width: 310,
        height: 30,
        // left: 25,
        // top: 121,       
        backgroundColor: '#fff',
        // Change this CSS Shadow
        elevation: 0.5,
        borderRadius: 10,
    }
})