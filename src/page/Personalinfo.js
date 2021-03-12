import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import arrowBack from '../../assets/images/arrow-back.png';


export default class PersonalInfoScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.header} source={arrowBack} 
                onPress={()=>this.props.navigation.navigate('Profile')}/>
                <Text style={styles.TextHeader}
                onPress={()=>this.props.navigation.navigate('Profile')}>Personal Info</Text>
                <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
                    <View style={{backgroundColor: '#099F84', borderRadius: 10, width: '90%', height: 380, alignItems: 'center'}}>
                        <View style={{backgroundColor: '#099F84', borderRadius: 10, width: '90%', height: 315, marginTop: 34}}>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#f2f2f2', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={{color: '#f2f2f2', marginTop: 21, paddingLeft: 5}}>Name</Text>
                                <Text style={{color: '#f2f2f2', paddingRight: 5, marginTop: 21}}>Daru Marojahan Pakpahan</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#f2f2f2', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={{color: '#f2f2f2', marginTop: 21, paddingLeft: 5}}>Email</Text>
                                <Text style={{color: '#f2f2f2', paddingRight: 5, marginTop: 21}}>ragil@omindtech.com</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#f2f2f2', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={{color: '#f2f2f2', marginTop: 21, paddingLeft: 5}}>Phone</Text>
                                <Text style={{color: '#f2f2f2', paddingRight: 5, marginTop: 21}}>+628112233445</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#f2f2f2', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={{color: '#f2f2f2', marginTop: 21, paddingLeft: 5}}>Date of Birth</Text>
                                <Text style={{color: '#f2f2f2', paddingRight: 5, marginTop: 21}}>21 November 2001</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#f2f2f2', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={{color: '#f2f2f2', marginTop: 21, paddingLeft: 5}}>Address</Text>
                                <Text style={{color: '#f2f2f2', paddingRight: 5, marginTop: 21}}>Yasmin 69, Bogor</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#f2f2f2', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={{color: '#f2f2f2', marginTop: 21, paddingLeft: 5}}>Role</Text>
                                <Text style={{color: '#f2f2f2', paddingRight: 5, marginTop: 21}}>Junior Frontend Developer</Text>
                            </View>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', borderBottomColor: '#f2f2f2', borderBottomWidth: 1, paddingBottom: 2}}>
                                <Text style={{color: '#f2f2f2', marginTop: 21, paddingLeft: 5}}>Hobby</Text>
                                <Text style={{color: '#f2f2f2', paddingRight: 5, marginTop: 21}}>Buat Masalah</Text>
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
        backgroundColor: '#f2f2f2'
    },
    header:{
        width: 17,
        height: 17,
        left: 25,
        top: 24,
    },
    TextHeader:{
        fontFamily: 'Poppins-Black',
        fontSize: 16,
        fontStyle: 'normal',
        left: 66,
        top: 2,
        color: '#262734',
    },
})