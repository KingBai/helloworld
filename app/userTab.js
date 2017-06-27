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
import calculator from './calculate';

export default class UserTab extends Component{

    constructor(props){
        super(props)
        this.state={
            isTab1:true,
            result:['','','','','','','','','',''],
            inputArray:['','','','','','','','']
        }
    }

    call(){
        Communications.phonecall('010-82781699', true);
    }

    calculate(props){
        this.state.inputArray;
    }

    render() {

/*        var tabView;
        if(this.state.isTab1){
            tabView=
                <UserInput />
        }else {
            tabView=<UserResult resultValue={this.state.result} />
        }*/
        let area = ['广东省','北京市'];
        let picked = ['北京市'];
        let c = this.state.result;

        return(
    <TouchableWithoutFeedback onPress={}>
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

            <View style={this.state.isTab1?styles.box:styles.hidden}>
                <PickerWidget titleName='市场区域' type='single' data={area} pick={picked}></PickerWidget>
                <HelloInputText index="0" changeFather={(index,text)=>{this.state.inputArray[index]=text}}    flag='true' titleName='双边协商价差1' unit='厘/千瓦时'></HelloInputText>
                <HelloInputText index='1' changeFather={(index,text)=>{this.state.inputArray[index]=text}}    flag='true' titleName='双边协商月度分解电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText index='2' changeFather={(index,text)=>{this.state.inputArray[index]=text}}    flag='true' titleName='月度出清结算价差' unit='厘/千瓦时'></HelloInputText>
                <HelloInputText index='3' changeFather={(index,text)=>{this.state.inputArray[index]=text}}    flag='true' titleName='月度竞价成交电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText index='4' changeFather={(index,text)=>{this.state.inputArray[index]=text}}    flag='true' titleName='合同总电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText index='5' changeFather={(index,text)=>{this.state.inputArray[index]=text}}    flag='true' titleName='实际总用电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText index='6' changeFather={(index,text)=>{this.state.inputArray[index]=text}}    flag='true' titleName='综合目录电价' unit='万千瓦时'></HelloInputText>
                <HelloInputText index='7' changeFather={(index,text)=>{this.state.inputArray[index]=text}}    flag='true' titleName='允许偏差范围' unit='%'></HelloInputText>
            </View>


            <View style={!this.state.isTab1?styles.resultBoxBack:styles.hidden}>
                <Text style={{marginTop:12,marginLeft:12,fontSize:12}}>用户收益</Text>
                <View style={styles.resultBox}>
                    <Text style={{flex:1,fontSize:40,textAlign:'right',color:'#00AAee'}}>{c[0]}</Text>
                    <Text style={{flex:1,fontSize:12,textAlign:'left',paddingTop:20,color:'#8d8d8d'}}>万元</Text>
                </View>
            </View>
            <View style={this.state.isTab1?styles.hidden:styles.box}>
                <HelloInputText flag='false' textValue={c[1]} titleName='偏差结算电量' unit='万千瓦时'></HelloInputText>
                <HelloInputText flag='false' textValue={c[2]} titleName='长协收益' unit='万元'></HelloInputText>
                <HelloInputText flag='false' textValue={c[3]} titleName='月度竞价收益' unit='万元'></HelloInputText>
                <HelloInputText flag='false' textValue={c[4]} titleName='偏差结算费用' unit='万元'></HelloInputText>
                <HelloInputText flag='false' textValue={c[5]} titleName='市场化前支出' unit='万元'></HelloInputText>
                <HelloInputText flag='false' textValue={c[6]} titleName='实际缴纳电费' unit='万元'></HelloInputText>
            </View>

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
                    <TouchableWithoutFeedback onPress={() =>{
                        let result =calculator.doConsCalc(
                            this.state.inputArray[0], this.state.inputArray[1],this.state.inputArray[2],
                            this.state.inputArray[3], this.state.inputArray[4],this.state.inputArray[5],
                            this.state.inputArray[6],this.state.inputArray[7]
                        );
                        this.setState({
                            result:result,
                            isTab1:false
                        })
                        console.log(this.state.inputArray)
                    }}>
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
    </TouchableWithoutFeedback>
        )



    }
};


const styles = StyleSheet.create({
    hidden:{
      display:'none'
    },
    container:{
        flex: 1,
        flexDirection: 'row'
    },
    tab1:{
        flex:1,
        backgroundColor:'#fff',
        borderBottomColor:'#00aaee',
        borderBottomWidth:2,
        height:40
    },
    tab2:{
        flex:1,
        height:40,
        backgroundColor:'#fff',
        borderBottomColor:'#e6e6e6',
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
    },
    resultBox:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultBoxBack:{
        flex:1,backgroundColor:'#fff',height:120,marginLeft:12,marginRight:12,marginTop:12
    }

});