/**
 * Created by lighting on 2017/6/21.
 */
import React, { Component } from 'react';
import {View, StyleSheet,ScrollView,Button} from 'react-native';
import {HelloInputText} from './helloInputText';
import PickerWidget from './PickerWidget';

export default class UserInputDetail extends Component {

    render() {
        let area = ['广东省','北京市'];
        let picked = ['北京市']

        return (
            <ScrollView ref='scroll'>
                <View style={styles.box}>
                    <PickerWidget titleName='市场区域' type='single' data={area} pick={picked}></PickerWidget>
                    <HelloInputText titleName='双边协商价差' unit='厘/千瓦时'></HelloInputText>
                    <HelloInputText titleName='双边协商月度分解电量' unit='万千瓦时'></HelloInputText>
                    <HelloInputText titleName='月度出清结算价差' unit='厘/千瓦时'></HelloInputText>
                    <HelloInputText titleName='月度竞价成交电量' unit='万千瓦时'></HelloInputText>
                    <HelloInputText titleName='合同总电量' unit='万千瓦时'></HelloInputText>
                    <HelloInputText titleName='实际总用电量' unit='万千瓦时'></HelloInputText>
                    <HelloInputText titleName='综合目录电价' unit='万千瓦时'></HelloInputText>
                    <HelloInputText titleName='允许偏差范围' unit='%'></HelloInputText>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        marginTop:10,
        backgroundColor:'#ffffff'
    }
});

