import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    StyleSheet
} from 'react-native';

export default class FAQScreen extends Component{
    
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>FAQ</Text>
                {/* FAQ */}
                <Text style={styles.textFAQHeading}>Frequently Asked Questions</Text>
                <Image 
                    style={{width: 50, height: 50, left: 257, top: 51}}
                    source={require('../../assets/images/V_FAQ.png')}
                /> 
                <View style={styles.testRectangleButtonPayslip}> 
                    <Text style={{textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize: 24, color: '#262734'}}
                          onPress={()=>this.props.navigation.navigate('Payslip')}>Payslip</Text>
                </View>
                <View style={styles.testRectangleButtonSubmission}>
                <Text style={{textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize: 24, color: '#262734'}}
                      onPress={()=>this.props.navigation.navigate('Submission')}>Submission</Text>
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
    textFAQHeading:{
        position: 'absolute',       
        left: 25,
        top: 68,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,    
        color: '#262734'
    },
    testRectangleButtonPayslip:{
        position: 'absolute',
        justifyContent: 'center',
        width: 310,
        height: 100,
        left: 25,
        top: 106,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    },
    testRectangleButtonSubmission:{
        position: 'absolute',
        justifyContent: 'center',
        width: 310,
        height: 100,
        left: 25,
        top: 215,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    },


})