/**
 * Created by lighting on 2017/6/21.
 */
import React, { Component } from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import {TabNavigator,TabBarBottom} from 'react-navigation';
class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/tabs/user.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./images/tabs/company.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),

    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
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

export default MyApp = TabNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:true,
    animationEnabled:false,
    lazy:true,
    initialRouteName:'Home',
    order:(['Home','Notifications']),
    backBehavior:'none',
    //TabBarTop options
/*
  tabBarOptions:{
        activeTintColor:'red',
        activeBackgroundColor:'blue',
        inactiveTintColor:'yellow',
        inactiveBackgroundColor:'#987',
        showLabel:true,
        labelStyle:{
            fontSize:12
        }
    }*/
    //TabBarBottom options
    tabBarOptions:{
        activeTintColor:'red',
        inactiveTintColor:'yellow',
        showIcon:false,
        showLabel:true,
        upperCaseLabel:false,
        labelStyle:{
            fontSize:12
        },
        indicatorStyle:'green',
        pressColor:'#823453',
        pressOpacity:0.8,
        scrollEnabled:true,
        tabStyle:{
            height:44
        }
    }
});
