import React, {Component} from 'react';
import {
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button
    } 
from 'react-native';


export default class HomeScreen extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.scrollView}>
                    {/* Navbar */}
                    <Text style={styles.textMenuActivity} onPress={()=>this.props.navigation.navigate('Activity')}>Activity</Text>
                    <View style={styles.selectionMenuHome}>
                        <Text style={styles.textMenuHome}>Home</Text>
                    </View>
                    <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notifications')}>Notification</Text>
                    {/* Name */}   
                    {/* <Button title="kontol" onPress={()=>this.props.navigation.navigate('Profile')}/>              */}
                    <Text style={styles.textNameHeading} 
                    onPress={()=>this.props.navigation.navigate('Profile')} >Hello, Barud Tampubolon!</Text>
                        {/* Profile Picture */}
                    {/* MASIH BUG PENCET FOTO BELOM KE NAVIGATE */}
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                        <Image style={styles.iconProfilePicture}
                        source={require('../../assets/images/I_ProfilePicture_Barud.png')} 
                        />
                    </TouchableOpacity>                                        
                    {/* Menu */}
                    <View style={styles.rectangleMenu}></View>
                    {/* News */}
                    <Text style={styles.textNewsHeading}>News for you</Text>
                    <Text style={styles.textNewsSeeMore}>See More</Text>
                        {/* Column 1 */}
                        <View style={styles.rectangleNews1}>
                            
                        </View>
                        {/* Column 2 */}
                        <View style={styles.rectangleNews2}>
                            
                        </View>
                    {/* Guideline */}
                    <Text style={styles.textGuidelineHeading}>Guideline</Text>
                    
                    <View style={styles.rectangleFAQ}>
                        <View style={styles.rectangleFAQ2}>                            
                        </View>  
                    </View>                
                    <View style={styles.rectangleRules}></View>
                </View> 
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
        // paddingTop: StatusBar.currentHeight
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
        // position: 'absolute',
        // left: 160,
        // top: 22,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        lineHeight: 18

    },
    textMenuNotification: {
        position: 'absolute',
        left: 251,
        top: 22,        
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        lineHeight: 18
    },
    selectionMenuHome:{
        position: 'absolute',
        width: 56,
        height: 15,
        left: 151,
        top: 24,
        backgroundColor: '#054FFF',
        borderRadius: 50,
    },
    textNameHeading:{
        position: 'absolute',       
        left: 25,
        top: 71,
        fontFamily: 'Poppins-Black',
        fontSize: 14,
        lineHeight: 21
    },
    textNewsHeading:{
        position: 'absolute',
        left: 25,
        top: 259,
        fontFamily: 'Poppins-Black',
        fontSize: 14,
        lineHeight: 21
    },
    textNewsSeeMore:{
        position: 'absolute',
        left: 288,
        top: 263,
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
        lineHeight: 15

    },
    iconProfilePicture:{
        position: 'absolute',
        width: 25,
        height: 25,
        left: 310,
        top: 69,
        borderRadius: 5
    },
    rectangleMenu:{
        position: 'absolute',
        width: 310,
        height: 140,
        left: 25,
        top: 99,        
        backgroundColor: '#054FFF',
        // Change this CSS Shadow
        elevation: 20,
        borderRadius: 10,
    },
    rectangleNews1:{
        position: 'absolute',
        width: 310,
        height: 70,
        left: 25,
        top: 284,
        backgroundColor: '#054FFF',
        borderRadius: 10,
        elevation: 5
    },
    rectangleNews2:{
        position: 'absolute',
        width: 310,
        height: 70,
        left: 25,
        top: 364,
        backgroundColor: '#054FFF',
        borderRadius: 10,
        elevation: 5
    },
    textGuidelineHeading:{
        position: 'absolute',
        left: 25,
        top: 454,
        fontFamily: 'Poppins-Black',
        fontSize: 14,
        lineHeight: 21,
        color: '#262734'
    },
    rectangleFAQ:{
        position: 'absolute',
        width: 140,
        height: 140,
        left: 25,
        top: 477,
        backgroundColor: '#054FFF',
        elevation: 20,
        borderRadius: 10
    },
    rectangleFAQ2:{
        position: 'absolute',
        width: 140,
        height: 50,
        bottom: 0,
        backgroundColor: '#FBB03B',
        // borderBottomEndRadius: 10
        // border-radius: 0px 0px 10px 10,
    },
    rectangleRules:{
        position: 'absolute',
        width: 140,
        height: 140,
        left: 195,
        top: 477,
        backgroundColor: '#054FFF',
        elevation: 20,
        borderRadius: 10
    }
    
})