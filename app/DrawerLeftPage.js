/**
 * Created by lighting on 2017/6/21.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
export default class DrawerLeftPage extends Component {
    static navigationOptions = {
        //标题
        drawerLabel:'购物车',
        //图标
        drawerIcon:({tintColor}) => {
            return (
                <Image
                    source={require('./images/tabs/logo.png')}
                    style={[{width:24,height:24},{tintColor:tintColor}]}
                />
            );
        },
    };
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    //点击关闭侧滑
                    this.props.navigation.navigate('DrawerClose')
                }}>
                    <Text>关闭侧滑栏</Text>
                </TouchableOpacity>
            </View>
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