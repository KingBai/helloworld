/**
 * Created by lighting on 2017/6/15.
 */
import React, { Component } from 'react';
import { Text,View,Image,StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


const HOME = 'user';
const USER_NORMAL = require('./images/tabs/user.png');
const USER_FOCUS = require('./images/tabs/user_HL.png');
const CO = 'company';
const CO_NORMAL = require('./images/tabs/company.png');
const CO_FOCUS = require('./images/tabs/company_HL.png');

export default class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
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
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }


    render() {
        return (
                <TabNavigator  hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(USER_NORMAL, USER_FOCUS, HOME, this._createChildView(HOME),'电力用户')}
                    {this._renderTabItem(CO_NORMAL, CO_FOCUS, CO, this._createChildView(CO),'售电公司')}
                </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 55,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    tabIcon: {
        width: 32,
        height: 32,
        resizeMode: 'stretch',
        marginTop: 10
    }
});