import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class NotificationsScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontFamily:'Poppins-Black', fontSize: 36, textAlign: 'center'}}>Notifications</Text>
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