import React, { Component } from 'react';
import {
    View, 
    Text, 
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

export default class SubmissionHistoryScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                 {/* Navbar */}
                 <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Submission')}}>
                    <View style={styles.rectangleBack}>
                        <Image
                            style={{position: 'absolute', width: 17, height: 17}}
                            source={require('../../assets/images/arrow-back.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Submission')}>Submission History</Text>
                {/* History */}
                <FlatList 
                    style={{left: 25, top: 75,}}
                    contentContainerStyle={{paddingBottom: 45}}
                    // horizontal={true}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<View style={{height:50}}/>}
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
                    <View style={styles.rectangleHistory}>
                        <View style={styles.ellipseHistory}>
                            <Image 
                                style={{width: 90, height: 90}}
                                source={require('../../assets/images/Icon_HistorySubmission.png')}
                            />
                        </View>
                        <Text style={{left: 115, color: '#262734', fontFamily: 'Poppins-Bold', fontSize: 16}}>Annual Leave</Text>
                        <Text style={{left: 115, color: '#262734', fontFamily: 'Poppins-Medium', fontSize: 12}}>Leave from:{'\t'}{'\t'}21/01/2021</Text>
                        <Text style={{left: 115, color: '#262734', fontFamily: 'Poppins-Medium', fontSize: 12}}>Until:{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}22/02/2021</Text>    
                        <Text style={{left: 115, color: '#262734', fontFamily: 'Poppins-Medium', fontSize: 12}}>Status:</Text>
                        <View style={{justifyContent: 'center', bottom: 17, width: 65, height: 15, left: 205, backgroundColor: '#F15A25',borderRadius: 5}}>
                            <Text style={{color: '#fff', fontFamily: 'Poppins-Medium', fontSize: 12, textAlign: 'center'}}>Rejected</Text>
                        </View>                    
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
        backgroundColor: '#F2F2F2',
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
    rectangleHistory:{        
        marginBottom: 15,
        width: 310,
        height: 100,       
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 1.5
    },
    ellipseHistory:{
        position: 'absolute',        
        width: 100,
        height: 100,
        backgroundColor: '#099F84',
        borderBottomEndRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10
    },
})