import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    StyleSheet
} from 'react-native';

export default class AllowanceScreen extends Component{
    
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Allowance</Text>
                {/* Banner */}
                <View style={styles.bannerAttendance}>
                    <Text style={{top: 55, left: 60, fontFamily: 'Poppins-Bold', fontSize: 18, lineHeight: 27, color: '#262734'}}>Know your{'\n'}benefits here!</Text>
                    <Image 
                        style={{bottom: 30, right: 90, width: 105, height: 115}}
                        source={require('../../assets/images/V_BannerAllowance.png')}
                    />                    
                </View>
                {/* Type Allowance */}
                {/* THR */}
                <View style={styles.rectangleTHR}> 
                    <Image style={styles.iconProfilePicture}
                        style={{width: 65, height: 65, alignSelf: 'flex-start'}}
                        source={require('../../assets/images/Icon_AllowanceTHR.png')}
                        
                    /> 
                    <Text style={{bottom: 55, left: 75, fontFamily: 'Poppins-Medium', color: '#262734'}}>Tunjangan Hari Raya</Text>
                    <Text style={{bottom: 58, left: 75, fontFamily: 'Poppins-Bold', color: '#262734'}}>Rp. 5000000</Text>
                </View>
                {/* Meal */}
                <View style={styles.rectangleMeal}>                 
                    <Image style={styles.iconProfilePicture}
                        style={{width: 60, height: 60, alignSelf: 'flex-start'}}
                        source={require('../../assets/images/Icon_AllowanceMeal.png')} 
                    />  
                    <Text style={{bottom: 50, left: 65, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>Meal</Text>
                    <Text style={{bottom: 50, left: 65, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#fff'}}>Rp. 500000</Text>
                </View>
                {/* Health */}
                <View style={styles.rectangleHealth}> 
                    <Image style={styles.iconProfilePicture}
                        style={{top: 5, width: 50, height: 50, alignSelf: 'flex-start'}}
                        source={require('../../assets/images/Icon_AllowanceHealth.png')} 
                    />  
                    <Text style={{bottom: 40, left: 55, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>Health</Text>
                    <Text style={{bottom: 40, left: 55, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#fff'}}>Rp. 500000</Text>
                </View>
                {/* Overtime */}
                <View style={styles.rectangleOvertime}> 
                    <Image style={styles.iconProfilePicture}
                        style={{top: 5, width: 50, height: 50, alignSelf: 'flex-start'}}
                        source={require('../../assets/images/Icon_AllowanceOvertime.png')} 
                    />
                    <Text style={{bottom: 40, left: 55, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>Overtime</Text>
                    <Text style={{bottom: 40, left: 55, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#fff'}}>Rp. 500000</Text>
                </View>
                {/* Transport */}
                <View style={styles.rectangleTransport}> 
                    <Image style={styles.iconProfilePicture}
                        style={{top: 5, width: 50, height: 50, alignSelf: 'flex-start'}}
                        source={require('../../assets/images/Icon_AllowanceTransport.png')} 
                    />  
                    <Text style={{bottom: 40, left: 55, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>Transport</Text>
                    <Text style={{bottom: 40, left: 55, fontFamily: 'Poppins-Bold', fontSize: 12, color: '#fff'}}>Rp. 500000</Text>
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
    rectangleTHR:{
        position: 'absolute',        
        width: 310,
        height: 60,
        left: 25,
        top: 235,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 0.5
    },
    rectangleMeal:{
        position: 'absolute',        
        width: 150,
        height: 60,
        left: 25,
        top: 305,        
        backgroundColor: '#054FFF',
        borderRadius: 10,
        elevation: 1.5
    },
    rectangleHealth:{
        position: 'absolute',
        width: 150,
        height: 60,
        left: 185,
        top: 305,        
        backgroundColor: '#FBB03B',
        borderRadius: 10,    
        elevation: 1.5    
    },
    rectangleTransport:{
        position: 'absolute',
        width: 150,
        height: 60,
        left: 25,
        top: 375,
        backgroundColor: '#23395d',
        borderRadius: 10,
        elevation: 1.5
    },
    rectangleOvertime:{
        position: 'absolute',
        width: 150,
        height: 60,
        left: 185,
        top: 375,        
        backgroundColor: '#f15a25',
        borderRadius: 10,   
        elevation: 1.5           
    },
})