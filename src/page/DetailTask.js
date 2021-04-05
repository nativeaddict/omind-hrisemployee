import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    useWindowDimensions,
    FlatList,
} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const PendingRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FFFF', width: 310, height: 625, elevation: 3, left: 25 }}>
        <FlatList
                contentContainerStyle={{paddingBottom: 1,}}
                data={[
                    {
                        id: 'Notif1',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Monday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif2',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif3',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Wednesday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif4',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Thursday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif5',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Friday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif6',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Sprint Retrospective Meeting',
                        status: 'Your Presence Success',
                        date: 'Saturday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif7',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Sunday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif8',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Monday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif9',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    {
                        id: 'Notif10',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    {
                        id: 'Notif11',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    
                ]}
                renderItem={({item}) =>
                <View style={{flexDirection: 'row', width: 310, height: 59.5, backgroundColor: '#fff', borderBottomColor: '#262734', borderBottomWidth: 1,}}>
                    <Image style={{width: 50, height: 50, left: 10, marginRight: 10}} 
                    source={item.menuIcon} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{left: 16, fontFamily: 'Poppins-Bold', fontSize: 12, }}> {item.notifname} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Medium', fontSize: 10}}> {item.status} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Light', fontSize: 10}}> {item.date} </Text>
                    </View>
                </View>
                }
                />
    </View>
);
  
const OngoingRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FFFF', width: 310, height: 625, elevation: 3, left: 25 }}>
        <FlatList
                contentContainerStyle={{paddingBottom: 1,}}
                data={[
                    {
                        id: 'Notif1',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Monday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif2',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif3',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Wednesday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif4',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Thursday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif5',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Friday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif6',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Sprint Retrospective Meeting',
                        status: 'Your Presence Success',
                        date: 'Saturday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif7',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Sunday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif8',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Monday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif9',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    {
                        id: 'Notif10',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    {
                        id: 'Notif11',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    
                ]}
                renderItem={({item}) =>
                <View style={{flexDirection: 'row', width: 310, height: 59.5, backgroundColor: '#fff', borderBottomColor: '#262734', borderBottomWidth: 1,}}>
                    <Image style={{width: 50, height: 50, left: 10, marginRight: 10}} 
                    source={item.menuIcon} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{left: 16, fontFamily: 'Poppins-Bold', fontSize: 12, }}> {item.notifname} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Medium', fontSize: 10}}> {item.status} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Light', fontSize: 10}}> {item.date} </Text>
                    </View>
                </View>
                }
                />
    </View>
);

const ReviewRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FFFF', width: 310, height: 625, elevation: 3, left: 25 }}>
        <FlatList
                contentContainerStyle={{paddingBottom: 1,}}
                data={[
                    {
                        id: 'Notif1',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Monday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif2',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif3',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Wednesday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif4',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Thursday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif5',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Friday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif6',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Sprint Retrospective Meeting',
                        status: 'Your Presence Success',
                        date: 'Saturday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif7',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Sunday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif8',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Monday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif9',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    {
                        id: 'Notif10',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    {
                        id: 'Notif11',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    
                ]}
                renderItem={({item}) =>
                <View style={{flexDirection: 'row', width: 310, height: 59.5, backgroundColor: '#fff', borderBottomColor: '#262734', borderBottomWidth: 1,}}>
                    <Image style={{width: 50, height: 50, left: 10, marginRight: 10}} 
                    source={item.menuIcon} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{left: 16, fontFamily: 'Poppins-Bold', fontSize: 12, }}> {item.notifname} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Medium', fontSize: 10}}> {item.status} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Light', fontSize: 10}}> {item.date} </Text>
                    </View>
                </View>
                }
                />
    </View>
);

const CompletedRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FFFF', width: 310, height: 625, elevation: 3, left: 25 }}>
        <FlatList
                contentContainerStyle={{paddingBottom: 1,}}
                data={[
                    {
                        id: 'Notif1',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Monday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif2',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif3',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Wednesday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif4',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Thursday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif5',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Friday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif6',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Sprint Retrospective Meeting',
                        status: 'Your Presence Success',
                        date: 'Saturday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif7',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Daily Scrum',
                        status: 'Your Presence Success',
                        date: 'Sunday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif8',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap In',
                        status: 'Your Presence Success',
                        date: 'Monday, February 10, 8:40 am',
                    },
                    {
                        id: 'Notif9',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    {
                        id: 'Notif10',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    {
                        id: 'Notif11',
                        menuIcon: require('../../assets/images/Icon_Mail.png'),
                        notifname: 'Tap Out',
                        status: 'Your Presence Success',
                        date: 'Tuesday, February 10, 8:40 am',
                        
                    },
                    
                ]}
                renderItem={({item}) =>
                <View style={{flexDirection: 'row', width: 310, height: 59.5, backgroundColor: '#fff', borderBottomColor: '#262734', borderBottomWidth: 1,}}>
                    <Image style={{width: 50, height: 50, left: 10, marginRight: 10}} 
                    source={item.menuIcon} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{left: 16, fontFamily: 'Poppins-Bold', fontSize: 12, }}> {item.notifname} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Medium', fontSize: 10}}> {item.status} </Text>
                        <Text style={{left: 16, fontFamily: 'Poppins-Light', fontSize: 10}}> {item.date} </Text>
                    </View>
                </View>
                }
                />
    </View>
);

const renderTabBar = props => (
    <TabBar
      {...props}    
      indicatorStyle={{ backgroundColor: '#ffff', }}
      style={{ backgroundColor: 'grey', marginTop: 76, justifyContent: 'center', elevation: 3, width: 310, borderTopLeftRadius: 20, borderTopRightRadius: 20, fontFamily: 'Poppins-Bold', fontSize: 12, left: 25}}
    />
  );
  
  export default function TabViewExample() {
    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'pending', title: 'Pending' },
      { key: 'ongoing', title: 'Ongoing' },
      { key: 'review', title: 'Review' },
      { key: 'completed', title: 'Completed' },
    ]);
  
    const renderScene = SceneMap({
      pending: PendingRoute,
      ongoing: OngoingRoute,
      review: ReviewRoute,
      completed: CompletedRoute,
    });
  
    return (
        <View style={styles.container}>
            <View style={{}}>
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
                <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Activity')}>Detail Task</Text>
            </View>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />    
        </View>
    );
  }



// export default class DetailTaskScreen extends Component{
//     render(){
//         return(
//             <View style={styles.container}>
//                 {/* Navbar */}
//                 <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Task')}>
//                     <View style={styles.rectangleBack}>
//                         <Image
//                             style={{width: 17, height: 17, position: 'absolute'}}
//                             source={require('../../assets/images/arrow-back.png')}
//                         />                    
//                     </View>
//                 </TouchableWithoutFeedback>               
//                 {/* Title Text */}
//                 <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Task')}>Detail Task</Text>
//             </View>
//         );
//     }
// }

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