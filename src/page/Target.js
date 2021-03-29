import React, {Component} from 'react';
import {
    Text, 
    View, 
    TextInput, 
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Button,
    FlatList,
    } from 'react-native';

export default class TeamScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    {/* Navbar */}
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{width: 17, height: 17, position: 'absolute'}}
                            source={require('../../assets/images/arrow-back.png')}
                        />                    
                    </View>               
                    {/* Title Text */}
                    <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Activity')}>Target</Text>
                    
                </ScrollView>
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
        backgroundColor: '#f9f9fb',
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
    },
})