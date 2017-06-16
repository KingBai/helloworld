/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import TabBar from './app/tabbar';
import SimpleApp from './app/mynavigation';
import Title from './app/index';


class JdApp extends Component {
    render() {
        return (
            <Title text="计算器"/>
        )
    }
}

AppRegistry.registerComponent('helloworld', () => JdApp);
