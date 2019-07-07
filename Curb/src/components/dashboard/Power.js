import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'react-native-axios';

let valor1 = 0;
let valor2 = 0;

export default class Power extends Component {

    state = {
        toggle:true
    }

    constructor(props) {
        super(props)
        this._onStateChange = this._onStateChange.bind(this);
        global.status_curb = 0;

    }

    _onStateChange(newState){
        const value = newState?'ON':'OFF'
        this.setState({toogleText:value})
    }

    _onCurb() {
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
        this.props.onStateChange && this.props.onStateChange(newState)
        global.status_curb = 1;
        valor1 = 42;
        valor2 = 0;
        axios
            .post(
                'https://www.jsonstore.io/6ab2d2053ab011dea0384adc74c574ac48fd77f06bcd69b8f7e321fc902fcca8', 
                { status_carrinho: '' + global.status_curb, 
                  valor1: valor1, 
                  valor2: valor2 })
            .then(function(response){
                console.log('Curb ligado com sucesso!');
        }); 
    }

    _offCurb() {
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
        this.props.onStateChange && this.props.onStateChange(newState) 
        global.status_curb = 0;
        axios
            .post(
                'https://www.jsonstore.io/6ab2d2053ab011dea0384adc74c574ac48fd77f06bcd69b8f7e321fc902fcca8', 
                { status_carrinho: '' + global.status_curb})
            .then(function(response){
                console.log('Curb desligado com sucesso!')
        });
    }

    _onPress(textValue) {
        
        if(textValue == 'OFF') {
            Alert.alert(
                'Ligar/Desligar Curb',
                'Desejar Ligar o Curb?', [
                    {
                        text: 'Sim', 
                        onPress: () => this._onCurb()
                    },{
                        text: 'Não',
                        style: 'cancel',
                    }],
                {cancelable: false}
            )
        } else {
            Alert.alert(
                'Ligar/Desligar Curb',
                'Desejar Desligar o Curb?', [
                    {
                        text: 'Sim', 
                        onPress: () => this._offCurb()
                    },{
                        text: 'Não',
                        style: 'cancel',
                    }],
                {cancelable: false}
            )
        }
    }
    
    render() {
        const {toggle} = this.state;
        const textValue = toggle?'OFF':'ON';
        const buttonBg = toggle?'red':'green';
        const textColor = toggle?'red':'green';
        return(
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={.5} onPress={()=>this._onPress(textValue)}>
                    <Icon name='power-off' color={buttonBg} size={100} ></Icon>
                    <Text style={{color:textColor, textAlign:'center'}}>STATUS: {textValue}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    }
});