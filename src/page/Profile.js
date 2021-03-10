import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Header} from 'react-native';

export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Test 123</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'pink',
    },
})