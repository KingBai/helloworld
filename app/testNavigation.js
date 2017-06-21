/**
 * Created by lighting on 2017/6/21.
 */
import React, { Component } from 'react';
import {View,Text,Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';


class HomeScreen extends Component {
    static  navigationOptions=({
        title:'首页',
        headerTitle:(
            <View style={{width:60,height:20,backgroundColor:'white'}}/>
        ),
        headerBackTitle:'哈哈哈哈哈',
        headerTruncatedBackTitle:'你好',
        headerRight:(
            <View>
                <Text>right</Text>
            </View>
        ),
        headerLeft:(
            <View>
                <Text>left</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor:'yellow'
        },
        headerTitleStyle:{
            color:'red'
        },
        headerBackTitleStyle:{
            tintColor:'#789'
        },
        headerTintColor:'#000000',
        gesturesEnabled:false
    });

    render() {
        const { navigate } = this.props.navigation;
        console
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'Lucy'})}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
                <Button
                    onPress={()=>{this.props.navigation.navigate("Home")}}
                    title="test some"
                />
            </View>
        );
    }
}

const RouteConfigs ={
    Home: {
        screen: HomeScreen ,
        path:'people/:home'
    },
    Chat: {
        screen: ChatScreen,
        path:'people/:user'
    },
}



const stackNavigatorConfig = ({
    initialRouteName:'Home',
    initialRouteParams:{
        data:'haha'
    },
    navigationOptions:{
        headerTintColor:'red'
    },
    mode:'card',
    headerMode:'screen',
    cardStyle:({backgroundColor:'blue'}),
    onTransitionStart:((route)=>{
        console.log('开始动画');
    }),
    onTransitionEnd:((route)=>{
        console.log('结束动画');
    }),
    transitionConfig:(()=>({
        //因为ios 的导航动画默认是从左到右，所以，这里配置一下动画，使用react-navigation已经实现的从左到右的动画，
        //适配Android，不过，需要导入动画
        //import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
        screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    }))
});

export default JustApp = StackNavigator(RouteConfigs,stackNavigatorConfig);