import React, {Component} from 'react';
import {Text, 
    View,
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity,
    Modal,
    useWindowDimensions,
    Dimensions,
    Image,
    FlatList,
    } from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const NotifRoute = () => (
        <FlatList        
            contentContainerStyle={{paddingBottom: 40,}}
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
            <View style={{flexDirection: 'row', width: 310, height: 60, backgroundColor: '#fff', borderBottomColor: '#262734', borderBottomWidth: 0.3,}}>
                <Image 
                    style={{width: 50, height: 50, left: 10, marginRight: 10}} 
                    source={item.menuIcon} />
                <View style={{flexDirection: 'column'}}>
                    <Text style={{left: 16, fontFamily: 'Poppins-Bold', fontSize: 12, }}> {item.notifname} </Text>
                    <Text style={{left: 16, fontFamily: 'Poppins-Medium', fontSize: 10}}> {item.status} </Text>
                    <Text style={{left: 16, fontFamily: 'Poppins-Light', fontSize: 10}}> {item.date} </Text>
                </View>
            </View>
            }
            />
);

const ApprovalRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FFFF', width: 310, height: 625, elevation: 3 }}> 
        <FlatList
                style={{top:500, left: 25}}
                ListHeaderComponent={<View style={{height:400}}/>}
                ListFooterComponent={<View style={{height:900}}/>}
                contentContainerStyle={{paddingBottom: 40}}
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
                    
                ]}
                renderItem={({item}) =>
                <View style={{flexDirection: 'row', width: 310, height: 59.5, backgroundColor: '#fff', borderBottomColor: '#262734', borderBottomWidth: 1,}}>
                    <Image 
                        style={{width: 50, height: 50, left: 10, marginRight: 10}} 
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
      style={{ backgroundColor: 'grey', marginTop: 75, justifyContent: 'center', elevation: 3, width: 310, borderTopLeftRadius: 20, borderTopRightRadius: 20, fontFamily: 'Poppins-Bold', fontSize: 12}}
    />
  );
  
  export default function TabViewExample() {
    // constructor(props){
    //     super(props);
    // }
    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'notif', title: 'Notification' },
      { key: 'approv', title: 'Approval' },
    ]);
  
    const renderScene = SceneMap({
      notif: NotifRoute,
      approv: ApprovalRoute,
    });

    return (
        <View style={styles.container}>
            <View style={{}}>
                {/* Navbar */}
                <Text style={styles.textMenuActivity} onPress={()=>this.props.navigation.navigate('Activity')}>Activity</Text>
                <Text style={styles.textMenuHome} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <View style={styles.selectionMenuNotification}>
                    <Text style={styles.textMenuNotification} onPress={()=>this.props.navigation.navigate('Notification')} >Notification</Text>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <TabView
                    // style={{backgroundColor: '#395'}}                    
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
            {/* <Text onPress={()=>this.props.navigation.navigate('Home')}>KNTL</Text> */}
        </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    textMenuActivity:{      
        position: 'absolute',
        left: 55,
        top : 22,
        color: 'rgba(38, 39, 52, 0.4)',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
    textMenuHome:{
        position: 'absolute',
        left: 158,
        top : 22,
        color: 'rgba(38, 39, 52, 0.4)',
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21
    },
    textMenuNotification:{     
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        lineHeight: 21,
        color: '#f9f9fb',
        textAlign: 'center',
    },
    selectionMenuNotification:{
        justifyContent: 'center',
        position: 'absolute',
        width: 98,
        height: 16,
        left: 237,
        top: 25,
        backgroundColor: '#099f84',
        borderRadius: 50,
    },
  })