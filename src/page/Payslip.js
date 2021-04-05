import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class PayslipScreen extends Component{
    
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Payslip</Text>
                {/* Payslip */}
                <Text style={styles.textSalaryHeading}>Salary</Text>
                <View style={styles.rectangleSalary}>
                    <View style={styles.ellipseSalary}>
                        <Image 
                            style={{width: 60, height: 60}}
                            source={require('../../assets/images/Icon_Salary.png')}
                        />
                    </View>
                    <Text style={{top: 10, left: 90, fontFamily: 'Poppins-Black', fontSize: 24}}>Rp. 10.510.000</Text>
                    <Text style={{left: 90,fontFamily: 'Poppins-Bold', fontSize: 12}}>in Total</Text>
                </View>
                {/* Salary Information */}
                <Text style={styles.textSalaryInformationHeading}>Salary information</Text>
                <View style={styles.rectangleSalaryInformation}>

                </View>
                {/* Previous Payslip */}
                <Text style={styles.textPreviousPayslip}>Previous Payslip</Text>
                
                <TouchableOpacity style={styles.buttonDownload}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, textAlign: 'center', color: '#f9f9fb'}}>Download</Text>
                </TouchableOpacity>
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
    textSalaryHeading:{
        position: 'absolute',      
        left: 25,
        top: 74,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,    
        color: '#262734'
    },
    rectangleSalary:{
        position: 'absolute',
        width: 310,
        height: 70,
        left: 25,
        top: 101,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    },
    ellipseSalary:{
        position: 'absolute',
        justifyContent: 'center',
        width: 70,
        height: 70,      
        backgroundColor: '#f5f9fa',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10
    },
    textSalaryInformationHeading:{
        position: 'absolute',
        left: 25,
        top: 191,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    rectangleSalaryInformation:{ 
        position: 'absolute',
        width: 310,
        height: 100,
        left: 25,
        top: 218,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    },
    textPreviousPayslip:{
        position: 'absolute',
        width: 136,
        height: 24,
        left: 25,
        top: 338,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    buttonDownload:{
        position: 'absolute',
        justifyContent: 'center',
        width: 125,
        height: 30,
        left: 117,
        top: 382,
        backgroundColor: '#F4997C',
        borderRadius: 30
    }
})