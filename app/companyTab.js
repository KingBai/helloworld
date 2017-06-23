/**
 * Created by lighting on 2017/6/21.
 */
import React, { Component } from 'react';
import {View,Text,Button,Image,StyleSheet} from 'react-native';
import {TabNavigator,TabBarBottom,TabBarTop} from 'react-navigation';
import UserInputDetail from './userInput';
import NavigationManager from './NavigationManager';
export default class companyResult extends React.Component {

    static navigationOptions=({navigation})=>({
        title:'消息',
        headerTruncatedBackTitle:'返回',
        headerStyle:{
            backgroundColor:'rgb(70,164,251)'
        },
        headerTitleStyle:{
            color:'white',
            fontSize:18
        },
        gesturesEnabled:true,
        headerBackTitleStyle:{
            color:'white'
        },
        tabBarIcon:({focused,tintColor})=>(
            <Image
                source={require('./images/tabs/user.png')}
                style={{width:22,height:22,tintColor:tintColor}}
            />
        )
    });


    render() {
        return (
            <Button
                onPress={()=>{
                    this.props.navigation.navigate('Second')
                }}
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