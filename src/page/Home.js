import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class HomeScreen extends Component{
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
        backgroundColor: '#054fff',
    },
})