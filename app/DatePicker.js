/**
 * Bootstrap of PickerTest
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,StyleSheet,TouchableWithoutFeedback,Modal
} from 'react-native';

import Picker from 'react-native-picker';


export default class MyPicker extends Component {


    constructor(props, context) {
        super(props, context);
        this.state={
            showModel:false,
            showText:null
        }
    }


    _showTimePicker() {
        let years = [],
            months = [],
            days = [],
            hours = [],
            minutes = [];

        for(let i=1;i<51;i++){
            years.push(i+1980+'年');
        }
        for(let i=1;i<13;i++){
            months.push(i+'月');
        }
        for(let i=1;i<32;i++){
            days.push(i+'日');
        }

        for(let i=0;i<24;i++){
            hours.push(i+'时');
        }

        for(let i=0;i<61;i++){
            minutes.push(i+'分');
        }
        let pickerData = [years, months, days, hours, minutes];
        let date = new Date();
        let selectedValue = [
            [date.getFullYear()],
            [date.getMonth()+1],
            [date.getDate()],
            [date.getHours() > 11 ? 'pm' : 'am'],
            [date.getHours() === 12 ? 12 : date.getHours()%12],
            [date.getMinutes()]
        ];
        Picker.init({
            pickerData,
            selectedValue,
            pickerTitleText: 'Select Date and Time',
            pickerConfirmBtnColor:[0,170,238,1],
            pickerCancelBtnColor:[58,58,58,1],
            pickerTitleColor:[141,141,141,1],
            pickerBg:[255,255,255,1],
            pickerToolBarBg:[255,255,255,1],
            pickerToolBarFontSize:14,
            pickerFontSize:16,
            pickerFontColor:[0,170,238,1],
            wheelFlex: [2, 1, 1, 2, 1, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
                this.setState({
                    showModel:false,
                    showText:pickedValue
                })
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
                this.setState({
                    showModel:false,
                    showText:pickedValue
                })
            },
            onPickerSelect: pickedValue => {
                let targetValue = [...pickedValue];
                if(parseInt(targetValue[1]) === 2){
                    if(targetValue[0]%4 === 0 && targetValue[2] > 29){
                        targetValue[2] = 29;
                    }
                    else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
                        targetValue[2] = 28;
                    }
                }
                else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
                    targetValue[2] = 30;

                }
                // forbidden some value such as some 2.29, 4.31, 6.31...
                if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                    // android will return String all the time，but we put Number into picker at first
                    // so we need to convert them to Number again
                    targetValue.map((v, k) => {
                        if(k !== 3){
                            targetValue[k] = parseInt(v);
                        }
                    });
                    Picker.select(targetValue);
                    pickedValue = targetValue;
                }
            }
        });
        Picker.show();
        this.setState({
            showModel:true
        })
    }

    _toggle() {
        Picker.toggle();

    }

    _tohide() {
        Picker.hide();
        this.setState({
            showModel:false
        })
    }

    _isPickerShow(){
        Picker.isPickerShow(status => {
            alert(status);
        });
    }

    setModalVisible(visible) {
        this.setState({showModel: visible});
    }

    render() {

        return (
                <View style={{flex:1}}>
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.showModel}
                        onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                        <TouchableWithoutFeedback onPress={()=>{this._tohide()}}>
                            <View style={{position:'absolute', top: 0, bottom: 0, left:0, right: 0, backgroundColor:'rgba(20,20,20, 0.3)'}}>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                    <TouchableOpacity onPress={this._showTimePicker.bind(this)}>
                        <Text style={{height:20,width:100,backgroundColor:'#e6e'}}>日期选择</Text>
                    </TouchableOpacity>
                    <Text>{this.state.showText}</Text>
                </View>

        );
    }
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputTitle:{
        flex:1,
        color:'#3A3A3A',
        fontSize:15,
        backgroundColor:'#fff',
        lineHeight:35,
        textAlign:'left'
    },
    inputUnit:{
        flex:1,
        color:'#8d8d8d',
        fontSize:14,
        lineHeight:30,
        textAlign:'right',
        backgroundColor:'#fff',
    },
    inputStyle:{
        flex:3,
        color:'#3a3a3a',
        padding: 0,
        textAlign:'right',
        marginRight:4,
        backgroundColor:'#fff',
    }
});

