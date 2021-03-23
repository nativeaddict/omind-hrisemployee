import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import arrowBack from '../../assets/images/arrow-back.png';

export default class ChangePassScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.header} source={arrowBack} 
                onPress={()=>this.props.navigation.navigate('Profile')}/>
                <Text style={styles.TextHeader}
                onPress={()=>this.props.navigation.navigate('Profile')}>Change Password</Text>
                <View style={{flex: 1, alignItems: 'center', marginTop: 50, position: 'relative'}}>
                    <View style={{backgroundColor: '#099F84', borderRadius: 10, width: '90%', height: 380, alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
                            <View style={{ flexGrow: 1 , paddingBottom: 2}}>
                                <TextInput style={{borderBottomColor: '#f2f2f2', borderBottomWidth: 1, marginTop: 10}}
                                placeholder="Current Password"
                                placeholderTextColor="#f2f2f2"
                                selectionColor="#f2f2f2"
                                color="#f2f2f2"
                                secureTextEntry={true} />
                                <TextInput style={{borderBottomColor: '#f2f2f2', borderBottomWidth: 1}}
                                placeholder="New Password"
                                placeholderTextColor="#f2f2f2"
                                selectionColor="#f2f2f2"
                                color="#f2f2f2"
                                secureTextEntry={true} />
                                <TextInput style={{borderBottomColor: '#f2f2f2', borderBottomWidth: 1}}
                                placeholder="Confirm Password"
                                placeholderTextColor="#f2f2f2"
                                selectionColor="#f2f2f2"
                                color="#f2f2f2"
                                secureTextEntry={true} />
                                <TouchableOpacity style={styles.buttonSave}>
                                <Text style={{fontFamily: 'Poppins-Black', color:'#f2f2f2', justifyContent: 'center'}} >Save</Text>
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
        backgroundColor: '#f2f2f2',
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
    buttonSave:{
        width: 70,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#FBB03B',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '70%',
        marginTop: 10,
    },
})