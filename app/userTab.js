/**
 * Created by lighting on 2017/6/21.
 */
import React, { Component } from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import {TabNavigator,TabBarBottom,TabBarTop} from 'react-navigation';
import UserInputDetail from './userInput';
class userInput extends React.Component {
    static navigationOptions = {
        tabBarLabel: '测算数据'
    };

    render() {
        return (
            <UserInputDetail />
        );
    }
}

class userResult extends React.Component {
    static navigationOptions = {
        tabBarLabel: '测算结果'
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Second')}
                title="Go back home"
            />
        );
    }
}

export default UserTab = TabNavigator({
    UserInput: {
        screen: userInput,
    },
    UserResult: {
        screen: userResult,
    },
}, {
    tabBarComponent:TabBarTop,
    tabBarPosition:'top',
    swipeEnabled:true,
    animationEnabled:false,
    lazy:true,
    initialRouteName:'UserInput',
    order:(['UserInput','UserResult']),
    backBehavior:'none',
    //TabBarTop options
    tabBarOptions:{
        activeTintColor:'#00aaee',
        inactiveTintColor:'#3a3a3a',
        showIcon:false,
        showLabel:true,
        upperCaseLabel:false,
        labelStyle:{
            fontSize:12,
        },
        style: {
            backgroundColor:'#ffffff',
        },
        indicatorStyle:{
            backgroundColor:'#00aaee'
        }
    }
});
