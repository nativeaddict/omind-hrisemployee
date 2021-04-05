import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import arrowBack from '../../assets/images/arrow-back.png';

export default class ChangePassScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <View style={styles.rectangleBack}>
                    <Image
                        style={{width: 17, height: 17, position: 'absolute'}}
                        source={require('../../assets/images/arrow-back.png')}
                    />                    
                </View>               
                {/* Title Text */}
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Profile')}>Change Password</Text>
                
                <View style={{flex: 1, alignItems: 'center', marginTop: 50, position: 'relative'}}>
                    {/* Box Shadow */}
                    <View style={styles.boxShadow}>
                            <View style={{ flexGrow: 1 , paddingBottom: 2}}>
                                <TextInput style={styles.textCurrent}
                                placeholder="Current Password"
                                placeholderTextColor="#262734"
                                selectionColor="#262734"
                                color="#262734"
                                secureTextEntry={true} />
                                <TextInput style={styles.textPass}
                                placeholder="New Password"
                                placeholderTextColor="#262734"
                                selectionColor="#262734"
                                color="#262734"
                                secureTextEntry={true} />
                                <TextInput style={styles.textPass}
                                placeholder="Confirm Password"
                                placeholderTextColor="#262734"
                                selectionColor="#262734"
                                color="#262734"
                                secureTextEntry={true} />
                                <TouchableOpacity style={styles.buttonSave}>
                                <Text style={styles.textButton}>Save</Text>
                                </TouchableOpacity>
                            </View>
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
        backgroundColor: '#f9f9fb',
        borderRadius: 2,
    },
    textNavigation:{
        position: 'absolute',
        left: 47,
        top: 21,
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,    
        color: '#262734',
    },
    boxShadow:{
        backgroundColor: '#fff', 
        borderRadius: 10, 
        width: '90%', 
        height: 380, 
        alignItems: 'center', 
        paddingLeft: 20, 
        paddingRight: 20, 
        marginTop: 20, 
        elevation: 3
    },
    buttonSave:{
        width: 53,
        height: 22,
        borderRadius: 30,
        backgroundColor: '#099F84',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '70%',
        marginTop: 10,
        
    },
    textButton:{
        fontFamily: 'Poppins-Bold',
        fontSize: 12,
        color: '#fff'
    },
    textCurrent:{
        borderBottomColor: '#262734', 
        borderBottomWidth: 1, 
        marginTop: 10,
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
    },
    textPass:{
        borderBottomColor: '#262734', 
        borderBottomWidth: 1,
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
    },
})