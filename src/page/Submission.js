import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native';

export default class SubmissionScreen extends Component{
    constructor(props) {
        super(props);
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>Submission</Text>
                {/* Leave Card */}
                <Text style={styles.textLeaveCardHeading}>Leave Card</Text>
                <FlatList 
                    contentContainerStyle={{paddingRight: 45}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[
                        {
                            id: 'Annual',
                            days: 10 + ' Days', 
                            leaveName: 'Annual',
                        },
                        {
                            id: 'Marriage',
                            days: 7 + ' Days', 
                            leaveName: 'Marriage',
                        },
                        {
                            id: 'Maternity',
                            days: 36 + ' Days', 
                            leaveName: 'Maternity',
                        },
                        {
                            id: 'Disaster',
                            days: 14 + ' Days', 
                            leaveName: 'Disaster',
                        },
                        {
                            id: 'Cuti 2',
                            days: 5 + ' Days', 
                            leaveName: 'Cuti 2',
                        },
                        {
                            id: 'Cuti 3',
                            days: 4 + ' Days', 
                            leaveName: 'Cuti 3',
                        }
                    ]}                    
                    renderItem={({item}) =>  
                    <View style={[styles.rectangleLeaveCard]}>     
                        <View style={styles.rectangleWhiteLeaveCard}>                            
                        </View>
                        <Text style={{bottom:20, fontFamily: 'Poppins-Black', fontSize: 24, lineHeight: 36, textAlign: 'center', color: '#fff'}} >
                        {item.days}
                        </Text>
                        <Text style={{fontSize: 12, textAlign: 'center', fontFamily: 'Poppins-SemiBold', lineHeight: 20, color: '#099f84'}}>
                            {item.leaveName}
                        </Text>        
                    </View>
                    }                
                />               

                {/* History */}
                <Text style={styles.textHistoryHeading}>History</Text>
                <Text style={styles.textSeeMoreHistory} onPress={()=>this.props.navigation.navigate('SubmissionHistory')}>See More</Text>
                <View style={styles.rectangleHistory}>

                </View>
                <TouchableOpacity style={styles.buttonApplySubmission} onPress={()=>this.props.navigation.navigate('SubmissionApply')}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, textAlign: 'center', color: '#f9f9fb'}}>Apply for Leave</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f9f9fb'        
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
    textLeaveCardHeading:{
        position: 'absolute',
        left: 25,
        top: 74,
        fontFamily: 'Poppins-Bold',       
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    rectangleLeaveCard:{
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: 5,
        marginRight: 5,
        width: 100,
        height: 100,
        left: 25,
        top: 102,
        backgroundColor: '#099F84',
        borderRadius: 10,
        elevation: 1.5
    },
    rectangleWhiteLeaveCard:{
        top: 60,
        width: 100,
        height: 30,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    textHistoryHeading:{
        position: 'absolute',
        left: 25,
        top: 220,        
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#262734'
    },
    textSeeMoreHistory:{
        position: 'absolute',
        left: 289,
        top: 229,
        fontFamily: 'Poppins-Medium',
        fontSize: 10,
        lineHeight: 15,
        color: '#262734'
    },
    rectangleHistory:{
        position: 'absolute',
        width: 310,
        height: 100,
        left: 25,
        top: 248,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    },
    buttonApplySubmission:{
        position: 'absolute',
        justifyContent: 'center',
        width: 150,
        height: 30,
        left: 105,
        top: 367,
        backgroundColor: '#099F84',
        borderRadius: 30,
    }
})