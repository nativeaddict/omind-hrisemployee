import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class NewsScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontFamily:'Poppins-Black', fontSize: 36, textAlign: 'center'}}>News</Text>
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