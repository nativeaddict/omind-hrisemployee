import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

export default class PresenceHistoryScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                 {/* Navbar */}
                 <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Presence')}}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{position: 'absolute', width: 17, height: 17}}
                            source={require('../../assets/images/arrow-back.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Presence')}>Presence History</Text>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb',
    },
    rectangleBack:{
        position: 'absolute',
        justifyContent:'center',
        width: 15,
        height: 15,
        top: 23,
        left: 22,       
        backgroundColor: '#F2F2F2',
        borderRadius: 2,
    },
    textNavigation:{
        position: 'absolute',
        left: 47,
        top: 21,
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,    
        color: '#262734'
    }
})