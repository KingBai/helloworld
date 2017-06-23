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

let that;

export default class QQContact extends Component {

    // 构造
      constructor(props) {
        super(props);
        that = this;
      }

    static navigationOptions=({navigation})=>({
        title:'联系人',
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
                source={require('./images/tabs/company_HL.png')}
                style={{width:22,height:22,tintColor:tintColor}}
            />
        ),
        headerRight:(
            <TouchableOpacity onPress={()=>{
                that._addFriend("haha");
            }}>
                <View style={{width:70, height:44, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white'}}>添加好友</Text>
                </View>
            </TouchableOpacity>
        )
    });


    _addFriend(msg) {
        alert(msg);
    }

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

                }}>
                    <Text>联系人界面</Text>
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