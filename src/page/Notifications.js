import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, SafeAreaView} from 'react-native';

export default class NotificationsScreen extends Component{
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.scrollView}>
                    {/* Navbar */}
                    <View style={styles.navbar}>
                        <Text style={styles.textMenuActivity} onPress={()=>this.props.navigation.navigate('Activity')}>Activity</Text>
                        <Text style={styles.textMenuHome} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                        <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notifications')}>Notification</Text>

                        {/* boxHijau */}
                        <View style={{alignItems: 'center',}}>
                            <View style={styles.boxHijau}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                                    <View style={{flex: 1,}}>
                                        <Text style={{paddingLeft: 50, paddingTop: 10, fontFamily: 'Poppins-Bold', fontSize: 12, borderBottomColor: '#262734', borderBottomWidth: 2,}}>Notification</Text>
                                    </View>
                                    <View style={{flex: 1,}}>
                                        <Text style={{paddingLeft: 50 , paddingRight: 50, paddingTop: 10, fontFamily: 'Poppins-Bold', fontSize: 12,borderBottomColor: 'rgba(38, 39, 52, 0.5)', borderBottomWidth: 2, color: 'rgba(38, 39, 52, 0.5)',
                                    }} onPress={()=>this.props.navigation.navigate('Approval')}>Approval</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View> 
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    textMenuActivity: {
        position: 'absolute',
        left: 48,
        top: 22,        
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        lineHeight: 18
    },
    textMenuHome: {
        position: 'absolute',
        left: 160,
        top: 22,        
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        lineHeight: 18,
        color: '#262734'

    },
    textMenuNotification: {
        position: 'absolute',
        left: 251,
        top: 22,        
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        lineHeight: 18
    },
    selectionMenuActivity:{
        position: 'absolute',
        width: 56,
        height: 15,
        left: 300,
        top: 22,
        backgroundColor: '#054FFF',
        borderRadius: 50,
    },
    boxHijau:{
        flex: 1, 
        backgroundColor: "#ffffff", 
        width: '88%',
        height: 600,
        marginTop: 60,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        shadowColor:'#000', 
        shadowOffset: {width: 0, height: 1}, 
        shadowOpacity: 2, 
        shadowRadius: 10, 
        elevation: 5
    },
})