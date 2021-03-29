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
})