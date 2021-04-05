import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    FlatList,
    ScrollView,
} from 'react-native';

export default class NewsScreen extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                 {/* Navbar */}
                 <View style={{marginBottom: 40}}>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Activity')}>
                        <View style={styles.rectangleBack}>
                            <Image
                                style={{position: 'absolute', width: 17, height: 17}}
                                source={require('../../assets/images/arrow-back.png')}
                            />                    
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.textNavigation} onPress={()=>this.props.navigation.navigate('Home')}>News</Text>
                </View>
                <View style={{flex: 1, backgroundColor: '#f9f9fb',}}>
                    <ScrollView style={{}}>
                        {/* News Container */}
                        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DetailNews')}>
                            <View style={styles.contentContainer}>
                                <Image style={styles.newsPhoto} 
                                source={require('../../assets/images/NewsPhoto1.png')} />
                                <Text style={styles.newsTitle}> Emergency Covid19 </Text>
                                <Text style={styles.newsContent}> Lorem Ipsum </Text>
                                <Text style={styles.newsDate}> Februari 01, 2021 06:30 WIB </Text>
                                <Text style={styles.newsDetail}> Details </Text>
                                <Image style={styles.detailIcon} 
                                source={require('../../assets/images/arrow-next.png')} />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.contentContainer}>
                            <Image style={styles.newsPhoto} 
                            source={require('../../assets/images/Test-BannerImageNews.png')} />
                            <Text style={styles.newsTitle}> Emergency Covid19 </Text>
                            <Text style={styles.newsContent}> Lorem Ipsum </Text>
                            <Text style={styles.newsDate}> Februari 01, 2021 06:30 WIB </Text>
                            <Text style={styles.newsDetail}> Details </Text>
                            <Image style={styles.detailIcon} 
                            source={require('../../assets/images/arrow-next.png')} />
                        </View>
                        <View style={styles.contentContainer}>
                            <Image style={styles.newsPhoto} 
                            source={require('../../assets/images/Test-BannerImageNews.png')} />
                            <Text style={styles.newsTitle}> Emergency Covid19 </Text>
                            <Text style={styles.newsContent}> Lorem Ipsum </Text>
                            <Text style={styles.newsDate}> Februari 01, 2021 06:30 WIB </Text>
                            <Text style={styles.newsDetail}> Details </Text>
                            <Image style={styles.detailIcon} 
                            source={require('../../assets/images/arrow-next.png')} />
                        </View>
                        <View style={styles.contentContainer}>
                            <Image style={styles.newsPhoto} 
                            source={require('../../assets/images/NewsPhoto1.png')} />
                            <Text style={styles.newsTitle}> Emergency Covid19 </Text>
                            <Text style={styles.newsContent}> Lorem Ipsum </Text>
                            <Text style={styles.newsDate}> Februari 01, 2021 06:30 WIB </Text>
                            <Text style={styles.newsDetail}> Details </Text>
                            <Image style={styles.detailIcon} 
                            source={require('../../assets/images/arrow-next.png')} />
                        </View>
                        <View style={styles.contentContainer}>
                            <Image style={styles.newsPhoto} 
                            source={require('../../assets/images/Test-BannerImageNews.png')} />
                            <Text style={styles.newsTitle}> Emergency Covid19 </Text>
                            <Text style={styles.newsContent}> Lorem Ipsum </Text>
                            <Text style={styles.newsDate}> Februari 01, 2021 06:30 WIB </Text>
                            <Text style={styles.newsDetail}> Details </Text>
                            <Image style={styles.detailIcon} 
                            source={require('../../assets/images/arrow-next.png')} />    
                        </View>
                        <View style={styles.contentContainer}>
                         <Image style={styles.newsPhoto} 
                            source={require('../../assets/images/Test-BannerImageNews.png')} />
                            <Text style={styles.newsTitle}> Emergency Covid19 </Text>
                            <Text style={styles.newsContent}> Lorem Ipsum </Text>
                            <Text style={styles.newsDate}> Februari 01, 2021 06:30 WIB </Text>
                            <Text style={styles.newsDetail}> Details </Text>
                            <Image style={styles.detailIcon} 
                            source={require('../../assets/images/arrow-next.png')} />
                        </View>
                        <View style={styles.contentContainer}>
                            <Image style={styles.newsPhoto} 
                            source={require('../../assets/images/NewsPhoto1.png')} />
                            <Text style={styles.newsTitle}> Emergency Covid19 </Text>
                            <Text style={styles.newsContent}> Lorem Ipsum </Text>
                            <Text style={styles.newsDate}> Februari 01, 2021 06:30 WIB </Text>
                            <Text style={styles.newsDetail}> Details </Text>
                            <Image style={styles.detailIcon} 
                            source={require('../../assets/images/arrow-next.png')} />
                        </View>
                    </ScrollView>      
                </View>


                {/* <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, left: 25, top: 71}}>Up to date for you!</Text>
                <View style={{left: 25, top: 71}}>
                    <FlatList
                    contentContainerStyle={{paddingBottom: 100,}}
                    data={[
                        {
                            id: 'NewsContent1',
                            newsPhoto: require('../../assets/images/NewsPhoto1.png'),
                            newsTitle: 'Emergency Covid19',
                            newsContent: 'Lorem Ipsum ...',
                            newsdate: 'Februari 01, 2021 06:30 WIB',
                            newsDetails: 'Details',
                            detailsIcon: require('../../assets/images/arrow-next.png'),
                        },
                        {
                            id: 'NewsContent2',
                            newsPhoto: require('../../assets/images/Test-BannerImageNews.png'),
                            newsTitle: 'Emergency Covid19',
                            newsContent: 'Lorem Ipsum ...',
                            newsdate: 'Februari 01, 2021 06:30 WIB',
                            newsDetails: 'Details',
                            detailsIcon: require('../../assets/images/arrow-next.png'),
                        },
                        {
                            id: 'NewsContent3',
                            newsPhoto: require('../../assets/images/NewsPhoto1.png'),
                            newsTitle: 'Emergency Covid19',
                            newsContent: 'Lorem Ipsum ...',
                            newsdate: 'Februari 01, 2021 06:30 WIB',
                            newsDetails: 'Details',
                            detailsIcon: require('../../assets/images/arrow-next.png'),
                        },
                        {
                            id: 'NewsContent4',
                            newsPhoto: require('../../assets/images/Test-BannerImageNews.png'),
                            newsTitle: 'Emergency Covid19',
                            newsContent: 'Lorem Ipsum ...',
                            newsdate: 'Februari 01, 2021 06:30 WIB',
                            newsDetails: 'Details',
                            detailsIcon: require('../../assets/images/arrow-next.png'),
                        },
                        {
                            id: 'NewsContent5',
                            newsPhoto: require('../../assets/images/NewsPhoto1.png'),
                            newsTitle: 'Emergency Covid19',
                            newsContent: 'Lorem Ipsum ...',
                            newsdate: 'Februari 01, 2021 06:30 WIB',
                            newsDetails: 'Details',
                            detailsIcon: require('../../assets/images/arrow-next.png'),
                        },
                        {
                            id: 'NewsContent6',
                            newsPhoto: require('../../assets/images/Test-BannerImageNews.png'),
                            newsTitle: 'Emergency Covid19',
                            newsContent: 'Lorem Ipsum ...',
                            newsdate: 'Februari 01, 2021 06:30 WIB',
                            newsDetails: 'Details',
                            detailsIcon: require('../../assets/images/arrow-next.png'),
                        },
                        
                    ]}
                    renderItem={({item}) =>
                    <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DetailNews')}>
                        <View style={styles.rectangleContent}>
                            <Image style={{width: 90, height: 100, borderTopLeftRadius: 10, borderTopRightRadius: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 50}} 
                            source={item.newsPhoto} />
                            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 14, left: 99, top: -85, marginBottom: 2}}> {item.newsTitle} </Text>
                            <Text style={{fontSize: 10, fontFamily: 'Poppins-Medium', left: 99, top: -85, marginBottom: 16}}> {item.newsContent} </Text>
                            <Text style={{fontSize: 10, fontFamily: 'Poppins-Light', left: 99, top: -90, }}> {item.newsdate} </Text>
                            <Text style={styles.newsDetail}> {item.newsDetails} </Text>
                            <Image style={{width: 11, height: 11, left: 285, top: -122 }} 
                            source={item.detailsIcon} />
                        </View>
                    </TouchableWithoutFeedback>
                    }
                    />
                </View> */}
                {/* <View style={{backgroundColor: 'pink', left: 25, top: 99, width: 310, height: 100, marginBottom: 20}}></View>
                <View style={{backgroundColor: 'pink', left: 25, top: 99, width: 310, height: 100, marginBottom: 20}}></View>
                <View style={{backgroundColor: 'pink', left: 25, top: 99, width: 310, height: 100, marginBottom: 20}}></View>
                <View style={{backgroundColor: 'pink', left: 25, top: 99, width: 310, height: 100, marginBottom: 20}}></View> */}
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
    rectangleContent:{
        margin: 5,
        width: 310,
        height: 100,
        elevation: 3,
        borderRadius: 10,
        resizeMode: 'center'
    },
    contentContainer:{
        width: 310, 
        height: 100, 
        backgroundColor: '#fff', 
        left: 25, 
        top: 10, 
        marginBottom: 10, 
        elevation: 3, 
        borderRadius: 10
    },
    newsPhoto:{
        width: 90, 
        height: 100, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 50, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 50
    },
    newsTitle:{
        fontFamily: 'Poppins-Bold', 
        fontSize: 14, 
        left: 99, 
        top: -85, 
        marginBottom: 2
    },
    newsContent:{
        fontSize: 10, 
        fontFamily: 'Poppins-Medium', 
        left: 99, 
        top: -85, 
        marginBottom: 16
    },
    newsDate:{
        fontSize: 10, 
        fontFamily: 'Poppins-Light', 
        left: 99, 
        top: -90,
    },
    newsDetail:{
        fontSize: 10, 
        fontFamily: 'Poppins-Medium', 
        left: 245, 
        top: -107
    },
    detailIcon:{
        width: 11, 
        height: 11, 
        left: 285, 
        top: -122 
    },
})