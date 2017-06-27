/**
 * Created by lighting on 2017/6/15.
 */
import React, { Component } from 'react';
import {Text, View, TextInput,StyleSheet} from 'react-native';

export class HelloInputText extends Component {

        constructor(props){
            super(props)
        }

        render() {
            let textView =null;
            if(this.props.flag=='true'){
                textView =
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.inputStyle}
                        keyboardType = {'numeric'}
                        onChangeText={text=>{this.props.changeFather(this.props.index,text)}}
                    />;
            }else {
                textView = <Text style={styles.ResultStyle}>{this.props.textValue}</Text>;
            }

            return (
                <View style={styles.main}>
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