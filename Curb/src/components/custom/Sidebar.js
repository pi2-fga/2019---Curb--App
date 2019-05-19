import React, { Component } from 'react';
import { View, Image, TouchableOpacity,StyleSheet,Text } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

export default class Sidebar extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Cause i blind to all, becausa i know, i will kill me inimies
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#bb0000',
    },
});