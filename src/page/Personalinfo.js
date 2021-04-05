import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import arrowBack from '../../assets/images/arrow-back.png';


export default class PersonalInfoScreen extends Component{
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Profile')}>Personal Info</Text>

                {/* Box Shadow */}
                <View style={{alignItems: 'center', marginTop: 70,}}>
                    <View style={{backgroundColor: '#fff', borderRadius: 10, width: '90%', height: 360, alignItems: 'center', elevation: 3}}>
                        <View style={{backgroundColor: '#fff', borderRadius: 10, width: '90%', height: 300, marginTop: 20}}>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#262734', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={styles.textContent}>Name</Text>
                                <Text style={styles.textContent}>Daru Marojahan Pakpahan</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#262734', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={styles.textContent}>Email</Text>
                                <Text style={styles.textContent}>ragil@omindtech.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#262734', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={styles.textContent}>Phone</Text>
                                <Text style={styles.textContent}>+628112233445</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#262734', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={styles.textContent}>Date of Birth</Text>
                                <Text style={styles.textContent}>21 November 2001</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#262734', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={styles.textContent}>Address</Text>
                                <Text style={styles.textContent}>Yasmin 69, Bogor</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#262734', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={styles.textContent}>Role</Text>
                                <Text style={styles.textContent}>Junior Frontend Developer</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#262734', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={styles.textContent}>Hobby</Text>
                                <Text style={styles.textContent}>Buat Masalah</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb'
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
    textContent:{
        color: '#262734', 
        paddingRight: 5, 
        marginTop: 21,
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
    },

})