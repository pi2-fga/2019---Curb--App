import React from 'react';
import { Alert, StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
import axios from 'react-native-axios';
import Icon from 'react-native-vector-icons/FontAwesome';

let misturador = 0;
let compressor = 0;

export default class Bottons extends React.Component {

    state = {

        toggleMisturador:true,
        toggleCompressor1:true,
        toggleCompressor2:true
    }

    constructor(props) {

        super(props);
        this._onStateChange = this._onStateChange.bind(this);
    }

    _onStateChange(newState){

        const value = newState?'ON':'OFF'
        this.setState({toogleText:value})
    }

    _onMisturador() {

        const newState = !this.state.toggleMisturador;
        this.setState({toggleMisturador:newState});
        this.props.onStateChange && this.props.onStateChange(newState);
        misturador = 1;
        axios
            .post(
                'https://www.jsonstore.io/56189fbbe9be4c0f3d639eeeb717d800cd5a8b883852947d310edc6926b23762', 
                { misturador: '' + misturador })
            .then(function(response){
                console.log('Misturador ligado com sucesso!');
        });
    }

    _offMisturador() {

        const newState = !this.state.toggleMisturador;
        this.setState({toggleMisturador:newState});
        this.props.onStateChange && this.props.onStateChange(newState);
        misturador = 0;
        axios
            .post(
                'https://www.jsonstore.io/56189fbbe9be4c0f3d639eeeb717d800cd5a8b883852947d310edc6926b23762', 
                { misturador: '' + misturador })
            .then(function(response){
                console.log('Misturador desligado com sucesso!');
        });
    }

    _onPressMisturador(textValue) {
        
        if(textValue == 'OFF') {
            Alert.alert(
                'Ligar/Desligar o Misturador ?',
                'Desejar Ligar o Misturador?', [
                    {
                        text: 'Sim', 
                        onPress: () => this._onMisturador()
                    },{
                        text: 'Não',
                        style: 'cancel',
                    }],
                {cancelable: false}
            )
        } else {
            Alert.alert(
                'Ligar/Desligar Misturador',
                'Desejar Desligar o Misturador?', [
                    {
                        text: 'Sim', 
                        onPress: () => this._offMisturador()
                    },{
                        text: 'Não',
                        style: 'cancel',
                    }],
                {cancelable: false}
            )
        }
    }

    _onCompressor1() {

        const newState = !this.state.toggleCompressor1;
        this.setState({toggleCompressor1:newState});
        this.props.onStateChange && this.props.onStateChange(newState);
        compressor = 1;
        axios
            .post(
                'https://www.jsonstore.io/612eafcc1e18066ef9d8835a9075a4447bd8a2a267c5751fa790d12ca43c86e8', 
                { compressor: '' + compressor })
            .then(function(response){
                console.log('Compressor 1 ligado com sucesso!');
        });
    }

    _offCompressor1() {

        const newState = !this.state.toggleCompressor1;
        this.setState({toggleCompressor1:newState});
        this.props.onStateChange && this.props.onStateChange(newState);
        compressor = 0;
        axios
            .post(
                'https://www.jsonstore.io/612eafcc1e18066ef9d8835a9075a4447bd8a2a267c5751fa790d12ca43c86e8', 
                { compressor: '' + compressor })
            .then(function(response){
                console.log('Compressor 1 desligado com sucesso!');
        });
    }

    _onPressCompressor1(textValue) {

        if(textValue == 'OFF') {
            Alert.alert(
                'Ligar/Desligar o Compressor ?',
                'Desejar Ligar o Compressor?', [
                    {
                        text: 'Sim', 
                        onPress: () => this._onCompressor1()
                    },{
                        text: 'Não',
                        style: 'cancel',
                    }],
                {cancelable: false}
            )
        } else {
            Alert.alert(
                'Ligar/Desligar Compressor',
                'Desejar Desligar o Compressor?', [
                    {
                        text: 'Sim', 
                        onPress: () => this._offCompressor1()
                    },{
                        text: 'Não',
                        style: 'cancel',
                    }],
                {cancelable: false}
            )
        }        
    }

    _onCompressor2() {

        const newState = !this.state.toggleCompressor2;
        this.setState({toggleCompressor2:newState});
        this.props.onStateChange && this.props.onStateChange(newState);
        compressor = 1;
        axios
            .post(
                'https://www.jsonstore.io/fc92470219cc59fdc7129e1f03563a1371883a6d658f57babe0a0d74b55620d3', 
                { compressor: '' + compressor })
            .then(function(response){
                console.log('Compressor 2 ligado com sucesso!');
        });
    }

    _offCompressor2() {

        const newState = !this.state.toggleCompressor2;
        this.setState({toggleCompressor2:newState});
        this.props.onStateChange && this.props.onStateChange(newState);
        compressor = 0;
        axios
            .post(
                'https://www.jsonstore.io/fc92470219cc59fdc7129e1f03563a1371883a6d658f57babe0a0d74b55620d3', 
                { compressor: '' + compressor })
            .then(function(response){
                console.log('Compressor 2 desligado com sucesso!');
        });
    }

    _onPressCompressor2(textValue) {

        if(textValue == 'OFF') {
            Alert.alert(
                'Ligar/Desligar o Compressor ?',
                'Desejar Ligar o Compressor?', [
                    {
                        text: 'Sim', 
                        onPress: () => this._onCompressor2()
                    },{
                        text: 'Não',
                        style: 'cancel',
                    }],
                {cancelable: false}
            )
        } else {
            Alert.alert(
                'Ligar/Desligar Compressor',
                'Desejar Desligar o Compressor?', [
                    {
                        text: 'Sim', 
                        onPress: () => this._offCompressor2()
                    },{
                        text: 'Não',
                        style: 'cancel',
                    }],
                {cancelable: false}
            )
        }        
    }

    render() {
        
        const {toggleMisturador} = this.state;
        const textValueMisturador = toggleMisturador?'OFF':'ON';
        const buttonBgMisturador = toggleMisturador?'red':'green';
        const textColorMisturador = toggleMisturador?'red':'green';

        const {toggleCompressor1} = this.state;
        const textValueCompressor1 = toggleCompressor1?'OFF':'ON';
        const buttonBgCompressor1 = toggleCompressor1?'red':'green';
        const textColorCompressor1 = toggleCompressor1?'red':'green';

        const {toggleCompressor2} = this.state;
        const textValueCompressor2 = toggleCompressor2?'OFF':'ON';
        const buttonBgCompressor2 = toggleCompressor2?'red':'green';
        const textColorCompressor2 = toggleCompressor2?'red':'green';

        return(
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={.3} 
                    onPress={()=>this._onPressMisturador(textValueMisturador)}>
                    <Icon name='power-off' color={buttonBgMisturador} size={100} ></Icon>
                    <Text style={{color:textColorMisturador, textAlign:'center'}}>
                    Misturador: {textValueMisturador}</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.3} 
                    onPress={()=>this._onPressCompressor1(textValueMisturador1)}>
                    <Icon name='power-off' color={buttonBgCompressor1} size={100} ></Icon>
                    <Text style={{color:textColorCompressor1, textAlign:'center'}}>
                    Compressor: {textValueCompressor1}</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.3} 
                    onPress={()=>this._onPressCompressor2(textValueCompressor2)}>
                    <Icon name='power-off' color={buttonBgCompressor2} size={100} ></Icon>
                    <Text style={{color:textColorCompressor2, textAlign:'center'}}>
                    Compressor: {textValueCompressor2}</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: 'white',
     alignItems: 'center'
    },
    buttonContainer: {
      margin: 100
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
});