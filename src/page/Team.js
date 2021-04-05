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
                {/* Navbar */}
                <View style={styles.rectangleBack}>
                    <Image
                        style={{width: 17, height: 17, position: 'absolute'}}
                        source={require('../../assets/images/arrow-back.png')}
                    />                    
                </View>               
                {/* Title Text */}
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Activity')}>Our Team</Text>
                <View style={{top: 30}}>
                    <FlatList
                    contentContainerStyle={{paddingBottom: 80,}}
                    data={[
                        {
                            id: 'TeamContent1',
                            menuIcon: require('../../assets/images/PhotoReval.png'),
                            teamName: 'Reval Fahmi Aziz',
                            role: 'Junior Frontend Developer',
                        },
                        {
                            id: 'TeamContent2',
                            menuIcon: require('../../assets/images/PhotoDaru.png'),
                            teamName: 'Daru Gaje Wicaksono',
                            role: 'Junior Frontend Developer',
                        },
                        {
                            id: 'TeamContent3',
                            menuIcon: require('../../assets/images/PhotoBarid.png'),
                            teamName: 'Barid Rais',
                            role: 'Junior Frontend Developer',
                        },
                        {
                            id: 'TeamContent4',
                            menuIcon: require('../../assets/images/PhotoGalih.png'),
                            teamName: 'Galih Bacot Berbobot',
                            role: 'Senior fullstack Developer',
                        },
                        {
                            id: 'TeamContent5',
                            menuIcon: require('../../assets/images/PhotoBarid.png'),
                            teamName: 'Marsa Wafira',
                            role: 'Junior UI/UX Designer',
                        },
                        {
                            id: 'TeamContent6',
                            menuIcon: require('../../assets/images/PhotoDaru.png'),
                            teamName: 'Vris Widio Priambudi',
                            role: 'Junior UI/UX Designer',
                        },
                        {
                            id: 'TeamContent7',
                            menuIcon: require('../../assets/images/PhotoGalih.png'),
                            teamName: 'Asma Gigit Daru',
                            role: 'Junior Fullstack Developer',
                        },
                        {
                            id: 'TeamContent8',
                            menuIcon: require('../../assets/images/PhotoGalih.png'),
                            teamName: 'Galih Widio',
                            role: 'Junior Fullstack Developer',
                        },
                        {
                            id: 'TeamContent9',
                            menuIcon: require('../../assets/images/PhotoGalih.png'),
                            teamName: 'Reval Fakboi',
                            role: 'Junior Fullstack Developer',
                        },
                        
                    ]}
                    renderItem={({item}) =>
                    <View style={styles.rectangleContent}>
                        <View style={{backgroundColor: '#099f84', width: 60, height: 60, borderRadius: 30, margin: 13,}}>
                            <Image style={{width: 60, height: 60,}} 
                            source={item.menuIcon} />
                        </View>
                        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 92, top: -69}}> {item.teamName} </Text>
                        <Text style={{fontSize: 12, fontFamily: 'Poppins-Medium', left: 92, top: -71}}> {item.role} </Text>
                    </View>
                    }
                    />
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     backgroundColor: '#f9f9fb',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: '#099F84',
      top: 76,
      borderRadius: 10,
      marginTop: 10
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
    rectangleContent:{
        margin: 5,
        width: 310,
        height: 80,
        left: 25,
        top: 26,
        elevation: 5,
        borderRadius: 5,
        resizeMode: 'center'
    },
  })