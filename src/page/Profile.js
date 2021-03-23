import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Header, Image, TouchableOpacity} from 'react-native';
import arrowBack from '../../assets/images/arrow-back.png';
import arrowNext from '../../assets/images/arrow-next.png';
import photoProfil from '../../assets/images/photoProfile.png';

export default class ProfileScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.header} source={arrowBack} 
                onPress={()=>this.props.navigation.navigate('Onboarding')}/>
                <Text style={styles.TextHeader}
                onPress={()=>this.props.navigation.navigate('Login')}>Profile</Text>
                {/* BoxHijau */}
                <View style={styles.boxProfile} >
                    {/* Kotak Foto dan Nama */}
                    <View style={{flex: 0, alignItems: 'center', justifyContent: 'space-between', marginTop: -40, position: 'relative' }}>
                    <View style={{backgroundColor: '#f5f4f4', width: '90%', height: 90, borderRadius: 10, 
                    shadowColor:'#000', shadowOffset: {width: 0, height: 1}, shadowOpacity: 2, shadowRadius: 10, elevation: 5 , position: 'absolute'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 75, justifyContent: 'space-between' }}>
                            <Image source={photoProfil} style={styles.profilePic}
                            onPress={()=>this.props.navigation.navigate('Login')} />
                            <View style={{alignItems: 'center', justifyContent: 'center',}}>
                                <Text style={styles.titleName} >Daru Pakpahan</Text>
                                <Text style={styles.titlePosition}>Junior Frontend</Text>
                            </View>
                        </View>
                        </View> 
                    </View>
                    
                    {/* Isi Menu Profile */}
                    <View style={styles.button} onPress={()=>this.props.navigation.navigate('Login')} >
                        <Image style={styles.arrowNext} source={arrowNext}  />
                        <Text style={styles.textButton} 
                        onPress={()=>this.props.navigation.navigate('Personalinfo')}>Personal Info</Text>
                    </View>
                    <View style={styles.buttonPass} onPress={()=>this.props.navigation.navigate('Login')} >
                        <Image style={styles.arrowNext} source={arrowNext}  />
                        <Text style={styles.textButton} 
                        onPress={()=>this.props.navigation.navigate('ChangePass')}>Change Password</Text>
                    </View>
                    <View style={styles.buttonSalary} onPress={()=>this.props.navigation.navigate('Login')} >
                        <Image style={styles.arrowNext} source={arrowNext}  />
                        <Text style={styles.textButton} 
                        onPress={()=>this.props.navigation.navigate('Login')}>Salary</Text>
                    </View>
                    <View style={styles.buttonLogout} onPress={()=>this.props.navigation.navigate('Login')} >
                        <Image style={styles.arrowNext} source={arrowNext}  />
                        <Text style={styles.textButton} 
                        onPress={()=>this.props.navigation.navigate('Login')}>Logout</Text>
                    </View>
                    <TouchableOpacity style={{width: 125,
                    height: 30,
                    borderRadius: 30,
                    backgroundColor: '#FBB03B',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 400}}>
                        <Text> LOGOUT POPUP </Text>
                    </TouchableOpacity>
                    <Text style={styles.footer}>PT Omind Muda Berkarya Indonesia</Text>
                </View>
                {/* <Text style={{fontFamily: 'Poppins-Black', fontSize: 15, color: 'white',
                    marginTop: 300, borderRadius: 10, backgroundColor: 'blue', width: 100, textAlign: 'center'}}
                    onPress={()=>this.props.navigation.navigate('Registrasi')}>Registrasi</Text> */}
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header:{
        width: 17,
        height: 17,
        left: 25,
        top: 24,
    },
    TextHeader:{
        fontFamily: 'Poppins-Black',
        fontSize: 16,
        fontStyle: 'normal',
        left: 66,
        top: 2,
        color: '#262734',
    },
    boxProfile:{
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 200,
        backgroundColor: '#099F84',
        marginTop: 80,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'relative',
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
        marginTop:10,
        // textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    titlePosition:{
        color: 'black', 
        fontFamily: 'Poppins-Medium', 
        fontSize: 14, 
        textAlign: 'center', 
        marginTop: -5,

    },
})