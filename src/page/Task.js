import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,

} from 'react-native';

export default class TaskScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Activity')}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{width: 17, height: 17, position: 'absolute'}}
                            source={require('../../assets/images/arrow-back.png')}
                        />                    
                    </View>
                </TouchableWithoutFeedback>               
                {/* Title Text */}
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Activity')}>Task</Text>
                
                {/* Content Container */}
                <View>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DetailTask')}>
                        <View style={{backgroundColor: '#fff', width: 140, height: 100, top: 76,left: 25, position: 'absolute',borderRadius: 10, justifyContent: 'center', elevation: 3, alignItems: 'center'}}>
                            <Image source={require('../../assets/images/LogoAndro.png')}
                            style={{width: 52, height: 45, marginBottom: 10}} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 10, textAlign: 'center', alignItems: 'center',}}> PT Omind Muda {'\n'} Berkarya Indonesia </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={{backgroundColor: '#fff', width: 140, height: 100, top: 76, left: 195, position: 'absolute', borderRadius: 10, justifyContent: 'center',elevation: 3, alignItems: 'center' }}>
                            <Image source={require('../../assets/images/LogoAndro.png')}
                            style={{width: 52, height: 45, marginBottom: 10}} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 10, textAlign: 'center', alignItems: 'center',}}> Sekolah Vokasi {'\n'} IPB University </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={{backgroundColor: '#fff', width: 140, height: 100, top: 220, left: 25, position: 'absolute', borderRadius: 10, justifyContent: 'center', elevation: 3, alignItems: 'center' }}>
                            <Image source={require('../../assets/images/LogoAndro.png')}
                            style={{width: 52, height: 45, marginBottom: 10}} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 10, textAlign: 'center', alignItems: 'center',}}> Kementrian Ketahanan Pangan {'\n'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={{backgroundColor: '#fff', width: 140, height: 100, top: 220, left: 195, position: 'absolute', borderRadius: 10, justifyContent: 'center', elevation: 3, alignItems: 'center' }}>
                            <Image source={require('../../assets/images/LogoAndro.png')}
                            style={{width: 52, height: 45, marginBottom: 10}} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 10, textAlign: 'center', alignItems: 'center',}}> PT Sang Pisang {'\n'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
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
        color: '#262734',
    },
})