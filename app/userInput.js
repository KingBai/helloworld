/**
 * Created by lighting on 2017/6/21.
 */
import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,KeyboardAvoidingView,Image,Keyboard} from 'react-native';
import {HelloInputText} from './helloInputText';
import PickerWidget from './PickerWidget';
import NavigationManager from './NavigationManager';
import Communications from 'react-native-communications';

export class UserInput extends Component {


    selectTopic(){
        Communications.phonecall('010-82781699', true);
    }

    render() {

    }
}

export class UserResult extends Component {


    constructor(props) {
        super(props);
        console.log(NavigationManager.navNavigation);
    }


    selectTopic(){
        Communications.phonecall('010-82781699', true);
    }

    render() {

        let array = this.props.justArray;
        return (
            <ScrollView ref='scroll' style={{backgroundColor:'#f1f1f1'}}>
                <View style={styles.box}>
                    <HelloInputText flag='false' textValue={array[0]} titleName='偏差结算电量' unit='万千瓦时'></HelloInputText>
                    <HelloInputText flag='false' textValue={array[1]} titleName='长协收益' unit='万元'></HelloInputText>
                    <HelloInputText flag='false' textValue={array[2]} titleName='月度竞价收益' unit='万元'></HelloInputText>
                    <HelloInputText flag='false' textValue={array[3]} titleName='偏差结算费用' unit='万元'></HelloInputText>
                    <HelloInputText flag='false' textValue={array[4]} titleName='市场化前支出' unit='万元'></HelloInputText>
                    <HelloInputText flag='false' textValue={array[5]} titleName='实际缴纳电费' unit='万元'></HelloInputText>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        NavigationManager.navNavigation.navigate("Second");
                    }}>
                        <Text style={styles.texLink}>参考广东电力市场交易基本规则（试行）2017-01-17</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.selectTopic() }>
                        <View style={[styles.bottomView,{marginBottom:30}]}>
                            <Image style={{width:20,height:20}} source={require('./images/tabs/phone.png')}/>
                            <Text style={styles.callPhone}>010-82781699</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
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
        width:150,
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
    }

});

