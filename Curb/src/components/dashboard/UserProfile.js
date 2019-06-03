import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class UserProfile extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{uri: 'https://renovamidia.com.br/wp-content/uploads/2018/11/a-atual-bandeira-brasil-surgiu-logo-apos-proclamacao-republica-foi-adotada-no-dia-19-novembro-1889-5beafb10035e3.jpg'}}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>MrVictor</Text>
                        <Text style={styles.description}>Tinta gasta: </Text>
                        <Text style={styles.description}>Bateria gasta: </Text>
                        <Text style={styles.description}>Kilômetros percorridos:</Text>
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