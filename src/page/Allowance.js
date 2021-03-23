import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native';

export default class AllowanceScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontFamily:'Poppins-Black', fontSize: 36, textAlign: 'center'}}>Allowance</Text>
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