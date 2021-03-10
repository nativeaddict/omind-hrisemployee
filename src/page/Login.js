import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Image,
    Touchable,
    TouchableOpacity,
    Alert
} from 'react-native';
// import gambar ke objek
import bgimage from '../../assets/image/Object.png'

export default class LoginScreen extends Component{
    state={
        email:'',
        password:'',
    };
    submit=()=>{
        let errors=[];
        if(this.state.email === ''){
            errors.push('Isi Email Terlebih Dahulu !');
        }

        if(this.state.password === ''){
            errors.push('Isi Password Terlebih Dahulu !');
        }

        let errors_msg='';
        errors.map(val=>{
            errors_msg += val + '\n';
        })

        if(errors.length > 0){
            Alert.alert(
                "Error!",
                errors_msg,
                [
                    {text: 'OK', onPress:()=>console.log('OK PRESS')}
                ],
                {cancelable:false}
            );
        }
    }
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.bgimageStyle} source={bgimage} />
                <Text style={styles.title}>Omind</Text>
                <Text style={styles.subtitle}>For Employee</Text>
                <View style={styles.kotak}>
                    <Text style={styles.textTitle}>Email</Text>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.inputText}
                        placeholder= "email@omindtech.com"
                        placeholderTextColor= "#fff" 
                        value={this.state.email}
                        onChangeText={(val)=>{this.setState({email: val})}}
                        />
                    </View>
                    <Text style={styles.textPass}>Password</Text>
                    <View style={styles.inputPass}>
                        <TextInput style={styles.inputText}
                        placeholder="**********"
                        placeholderTextColor="#fff" 
                        onChangeText={(val)=>{this.setState({password: val})}}
                        value={this.state.password}
                        secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonLogin} onPress={this.submit}>
                    {/* onPress={()=>this.props.navigation.navigate('Activity')} */}
                        <Text style={styles.textButton}>Sign In</Text>
                    </TouchableOpacity>
                   
                    <Text style={{fontFamily: 'Poppins-Black', fontSize: 15, color: 'white',
                    marginTop: 10, borderRadius: 10, backgroundColor: 'pink', width: 100, textAlign: 'center'}}
                    onPress={()=>this.props.navigation.navigate('Profile')}>PROFILE</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    bgimageStyle:{
        resizeMode: 'cover',
        position: 'absolute',
        width: 360,
        height: 350,
        top: 0,
    },
    kotak:{
        flex: 1,
        height: 400,
        backgroundColor: '#054fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 30
    },
    title:{
        fontSize: 72,
        color: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        textShadowRadius: 50,
        textShadowColor: '#262734',
        marginTop: 81,
        marginBottom: 0,
        fontFamily: 'Poppins-Black'
    },
    subtitle:{
        fontSize: 18,
        color: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        marginTop: -40,
        marginBottom: 40,
        lineHeight: 27
    },
    textTitle:{
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        marginTop: 61,
        marginBottom: 0,
        color: '#fff',
        alignItems: 'center',

    },
    textPass:{
        fontFamily: 'Poppins-Black',
        fontSize: 12,
        marginBottom: 0,
        color: '#fff',
    },
    inputText:{
        height: 50,
        color: 'white',
        alignItems: 'center',
    },
    inputEmail:{
        width: 229,
        backgroundColor: '#054fff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        height: 30,
        marginTop: 0,
        marginBottom: 19,
        justifyContent: 'center',
        padding: 20,
    },
    inputPass:{
        width: 229,
        backgroundColor: '#054fff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        height: 30,
        marginBottom: 19,
        justifyContent: 'center',
        padding: 20,
    },
    buttonLogin:{
        width: 125,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#FBB03B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        fontFamily: 'Poppins-Black',
        fontSize: 12,

    }
})