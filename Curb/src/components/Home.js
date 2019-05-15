import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../../assets/img/logo.png')}
        />
        <Button style={styles.button}
            title = 'Adicionar Curb'
            color = '#F1C40F'
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95A5A6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: screenWidth * 0.9,
        height: 30
    },
    logo: {
        width: screenWidth * 0.9, 
        height: screenWidth * 0.6,
        marginTop: 40,
    }
})