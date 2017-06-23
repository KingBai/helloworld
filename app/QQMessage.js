/**
 * Created by guiyongdong on 2017/5/22.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
    Platform
} from 'react-native';
import NavigationManager from './NavigationManager';

export default class QQMessage extends Component {

    static navigationOptions=({navigation})=>({
        title:'消息',
        headerTruncatedBackTitle:'返回',
        headerRight:(
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Contact");
            }}>
                <View style={{width:60, height:44, justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('./images/tabs/question.png')} style={{width:25,height:25}}/>
                </View>
            </TouchableOpacity>
        ),
        headerLeft:(
            <TouchableOpacity onPress={()=>{
                NavigationManager.drawerNavigation.navigate("DrawerOpen");
            }}>
                <View style={{width:60, height:44, justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('./images/tabs/phone.png')} style={{width:30,height:30}}/>
                </View>
            </TouchableOpacity>
        ),
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

        var statusBar;
        if (Platform.OS=='ios') {
            statusBar = (
                <StatusBar
                    barStyle="light-content"
                    animated={true}
                />
            );
        }
        return(
            <View style={styles.container}>
                {statusBar}
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Second',{'data':'和火星哥的聊天'})
                }}>
                    <Text>聊天界面点击进入聊天</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
});