import React, { Component } from 'react';
import { Text,View,Image,StyleSheet,Keyboard,Button} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {StackNavigator,TabBarBottom} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import WebViewExample from './guangzhou';


/*
const HOME = 'user';
const USER_NORMAL = require('./images/tabs/user.png');
const USER_FOCUS = require('./images/tabs/user_HL.png');
const CO = 'company';
const CO_NORMAL = require('./images/tabs/company.png');
const CO_FOCUS = require('./images/tabs/company_HL.png');

 class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: HOME,
            showTab:true
        }
    }

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{this.setState({showTab:false})});
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{this.setState({showTab:true})});
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    _renderTabItem(img,selectedImg,tag,childView,titleText){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}
                title={titleText}
            >
                {childView}
            </TabNavigator.Item>
        );
    }

    _createChildView(tag) {
        switch (tag){
            case HOME:
                return (
                    <View style={{flex:1}}>
                        <UserTab/>
                        <Button onPress={()=>this.props.navigation.navigate('Second')} title='ssss'></Button>
                    </View>
                );
                break;
            case CO:
                return (
                    <CompanyTab/>
                );
                break;
        }

    }


    render() {
        let tabShow = this.state.showTab?'':{height: 0, overflow: 'hidden' };
        let tabShow2 = this.state.showTab?{}:{ paddingBottom: 0 };
        return (
            <View style={{flex:1}}>
                <TabNavigator  hidesTabTouch={true} tabBarStyle={[styles.tab,tabShow]} sceneStyle={tabShow2}>
                    {this._renderTabItem(USER_NORMAL, USER_FOCUS, HOME, this._createChildView(HOME),'电力用户')}
                    {this._renderTabItem(CO_NORMAL, CO_FOCUS, CO, this._createChildView(CO),'售电公司')}
                </TabNavigator>
            </View>
        );
    }
}
*/


class userPage extends Component {

    static navigationOptions ={
            tabBarLabel:'电力用户',
            tabBarIcon:({focused,tintColor})=>(
                    <Image
                    source={require('./images/tabs/user.png')}
                    style={{width:30,height:30,tintColor:tintColor}}
                    />
            )
            }

            render() {
                console.log('render');
                return(
                    <View style={styles.container}>
                        <Text>电力用户</Text>
                    </View>
                )
            }
}


class companyPage extends Component {

    static navigationOptions ={
        tabBarLabel:'售电公司',
        tabBarIcon:({focused,tintColor})=>(
            <Image
                source={require('./images/tabs/company.png')}
                style={{width:30,height:30,tintColor:tintColor}}
            />
        )
    }

    render() {
        console.log('render');
        return(
            <View style={styles.container}>
                <Text>售电公司</Text>
            </View>
        )
    }
}


const UserTab = TabNavigator({
    UserPage: {
        screen: userPage,
    },
    CompanyPage: {
        screen: companyPage,
    },
}, {
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:true,
    animationEnabled:false,
    lazy:true,
    initialRouteName:'UserPage',
    order:(['UserPage','CompanyPage']),
    backBehavior:'none',
    tabBarOptions:{
        activeTintColor:'red',
        activeBackgroundColor:'blue',
        inactiveTintColor:'yellow',
        inactiveBackgroundColor:'#987',
        showLabel:true,
        labelStyle:{
            fontSize:12
        }
    }
});



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titles:{
        textAlign:'center',
        backgroundColor:'#00aaee',
        height:50,
        color:'#ffffff',
        fontSize:18,
        lineHeight:36
    },
    tab: {
        height: 45,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    tabIcon: {
        width: 22,
        height: 22,
        resizeMode: 'stretch',
        marginTop: 10
    }
});


export default Nav = StackNavigator(
    {
        First:{
            screen:UserTab,
            navigationOptions:({navigation}) => ({
                headerStyle:{
                    title: "广东电力市场交易基本规则（试行）"
                }
            })
        },
        Second:{
            screen:WebViewExample,
            navigationOptions:({navigation}) => ({
                title: "广东电力市场交易基本规则（试行）"
            })
        }
    },
    {
        initialRouteName:'First',
        initialRouteParams:{
            data:'haha'
        },
        navigationOptions:{
            headerTintColor:'red'
        },
        mode:'card',
        headerMode:'screen',
        cardStyle:({backgroundColor:'#f1f1f1'}),
        onTransitionStart:((route)=>{
            console.log('开始动画');
        }),
        onTransitionEnd:((route)=>{
            console.log('结束动画');
        }),
        transitionConfig:(()=>({
            screenInterpolator:CardStackStyleInterpolator.forHorizontal,
        }))
    }
);
