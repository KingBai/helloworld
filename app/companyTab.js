/**
 * Created by lighting on 2017/6/21.
 */
import React, { Component } from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import {TabNavigator,TabBarBottom,TabBarTop} from 'react-navigation';
import UserInputDetail from './userInput';
class companyInput extends React.Component {
    static navigationOptions = {
        tabBarLabel: '测算数据'
    };

    render() {
        console.log(this.props.navigation);
        return (
            <UserInputDetail />
        );
    }
}

class companyResult extends React.Component {
    static navigationOptions = {
        tabBarLabel: '测算结果'
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation('Second', {name: 'Lucy'})}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

export default CompanyTab = TabNavigator({
    companyInput: {
        screen: companyInput,
    },
    companyResult: {
        screen: companyResult,
    },
}, {
    tabBarComponent:TabBarTop,
    tabBarPosition:'top',
    swipeEnabled:true,
    animationEnabled:false,
    lazy:true,
    initialRouteName:'companyInput',
    order:(['companyInput','companyResult']),
    backBehavior:'none',
    //TabBarTop options
    tabBarOptions:{
            activeTintColor:'#00aaee',
            activeBackgroundColor:'#ffffff',
            inactiveTintColor:'#00aaee',
            inactiveBackgroundColor:'#ffffff',
            showLabel:true,
            labelStyle:{
                fontSize:12
            }
     }
});
