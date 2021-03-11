import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Header} from 'react-native';

export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontFamily:'Poppins-Black', fontSize: 36, textAlign: 'center'}}>Profile</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
})