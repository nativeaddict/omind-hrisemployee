import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default class OnboardingScreen extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color: '#fff'}}>Onboarding</Text>
                <Text style={styles.button}
                onPress={()=>this.props.navigation.navigate('Login')}>Next</Text>
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
    },
    button:{
        color: '#fff',
        marginTop: 10,
        backgroundColor: 'pink',
        borderRadius: 2,

    }
})