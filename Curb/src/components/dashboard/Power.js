import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Power extends Component {

    state = {
        toggle:true
    }

    constructor(props) {
        super(props)
        this._onStateChange = this._onStateChange.bind(this)
    }

    _onStateChange(newState){
        const value = newState?'ON':'OFF'
        this.setState({toogleText:value})
    }

    _onCurb() {
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
        this.props.onStateChange && this.props.onStateChange(newState)
    }

    _offCurb() {
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
        this.props.onStateChange && this.props.onStateChange(newState) 
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