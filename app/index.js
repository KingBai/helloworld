/**
 * Created by lighting on 2017/6/15.
 */
import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import {HelloInputText,HelloPicker} from './helloInputText';
import Picker from 'react-native-picker';
import area from './area.json';

const tab1 = '测算数据';
const tab2 = '测算结果';


export default class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            showText:true
        }
    }

    _createAreaData() {
        let data = [];
        let len = area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }



    _showAreaPicker() {
        Picker.init({
            pickerData: this._createAreaData(),
            selectedValue: ['河北', '唐山', '古冶区'],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }


    render() {
        let view1 = this.state.showText?styles.tabActiveBorder:styles.tabNoBorder;
        let view2 = this.state.showText?styles.tabNoBorder:styles.tabActiveBorder;
        let inputView =
        <View>
            <HelloInputText titleName='合同类型' unit='厘/千瓦时'></HelloInputText>
        </View>;
        let resultView = <View><Text>b</Text></View>;
        let data = [];
        for(var i=0;i<100;i++){
            data.push(i);
        }



        return (
            <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <View style={styles.title}>
                    <View style={styles.textview}>
                        <Text style={styles.textstyle}>{this.props.text || "标题头"}</Text>
                    </View>
                </View>
                <View style={styles.tab}>
                    <TouchableWithoutFeedback  onPress={()  =>this.setState({showText:true})}><View style={view1}><Text style={this.state.showText?styles.tabActive:styles.tabDefault}>{tab1}</Text></View></TouchableWithoutFeedback>
                    <TouchableWithoutFeedback  onPress={()  =>this.setState({showText:false})}><View style={view2}><Text style={this.state.showText?styles.tabDefault:styles.tabActive}>{tab2}</Text></View></TouchableWithoutFeedback>
                </View>
                {this.state.showText?inputView:resultView}
                <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._showAreaPicker.bind(this)}>
                    <Text>AreaPicker</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#4a9df8',
    },
    tab:{
        flexDirection: 'row',
        height:50,
        alignSelf: 'stretch',
        backgroundColor:'#fff'
    },
    textview: {
        flex: 1,
        alignSelf: 'center',
    },
    textstyle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    tabDefault:{
        textAlign:'center',
        color:'#3A3A3A',
        fontSize:16,
        lineHeight:37
    },
    tabActive:{
        textAlign:'center',
        color:'#00aaee',
        fontSize:16,
        lineHeight:37
    },
    tabActiveBorder:{
        flex:1,
        borderStyle:'solid',
        borderBottomColor:'#00aaee',
        borderBottomWidth:2
    },
    tabNoBorder:{
        flex:1
    }
});