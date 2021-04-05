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
    TouchableWithoutFeedback,
    } from 'react-native';

export default class TeamScreen extends Component{
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Activity')}>Target</Text>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 25, top: 72, }}>Summary Task</Text>
                
                {/* Total Task Container  */}
                <View style={{flexDirection: 'row', backgroundColor: '#099f84', width: 184, height: 100, left: 25, top: 100, borderRadius: 10, position: 'absolute'}}>
                    <View style={{backgroundColor: '#F4997C', width: 77, height: 100, borderTopRightRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                        <Image source={require('../../assets/images/Icon_SummaryTotal.png')}
                        style={{width: 75, height: 75, top: 12}} />
                    </View>
                    <View style={{flexDirection: 'column',}}>
                        <Text style={{fontFamily: 'Poppins-Black', fontSize: 36, color: '#F5F9FA', left: 7}}>4</Text>
                        <Text style={{fontFamily: 'Poppins-Black', fontSize: 14, color: '#F5F9FA', left: 7, top: -15}}>Total Tasks</Text>
                        <Text style={{fontFamily: 'Poppins-Black', fontSize: 14, color: '#F5F9FA', left: 7, top: -20}}>This Month</Text>
                    </View>
                </View>
                
                {/* Task Done Container */}
                <View style={{flexDirection: 'row', backgroundColor: '#099f84', width: 119, height: 100, left: 216, top: 100, position: 'absolute', borderRadius: 10}}>
                    <View style={{backgroundColor: '#F4997C', width: 58, height: 100, borderTopRightRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
                        <Image source={require('../../assets/images/Icon_SummaryDone.png')}
                        style={{width: 55, height: 70, top: 16}} />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontFamily: 'Poppins-Black', fontSize: 36, color: '#F5F9FA', left: 7}}>4</Text>
                        <Text style={{fontFamily: 'Poppins-Black', fontSize: 14, color: '#F5F9FA', left: 7, top: -15}}>Task</Text>
                        <Text style={{fontFamily: 'Poppins-Black', fontSize: 14, color: '#F5F9FA', left: 7, top: -20}}>Done</Text>            
                    </View>
                </View>
                
                {/* Percentage Containenr */}
                <View style={{backgroundColor: '#099f84', width: 310, height: 105, left: 25, top: 210, position: 'absolute', borderRadius: 10}}>
                    <Text style={{fontFamily: 'Poppins-Black', fontSize: 14, color: '#F5F9FA', left: 106, top: 4}}>Percentage</Text>
                    <Text style={{fontFamily: 'Poppins-Black', fontSize: 64, color: '#F5F9FA', left: 85, top: -15}}>25%</Text>
                </View>

                <Text style={{fontSize: 16, fontFamily: 'Poppins-Bold', left: 25, top: 330, position: 'absolute'}}>Taks Report</Text>
                {/* <View style={{backgroundColor: '#099f84', width: 310, height: 20, }}></View> */}
                
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