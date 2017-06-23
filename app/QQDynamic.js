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


export default class QQDynamic extends Component {

    static navigationOptions=({
        title:'动态',
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
                source={require('./images/tabs/company.png')}
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

                }}>
                    <Text>动态界面</Text>
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