import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Header, Image, TouchableWithoutFeedback, Modal, TouchableOpacity} from 'react-native';
//import Modal from 'react-native-modal';
import arrowBack from '../../assets/images/arrow-back.png';
import arrowNext from '../../assets/images/arrow-next.png';
import photoProfil from '../../assets/images/photoProfile.png';

export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            isError: false,
        };
    }   
    render(){
        return(
            <View style={styles.container}>
                {/* Navbar */}
                <View style={styles.rectangleBack}>
                    <Image
                        style={{width: 17, height: 17, position: 'absolute'}}
                        source={require('../../assets/images/arrow-back.png')}
                    />                    
                </View>               
                {/* Title Text */}
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Profile</Text>

                {/* Profile Box */}
                <View style={styles.boxProfile} >
                    <View style={{flex: 0, alignItems: 'center', justifyContent: 'space-between', marginTop: -40, position: 'relative' }}>
                    <View style={{backgroundColor: '#f5f4f4', width: '90%', height: 90, borderRadius: 10, 
                    shadowColor:'#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5 , position: 'absolute'}}>
                        
                        {/* Profile Content */}
                        <View style={styles.profileContent  }>
                            {/* Profile Picture */}
                            <Image source={photoProfil} style={styles.profilePic}
                            onPress={()=>this.props.navigation.navigate('Login')} />
                            {/* Profile Text */}
                            <View>
                                <Text style={styles.titleName} >Daru Marojahan Pakpahan</Text>
                                <Text style={styles.titlePosition}>Junior Frontend</Text>
                            </View>
                        </View>
                        </View> 
                    </View>

                    {/* Personal Info Button */}
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Personalinfo')} >
                        <View style={styles.button}>
                            <Image style={styles.arrowNext} source={arrowNext}  />
                            <Text style={styles.textButton} 
                            onPress={()=>this.props.navigation.navigate('Personalinfo')}>Personal Info</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    
                    {/* Change Pass Button */}
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ChangePass')} >
                        <View style={styles.buttonPass}>
                            <Image style={styles.arrowNext} source={arrowNext}  />
                            <Text style={styles.textButton} 
                            onPress={()=>this.props.navigation.navigate('ChangePass')}>Change Password</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    {/* Salary Button */}
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Home')}>
                        <View style={styles.buttonSalary} >
                            <Image style={styles.arrowNext} source={arrowNext}  />
                            <Text style={styles.textButton} 
                            onPress={()=>this.props.navigation.navigate('Login')}>Salary</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    {/* Logout Button */}
                    <TouchableWithoutFeedback 
                    onPress={()=>this.props.navigation.navigate('Login')} >
                        <View style={styles.buttonLogout} >
                            <Image style={styles.arrowNext} source={arrowNext}  />
                            <Text style={styles.textButton}>Logout</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    {/* <View style={styles.testModal}>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', }}
                        onPress={()=>this.setState({isError: true})} >
                            <Text>TEST MODAL</Text>
                        </TouchableOpacity>
                    </View> */}

                    {/* <Modal isVisible={this.state.isError}>
                        <View style={{ width: 90, height: 90 }}>
                        <Text>I am the modal content!</Text>
                        </View>
                    </Modal> */}
                    <Text style={styles.footer}>PT Omind Muda Berkarya Indonesia</Text>
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
    header:{
        width: 17,
        height: 17,
        left: 22,
        top: 23,
        position: 'absolute',
    },
    TextHeader:{
        fontFamily: 'Poppins-Bold',
        position: 'absolute',
        fontSize: 14,
        fontStyle: 'normal',
        left: 47,
        top: 21,
        color: '#262734',
        lineHeight: 21,
    },
    boxProfile:{
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 200,
        backgroundColor: '#099F84',
        marginTop: 120,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'relative',
    },
    profileContent:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingLeft: 10 
    },
    button:{
        position: 'absolute',
        width: 285,
        height: 36,
        left: 38,
        top: 132,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        // textAlign: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 10,
    },
    buttonPass:{
        position: 'absolute',
        width: 285,
        height: 36,
        left: 38,
        top: 184,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        // textAlign: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 10,
    },
    buttonSalary:{
        position: 'absolute',
        width: 285,
        height: 36,
        left: 38,
        top: 236,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        // textAlign: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 10,
    },
    buttonLogout:{
        position: 'absolute',
        width: 285,
        height: 36,
        left: 38,
        top: 288,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        // textAlign: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 10,
    },
    textButton:{
        position: 'absolute',
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'black',
        left: 57,
        marginBottom: 10,
        top: 7,
    },
    arrowNext:{
        position: 'absolute',
        width: 13,
        height: 13,
        left: 250,
        top: 11
    },
    footer:{
        position: 'absolute',
        top: '90%',
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        left: '20%',
        color: '#f2f2f2'
    },
    profilePic:{
        width: 80, 
        height: 80, 
        marginTop: 5, 
        marginBottom: 5, 
        // borderRadius: 65
    },
    titleName:{
        color: 'black', 
        fontFamily:'Poppins-Black', 
        fontSize: 14, 
        marginLeft: 15, 
        marginTop:10 
    },
    titlePosition:{
        color: 'black', 
        fontFamily: 'Poppins-Medium', 
        fontSize: 14, 
        textAlign: 'center', 
        marginTop: -5
    },
    testModal:{
        position: 'absolute',
        width: 72,
        height: 36,
        left: 38,
        top: 400,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        // textAlign: 'center',
        justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 10,
    },
})