import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import DrawerHomePage from './DrawerHomePage';
import DrawerLeftPage from './DrawerLeftPage';
import {DrawerNavigator,DrawerItems} from 'react-navigation';

const CustomDrawerContentComponent = (props)=>{
    return(
        <DrawerLeftPage style={styles.container} {...props} />
    );
};

const Drawer = DrawerNavigator(
    {
        Home:{
            screen:DrawerHomePage,
        },
        Left:{
            screen:DrawerLeftPage
        },
        Left2:{
            screen:DrawerLeftPage
        },
        Left3:{
            screen:DrawerLeftPage
        },
        Left4:{
            screen:DrawerLeftPage
        },
        Left5:{
            screen:DrawerLeftPage
        },
        Left6:{
            screen:DrawerLeftPage
        },
        Left7:{
            screen:DrawerLeftPage
        },
        Left8:{
            screen:DrawerLeftPage
        },
        Left9:{
            screen:DrawerLeftPage
        },
        Left10:{
            screen:DrawerLeftPage
        },
        Left11:{
            screen:DrawerLeftPage
        },
        Left12:{
            screen:DrawerLeftPage
        },
        Left13:{
            screen:DrawerLeftPage
        },
        Left14:{
            screen:DrawerLeftPage
        },
        Left15:{
            screen:DrawerLeftPage
        },
    },
/*    {
        drawerWidth:300,
        drawerPosition:'right',
        contentOptions:{
            activeTintColor: '#e91e63',
            items:["Home"],
            activeItemKey:'abc',
            activeBackgroundColor:'yellow',
            inactiveTintColor:'blue',
            inactiveBackgroundColor:'red',
            onItemPress:((route)=>{
                console.log(route);
            }),
            labelStyle:{
                fontSize:30
            },
            style:{
                marginRight:30
            }
        }
    }*/
/*    {
        drawerWidth:300,
        drawerPosition:'left',
        //ScrollView作为我们的侧滑界面，内部依然是DrawerItems
        contentComponent:props => <ScrollView><DrawerItems {...props} /></ScrollView>,
        contentOptions:{
            activeTintColor: '#e91e63',
            items:["Home"],
            activeItemKey:'abc',
            activeBackgroundColor:'yellow',
            inactiveTintColor:'blue',
            inactiveBackgroundColor:'red',
            onItemPress:((route)=>{
                console.log(route);
            }),
            labelStyle:{
                fontSize:30
            },
            style:{
                marginRight:30
            }
        }
    }*/
    {
        drawerWidth:300,
        drawerPosition:'left',
        contentComponent:(CustomDrawerContentComponent)
    }
);
export default class DrawerPage extends Component {
    render() {
        return(
            <Drawer/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
