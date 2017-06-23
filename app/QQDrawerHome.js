/**
 * Created by guiyongdong on 2017/5/22.
 */
import React,{Component} from 'react';
import QQMessage from './QQMessage';
import QQContact from './QQContact';
import QQDynamic from './QQDynamic';
import QQChatList from './QQChatList';
import NavigationManager from './NavigationManager';
import {TabNavigator,StackNavigator,TabBarBottom} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';


const Tab = TabNavigator(
    {
        Message:{
            screen:QQMessage
        },
        Contact:{
            screen:QQContact,
        },
        Dynamic:{
            screen:QQDynamic
        }
    },
    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        lazy:true,
        initialRouteName:'Message',
        backBehavior:'none',
        tabBarOptions:{
            activeTintColor:'rgb(78,187,251)',
            activeBackgroundColor:'white',
            inactiveTintColor:'rgb(127,131,146)',
            inactiveBackgroundColor:'white',
            labelStyle:{
                fontSize:12
            }
        }
    }
);

const Nav = StackNavigator(
    {
        Tab:{
            screen:Tab
        },
        ChatList:{
            screen:QQChatList
        }
    },
    {
        mode:'card',
        headerMode:'float',
        transitionConfig:(()=>({
            screenInterpolator:CardStackStyleInterpolator.forHorizontal
        }))
    }
);

export default class QQDrawerHome extends Component {

    componentDidMount() {
        NavigationManager.drawerNavigation = this.props.navigation;
    }

    render() {
        return(
            <Nav/>
        );
    }
}


