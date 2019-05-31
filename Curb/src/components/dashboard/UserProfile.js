import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Profile extends Component {

    state = {
        toggle:true
    }

    constructor(props) {
        super(props)
        this._onStateChange = this._onStateChange.bind(this)
    }

    _onStateChange(newState){
        const value = newState?'ATIVO':'INATIVO'
        this.setState({toogleText:value})
    }

    render() {
        const {toggle} = this.state;
        const textValue = toggle?'OFF':'ON';
        const textColor = toggle?'red':'green';
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{uri: 'https://renovamidia.com.br/wp-content/uploads/2018/11/a-atual-bandeira-brasil-surgiu-logo-apos-proclamacao-republica-foi-adotada-no-dia-19-novembro-1889-5beafb10035e3.jpg'}}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>MrVictor</Text>
                        <Text style={{color:textColor, textAlign:'center',
                            fontWeight: 'bold',fontSize:16,marginTop:10,}}>
                            STATUS: {textValue}
                        </Text>
                        <Text style={styles.description}>Supervisor da Máquina CURB</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    header:{
        backgroundColor: "cornflowerblue",
        height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});