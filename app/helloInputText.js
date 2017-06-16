/**
 * Created by lighting on 2017/6/15.
 */
import React, { Component } from 'react';
import {Text, View, TextInput,StyleSheet,Picker} from 'react-native';


export class HelloInputText extends Component {


    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.inputTitle}>{this.props.titleName}</Text>
                <TextInput underlineColorAndroid="transparent" style={styles.inputStyle}></TextInput>
                <Text style={styles.inputUnit}>{this.props.unit}</Text>
            </View>
        )
    }
}

export class HelloPicker extends Component{

    constructor(props){
        super(props);
        this.state={language:'beijing'}
    }


    render(){
        return(
            <View style={styles.main}>
                <Text style={styles.inputTitle}>{this.props.titleName}</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}
                    style={styles.inputTitle}
                >
                    <Picker.Item label="广东省" value="guangdong" />
                    <Picker.Item label="北京" value='beijing' />
                </Picker>
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
        marginTop:10
    },
    inputTitle:{
        flex:1,
        color:'#3A3A3A',
        fontSize:15,
        backgroundColor:'#fff',
        lineHeight:30,
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