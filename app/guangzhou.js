/**
 * Created by lighting on 2017/6/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    Text
} from 'react-native';

const {width, height} = Dimensions.get('window');
let source =require('./rules-guangdong.html');
export default class WebViewExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <WebView
                    style={{width:width,height:height-20,backgroundColor:'#f2f2f2'}}
                    source={source}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
        );
    }
}