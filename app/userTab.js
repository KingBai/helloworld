/**
 * Created by lighting on 2017/6/21.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import NavigationManager from './NavigationManager';
import {HelloInputText} from './helloInputText';
import PickerWidget from './PickerWidget';
import Communications from 'react-native-communications';

export default class UserTab extends Component{

    constructor(props){
        super(props)
        this.state={
            isTab1:true,
            result:['1','2','12','21','14','25','16','27','18','29']
        }
    }

    call(){
        Communications.phonecall('010-82781699', true);
    }

    render() {

        var tabView;
        if(this.state.isTab1){
            tabView=
                <UserInput handleVal={this.handleVal} />
        }else {
            tabView=<UserResult resultValue={this.state.result} />
        }

        return(

        <ScrollView  ref='scroll' style={{backgroundColor:'#f1f1f1'}}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={()=>{this.setState({isTab1:true})}}>
                    <View style={this.state.isTab1?styles.tab1:styles.tab2}>
                        <Text style={this.state.isTab1?styles.textActive:styles.textNormal}>测算数据</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>{this.setState({isTab1:false})}}>
                    <View style={this.state.isTab1?styles.tab2:styles.tab1}>
                        <Text style={this.state.isTab1?styles.textNormal:styles.textActive}>测算结果</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            {tabView}

            <View>
                <TouchableOpacity onPress={()=>{
                    NavigationManager.navNavigation.navigate("Second");
                }}>
                    <Text style={styles.texLink}>参考广东电力市场交易基本规则（试行）2017-01-17</Text>
                </TouchableOpacity>

                <View style={this.state.isTab1?styles.bottomView:styles.buttonHide}>
                    <View>

                        <Text style={styles.button}>重置</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() =>{this.setState({
                        result:['12','21','12','21','14','25','16','27','18','29'],
                        isTab1:false
                    })}}>
                        <View>
                            <Text style={styles.button}>测算</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <TouchableOpacity onPress={() => this.call() }>
                    <View style={[styles.bottomView,{marginBottom:30}]}>
                        <Image style={{width:20,height:20}} source={require('./images/tabs/phone.png')}/>
                        <Text style={styles.callPhone}>010-82781699</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>

        )



    }
};

class UserInput  extends Component{

    render() {
        let area = ['广东省','北京市'];
        let picked = ['北京市'];
        return(
            <View style={styles.box}>
                <PickerWidget titleName='市场区域' type='single' data={area} pick={picked}></PickerWidget>
                <HelloInputText flag='true' titleName='双边协商价差' unit='厘/千瓦时'></HelloInputText>
                <HelloInputText flag='true' titleName='双边协商月度分解电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText flag='true' titleName='月度出清结算价差' unit='厘/千瓦时'></HelloInputText>
                <HelloInputText flag='true' titleName='月度竞价成交电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText flag='true' titleName='合同总电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText flag='true' titleName='实际总用电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText flag='true' titleName='综合目录电价' unit='万千瓦时'></HelloInputText>
                <HelloInputText flag='true' titleName='允许偏差范围' unit='%'></HelloInputText>
            </View>
    )}
}


class UserResult extends Component{

    render() {
        let c = this.props.resultValue;
        return(
            <View style={styles.box}>
                <HelloInputText flag='false' textValue={c[0]} titleName='偏差结算电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText flag='false' textValue={c[1]} titleName='长协收益' unit='万元'></HelloInputText>
                <HelloInputText flag='false' textValue={c[2]} titleName='月度竞价收益' unit='万元'></HelloInputText>
                <HelloInputText flag='false' textValue={c[3]} titleName='偏差结算费用' unit='万元'></HelloInputText>
                <HelloInputText flag='false' textValue={c[4]} titleName='市场化前支出' unit='万元'></HelloInputText>
                <HelloInputText flag='false' textValue={c[5]} titleName='实际缴纳电费' unit='万元'></HelloInputText>
            </View>
        )}
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row'
    },
    tab1:{
        flex:1,
        backgroundColor:'#fff',
        borderBottomColor:'#00aaee',
        borderBottomWidth:1,
        height:40
    },
    tab2:{
        flex:1,
        height:40,
        backgroundColor:'#fff',
        borderBottomColor:'#f1f1f1',
        borderBottomWidth:1,
    },
    textActive:{
        textAlign:'center',
        lineHeight:28,
        fontSize:16,
        color:'#00aaee'
    },
    textNormal:{
        textAlign:'center',
        lineHeight:28,
        fontSize:16
    },
    box:{
        marginTop:10,
        backgroundColor:'#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    texLink:{
        flex:1,
        textAlign:'center',
        textDecorationLine:'underline',
        fontSize:12,
        marginTop:30,
        color:'#8d8d8d'
    },
    button:{
        flex:1,
        width:140,
        height:40,
        backgroundColor: 'white',
        textAlign:'center',
        marginLeft:15,
        lineHeight:28
    },
    bottomView:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
    },
    callPhone:{
        fontSize:12,
        color:'#00aaee',
    },
    buttonHide:{
        display:'none'
    }

});