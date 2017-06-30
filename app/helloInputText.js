/**
 * Created by lighting on 2017/6/15.
 */
import React, { Component } from 'react';
import {Text, View, TextInput,StyleSheet,Dimensions,Keyboard,PixelRatio} from 'react-native';
import NavigationManager from './NavigationManager';

export class HelloInputText extends Component {


    constructor(props){
        super(props)
        this.state={
            downloadY:0,
            keyboardSpace:216
        }
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    }


    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow (frames) {
        if(!frames.endCoordinates){
            return;
        }
        this.setState({
            keyboardSpace : frames.endCoordinates.height//获取键盘高度
        })
    }

    _keyboardDidHide (frame) {

    }






        render() {
            let textView =null;
            if(this.props.flag=='true'){
                textView =
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.inputStyle}
                        keyboardType = {'numeric'}
                        onFocus={()=>{
                            var height = 563-(50+this.state.downloadY-this.props.scrollKey);
                            //console.log('wh'+Dimensions.get('window').height+'height:'+this.props.scrollKey+"keyboard"+this.state.keyboardSpace)
                            if(height<this.state.keyboardSpace){
                                let scroll = this.state.keyboardSpace-height+this.props.scrollKey;//键盘高度-元素距离底部位置+已滚动距离
                                NavigationManager.scrollView.scrollTo({y:scroll})
                            }
                        }}
                        onChangeText={text=>{this.props.changeFather(this.props.index,text)}}
                    />;
            }else {
                textView = <Text style={styles.ResultStyle}>{this.props.textValue}</Text>;
            }

            return (
                    <View style={styles.main} onLayout={e=>{
                        this.setState({
                            downloadY: e.nativeEvent.layout.y
                        })
                    }} >
                            <Text style={styles.inputTitle}>{this.props.titleName}</Text>
                            {textView}
                            <Text style={styles.inputUnit}>{this.props.unit}</Text>
                    </View>
            )
    }
}


const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        borderTopColor:'#e6e6e6',
        borderStyle:'solid',
        borderTopWidth:1,
        marginLeft:12,
        marginRight:12,
    },
    inputTitle:{
        flex:1,
        color:'#3A3A3A',
        fontSize:15,
        backgroundColor:'#fff',
        lineHeight:36,
        textAlign:'left'
    },
    inputUnit:{
        color:'#8d8d8d',
        fontSize:14,
        lineHeight:36,
        textAlign:'right',
        backgroundColor:'#fff',
    },
    inputStyle:{
        flex:1,
        color:'#3a3a3a',
        padding: 0,
        textAlign:'right',
        marginRight:4,
        backgroundColor:'#fff',
    },
    ResultUnit:{
        color:'#8d8d8d',
        fontSize:14,
        lineHeight:36,
        textAlign:'right',
        backgroundColor:'#fff',
    },
    ResultStyle:{
        flex:1,
        padding: 0,
        marginRight:4,
        backgroundColor:'#fff',
        textAlign:'right',
        lineHeight:36,
        fontSize:14,
        color:'#00aaee'
    }
});