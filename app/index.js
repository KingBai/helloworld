import React, { Component } from 'react';
import { Text,View,Image,StyleSheet,Keyboard,Dimensions,StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import WebViewExample from './guangzhou';
import UserTab from './userTab';
import CompanyTab from './companyTab';
import NavigationManager from './NavigationManager';

 const HOME = 'user';
 const USER_NORMAL = require('./images/tabs/user.png');
 const USER_FOCUS = require('./images/tabs/user_HL.png');
 const CO = 'company';
 const CO_NORMAL = require('./images/tabs/company.png');
 const CO_FOCUS = require('./images/tabs/company_HL.png');

 class TabBar extends Component {

     componentDidMount() {
         var {setParams} = this.props.navigation;
         setParams({'haha':'abc'});
         NavigationManager.navNavigation = this.props.navigation;
     }


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
                 <UserTab/>
             );
             break;
             case CO:
             return (<UserTab/>);
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
    }
});



export default Nav = StackNavigator(
    {
        First:{
            screen:TabBar,
            navigationOptions:({navigation}) => ({
                header:(
                    <View style={{width:Dimensions.get('window').width,height:55,backgroundColor:'#00aaee'}}>
                        <StatusBar
                            backgroundColor='#ff0000'
                            translucent={true}
                            hidden={true}
                            animated={true}
                        />
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff',marginTop:20}}>市场化交易测算</Text>

                    </View>
                )
            })
        },
        Second:{
            screen:WebViewExample,
            navigationOptions:({navigation}) => ({
/*                header:(
                    <View style={{width:Dimensions.get('window').width,height:55,backgroundColor:'#00aaee'}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff',lineHeight:38}}>广东电力市场交易基本规则（试行）</Text>
                    </View>
                ),*/
                title:'广东电力市场交易基本规则（试行）',
                headerStyle: {
                    backgroundColor:'#00aaee'
                },
                headerTitleStyle:{
                    color:'#ffffff',
                    fontSize:12
                },
                headerBackTitleStyle:{
                    tintColor:'#fff'
                },
                headerTintColor:'#fff',
                gesturesEnabled:false
            })
        }
    },
    {
        initialRouteName:'First',
        navigationOptions:{
            headerTintColor:'red'
        },
        mode:'card',
        headerMode:'screen',
        cardStyle:({backgroundColor:'#F5F5F5'}),
        transitionConfig:(()=>({
            screenInterpolator:CardStackStyleInterpolator.forHorizontal,
        }))
    }
);