import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
} from 'react-native';

export default class SubmissionApplyScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('../../assets/images/Icon_Presence.png'),
            require('../../assets/images/Icon_Attendance.png'),
            require('../../assets/images/Icon_Allowance.png'),
            require('../../assets/images/Icon_Perfomance.png'),
            require('../../assets/images/Icon_Salary.png'),
            require('../../assets/images/Icon_Submission.png')
          ]
        };
    }
    render(){
        return(
            <View style={styles.container}>
                 {/* Navbar */}
                 <View style={styles.rectangleBack}>
                    <Image
                        style={{position: 'absolute', width: 17, height: 17}}
                        source={require('../../assets/images/arrow-back.png')}
                    />                    
                </View>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Submission Apply</Text>
                <FlatList 
                    contentContainerStyle={{paddingRight: 45}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[
                        {
                            id: 'Presence',
                            menuIcon: require('../../assets/images/Icon_Presence.png'),
                            menuName: 'Presence',
                        },
                        {
                            id: 'Attendance',
                            menuIcon: require('../../assets/images/Icon_Attendance.png'),
                            menuName: 'Attendance',
                        },
                        {
                            id: 'Allowance',
                            menuIcon: require('../../assets/images/Icon_Allowance.png'),
                            menuName: 'Allowance',
                        },
                        {
                            id: 'Performance',
                            menuIcon: require('../../assets/images/Icon_Perfomance.png'),
                            menuName: 'Performance',
                        },
                        {
                            id: 'Salary',
                            menuIcon: require('../../assets/images/Icon_Salary.png'),
                            menuName: 'Salary',
                        },
                        {
                            id: 'Submission',
                            menuIcon: require('../../assets/images/Icon_Submission.png'),
                            menuName: 'Submission',
                        }
                    ]}                    
                    renderItem={({item}) =>  
                    <View style={[styles.rectangleMenu]}>
                        <Image 
                        style={{width: 50, height: 50, alignSelf: 'center', resizeMode:'stretch'}}
                        source={item.menuIcon}/>
                        <Text 
                        style={{fontSize: 10, textAlign: 'center', fontFamily: 'Poppins-SemiBold', lineHeight: 20, color: '#262734'}}
                        onPress={()=>this.props.navigation.navigate('Home', item)}
                        >
                        {item.menuName}
                        </Text>
                    </View>
                    }                
                />
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
        backgroundColor: '#f2f2f2',
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
    rectangleMenu:{
        flex: 1,
        margin: 5,                
        justifyContent: 'flex-end',
        width: 70,
        height: 70,
        left: 25,
        top: 121,       
        backgroundColor: '#fff',
        // Change this CSS Shadow
        elevation: 5,
        borderRadius: 10,
    },
})