import React, { Component } from 'react';
import{
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class OnboardingScreen extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View style={styles.container}>                
                <Image style={styles.v_onboarding} source={require('../../assets/images/V_Onboarding1.png')}></Image>
                <Text style={styles.heading1Text}>Analyze</Text>
                <Text style={styles.heading2Text}>We put a well thought out strategy behind every decision we make.</Text>
                <TouchableOpacity style={styles.buttonNext}>
                    <Text style={styles.buttonNextText} onPress={()=>this.props.navigation.navigate('Login')}>Next</Text>
                </TouchableOpacity>
                <Text style={styles.skipText}>Skip</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,        
        backgroundColor: '#099F84'
    },
    v_onboarding:{
        position: 'absolute',
        width: 235,
        height: 235,
        left: 63,
        top: 134,
    },
    heading1Text:{        
        position: 'absolute',
        width: 155,
        height: 54,
        left: 102,
        top: 369,
        fontFamily: 'Poppins-Black',
        fontSize: 36,
        lineHeight: 54,
        color: '#fff'
    },
    heading2Text:{  
        position: 'absolute',
        width: 255,
        height: 36,
        left: 52,
        top: 423,
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 18,
        color: '#fff',
    },
    buttonNext:{
        position: 'absolute',
        width: 57,
        height: 18,
        left: '75%',
        top: '90%',
        backgroundColor: '#fbb03b',
        borderRadius: 10
    },
    buttonNextText:{
        // position: 'absolute',
        textAlign: 'center',
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        lineHeight: 18,
        color: '#262734'
    },
    skipText:{
        position: 'absolute',
        width: 57,
        height: 18,
        left: '10%',
        top: '90%',
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        lineHeight: 18,
        color: '#fff'
    }
})