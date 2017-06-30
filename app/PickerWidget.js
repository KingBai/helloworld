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
    Dimensions,StyleSheet
} from 'react-native';

import Picker from 'react-native-picker';

var data = null;
var picked = null;

export default class PickerTest extends Component {


    constructor(props, context) {
        super(props, context);;
        data = this.props.data;
        picked = this.props.pick;
        this.state = {selectdata:this.props.pick};
    }


    _createDateData() {
        let date = [];
        for(let i=1950;i<2050;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }

    _createAreaData() {
        console.log(area);
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

    _showDatePicker() {
        Picker.init({
            pickerData: this._createDateData(),
            pickerToolBarFontSize: 16,
            pickerFontSize: 16,
            pickerFontColor: [255, 0 ,0, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    _showAreaPicker() {
        Picker.init({
            pickerData: this._createAreaData(),
            selectedValue: picked,
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

    _showTimePicker() {
        let years = [],
            months = [],
            days = [],
            hours = [],
            minutes = [];

        for(let i=1;i<51;i++){
            years.push(i+1980);
        }
        for(let i=1;i<13;i++){
            months.push(i);
            hours.push(i);
        }
        for(let i=1;i<32;i++){
            days.push(i);
        }
        for(let i=1;i<61;i++){
            minutes.push(i);
        }
        let pickerData = [years, months, days, ['am', 'pm'], hours, minutes];
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
            wheelFlex: [2, 1, 1, 2, 1, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
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
    }

    _showSingleData(data1,data2){

        Picker.init({
            pickerData: data,
            selectedValue: picked,
            pickerConfirmBtnText:'确定',
            pickerCancelBtnText:'取消',
            pickerTitleText:'请选择',
            pickerConfirmBtnColor:[0,170,238,1],
            pickerCancelBtnColor:[58,58,58,1],
            pickerTitleColor:[141,141,141,1],
            pickerBg:[255,255,255,1],
            pickerToolBarBg:[255,255,255,1],
            pickerToolBarFontSize:14,
            pickerFontSize:16,
            pickerFontColor:[0,170,238,1],
            onPickerConfirm: data => {
                this.setState({ selectdata:data});
            },
            onPickerCancel: data => {
            },
            onPickerSelect: data => {

            }
        });
        Picker.show();
    }

    _toggle() {
        Picker.toggle();
    }

    _tohide() {
        Picker.hide();
    }

    _isPickerShow(){
        Picker.isPickerShow(status => {
            alert(status);
        });
    }

    render() {

        let view = null;
        switch (this.props.type){
            case 'single':
                view =
                <TouchableOpacity style={this.props.style} onPress={this._showSingleData.bind(this)}>
                    <Text style={styles.inputUnit}>{this.state.selectdata}></Text>
                </TouchableOpacity>;
                break;
            case 'date':
                view =
                    <TouchableOpacity style={this.props.style} onPress={this._showDatePicker.bind(this)}>
                        <Text style={styles.inputUnit}>{this.state.selectdata}</Text>
                    </TouchableOpacity>;
                break;
            case 'time':
                view =
                    <TouchableOpacity style={this.props.style} onPress={this._showTimePicker.bind(this)}>
                        <Text style={styles.inputUnit}>{this.state.selectdata}</Text>
                    </TouchableOpacity>;
                break;
            case 'area':
                view =
                <TouchableOpacity style={this.props.style} onPress={this._showAreaPicker.bind(this)}>
                    <Text style={styles.inputUnit}>{this.state.selectdata}></Text>
                </TouchableOpacity>;
                break;
        }


        return (
            <TouchableOpacity onPress={this._tohide()}>
                <View style={styles.main}>
                    <Text style={styles.inputTitle}>{this.props.titleName}</Text>
                    {view}
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        marginLeft:12,
        marginRight:12,
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

