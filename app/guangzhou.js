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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop:20,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#4a9df8',
    },
    textstyle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    textview: {
        flex: 1,
        alignSelf: 'center',
    },
});