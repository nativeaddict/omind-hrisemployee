import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class OnboardingScreen extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color: '#fff'}}>Onboarding</Text>
                <Text>Text 2</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#054fff'
    }
})