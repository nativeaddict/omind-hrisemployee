import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class SubmissionApplyScreen extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                 {/* Navbar */}
                 <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Submission')}}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{position: 'absolute', width: 17, height: 17}}
                            source={require('../../assets/images/arrow-back.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Submission')}>Submission Apply</Text>
                <Text style={styles.textFormHeading}>Fill out the form</Text>
                {/* Form */}
                <View style={styles.rectangleForm}>
                    <Text style={{top: 5, left: 10, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>Leave type</Text>
                    <View style={{top: 5, left: 10, width: 290, height: 20, borderColor: '#fff', borderWidth: 1, borderRadius: 5}} accessibilityRole='combobox'>

                    </View>

                    <Text style={{top: 5, left: 10, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>Start date</Text>
                    <View style={{top: 5, left: 10, width: 290, height: 20, borderColor: '#fff', borderWidth: 1, borderRadius: 5}} accessibilityRole='combobox'>

                    </View>

                    <Text style={{top: 5, left: 10, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>End date</Text>
                    <View style={{top: 5, left: 10, width: 290, height: 20, borderColor: '#fff', borderWidth: 1, borderRadius: 5}} accessibilityRole='combobox'>

                    </View>

                    <Text style={{top: 5, left: 10, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>Description</Text>
                    <View style={{top: 5, left: 10, width: 290, height: 20, borderColor: '#fff', borderWidth: 1, borderRadius: 5}} accessibilityRole='combobox'>

                    </View>

                    <Text style={{top: 5, left: 10, fontFamily: 'Poppins-Medium', fontSize: 12, color: '#fff'}}>File upload</Text>
                    <View style={{top: 5, left: 10, width: 290, height: 20, borderColor: '#fff', borderWidth: 1, borderRadius: 5}} accessibilityRole='combobox'>
                        
                    </View>
                    <TouchableOpacity style={styles.buttonSubmit}>
                        <Text style={{fontFamily: 'Poppins-Bold', color: '#f5f9fa', fontSize: 14,}}>Submit</Text>
                    </TouchableOpacity>
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
    textFormHeading:{
        position: 'absolute',
        left: 24,
        top: 69,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,    
        color: '#262734'
    },
    rectangleForm:{
        position: 'absolute',
        flexDirection: 'column',
        width: 310,
        height: 360,
        left: 25,
        top: 97,
        backgroundColor: '#099F84',
        borderRadius: 10,
        elevation: 1.5
    },
    buttonSubmit:{
        alignItems: 'center',
        top: 15,
        left: 215,
        width: 85,
        height: 25,
        backgroundColor: '#F4997C',
        borderRadius: 5,
    }
})