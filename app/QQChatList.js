/**
 * Created by guiyongdong on 2017/5/22.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native';


export default class QQChatList extends Component {

    static navigationOptions=({navigation})=>({
        title:`${navigation.state.params.data}`,
        headerTruncatedBackTitle:'返回',
        headerStyle:{
            backgroundColor:'white'
        },
        headerTitleStyle:{
            color:'rgb(70,70,70)',
            fontSize:18
        },
        gesturesEnabled:true,
        headerTintColor:'rgb(70,70,70)'
    });


    render() {
        var statusBar;
        if (Platform.OS=='ios') {
            statusBar = (
                <StatusBar
                    barStyle="dark-content"
                    animated={true}
                />
            );
        }
        return(
            <View style={styles.container}>
                {statusBar}
                <TouchableOpacity onPress={()=>{

                }}>
                    <Text>聊天列表界面</Text>
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