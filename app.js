/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { DatePicker, DataPicker } from 'rnkit-actionsheet-picker';

class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress()}
        style={[styles.button, this.props.style]}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}

export default class Example extends Component {

  constructor (props) {
    super(props)
    this.state = {
      date: null,
      data: null,
      datePickerMode: 'date',
      single:null
    }
  }

  datePickerAction() {
    DatePicker.show({
      yearText: '年',
      monthText: '月',
      dayText: '日',
      hourText: '时',
      minutesText: '分',
      datePickerMode: this.state.datePickerMode,
      onPickerConfirm: (selectedDate) => {
        console.log(selectedDate);
        this.setState({
          date: selectedDate
        })
      },
      onPickerCancel: () => {
        this.setState({
          date: 'date picker canceled'
        })
      },
      onPickerDidSelect: (selectedDate) => {
        console.log(selectedDate);
        this.setState({
          date: selectedDate
        })
      }
    })
  }



  singlePickerAction(){

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

      DataPicker.show({
           dataSource: pickerData,
          // dataSource: [{"北京": ["123123", "ssssss"]}, {"广东省": ["深圳"]}],
          // dataSource: [{"北京": [{"北京x": ["123123", "ssssss"]}, {"北京xasdfasdf": ["123123", "ssssss"]}]},{"广东省": [{"深圳": ["福田区", "宝安区"]}]}],
          //dataSource: require('./area.json'),
          defaultSelected: ["女"],
          numberOfComponents: 5,
          onPickerConfirm: (selectedData, selectedIndex) => {
              console.log(selectedData, selectedIndex);
              this.setState({
                  single: JSON.stringify(selectedData) + ' -- ' + JSON.stringify(selectedIndex)
              })
          },
          onPickerCancel: () => {
              this.setState({
                  single: 'data picker canceled'
              })
          },
          onPickerDidSelect: (selectedData, selectedIndex) => {
              this.setState({
                  single: selectedData
              })
          }
      })
  }
  areaPickerAction() {
    DataPicker.show({
      // dataSource: ["男", "女"],
      // dataSource: [{"北京": ["123123", "ssssss"]}, {"广东省": ["深圳"]}],
      // dataSource: [{"北京": [{"北京x": ["123123", "ssssss"]}, {"北京xasdfasdf": ["123123", "ssssss"]}]},{"广东省": [{"深圳": ["福田区", "宝安区"]}]}],
      dataSource: require('./area.json'),
      defaultSelected: ["广东", '深圳市', '福田区'],
      numberOfComponents: 3,
      onPickerConfirm: (selectedData, selectedIndex) => {
        console.log(selectedData, selectedIndex);
        this.setState({
          data: JSON.stringify(selectedData) + ' -- ' + JSON.stringify(selectedIndex)
        })
      },
      onPickerCancel: () => {
        this.setState({
          data: 'data picker canceled'
        })
      },
      onPickerDidSelect: (selectedData, selectedIndex) => {
        this.setState({
          data: selectedData
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row',}}>
          <Button onPress={() => {this.setState({datePickerMode: 'time'})}} text={'time'} style={{backgroundColor: 'gray', width: 50,}}/>
          <Button onPress={() => {this.setState({datePickerMode: 'date'})}} text={'date'} style={{backgroundColor: 'gray', width: 50,}}/>
          <Button onPress={() => {this.setState({datePickerMode: 'datetime'})}} text={'datetime'} style={{backgroundColor: 'gray', width: 80,}}/>
        </View>

        <Button onPress={() => {this.datePickerAction()}} text={'Show DatePicker'}/>

        <Text>date: {this.state.date}</Text>

        <Button onPress={() => {this.areaPickerAction()}} text={'Show AreaPicker'}/>

        <Text>data: {this.state.data}</Text>

        <Button onPress={() => {this.singlePickerAction()}} text={'Show SinglePicker'}/>

        <Text>single: {this.state.single}</Text>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'rgb(255, 102, 1)',
    height: 40,
    padding: 10,
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 14
  }
});
