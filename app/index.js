/**
 * Created by lighting on 2017/6/15.
 */
import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, TouchableWithoutFeedback,ScrollView,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabNavigation from './tabNavigation';
import ChatScreen from './guangzhou';


class MainScreen extends Component {

    static navigationOptions = ({ navigation }) => (
        {
        title: `市场化交易测算（）`,
        headerBackTitle:'',
        headerTruncatedBackTitle:'',
        headerRight:(
            <View>
                <Text style={{fontSize:18, color:'#ffffff',marginRight:12,fontWeight:'bold'}}>···</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor: '#00aaee',

        },
        headerTitleStyle:{
            color:'#ffffff',
            fontSize:18
        },
        headerBackTitleStyle:{
            tintColor:'#789'
        },
        gesturesEnabled:true
    }
    );


    render() {
        return (
            <TabNavigation />
        );
    }
}




const styles = StyleSheet.create({
    tab:{
        flexDirection: 'row',
        height:50,
        alignSelf: 'stretch',
        backgroundColor:'#fff'
    },
    textview: {
        flex: 1,
        alignSelf: 'center',
    },
    textstyle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    tabDefault:{
        textAlign:'center',
        color:'#3A3A3A',
        fontSize:16,
        lineHeight:37
    },
    tabActive:{
        textAlign:'center',
        color:'#00aaee',
        fontSize:16,
        lineHeight:37
    },
    tabActiveBorder:{
        flex:1,
        borderStyle:'solid',
        borderBottomColor:'#00aaee',
        borderBottomWidth:2
    },
    tabNoBorder:{
        flex:1
    },
    box:{
        backgroundColor:'#fff',
        marginTop:10
    },
    linkText:{
        fontSize:12,
        textAlign:'center',
        color:'#8d8d8d',
        marginTop:30,
        marginBottom:30,
        borderBottomColor:'#8d8d8d',
        borderStyle:'solid',
        borderBottomWidth:1,
        marginLeft:12,
        marginRight:12,
        alignSelf: 'center'
    }

});


// 注册导航
export default  SimpleApp = StackNavigator({
    Home:{
            screen: MainScreen
        }
});