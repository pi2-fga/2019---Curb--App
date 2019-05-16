import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, StatusBar, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

var screenWidth = Dimensions.get('window').width;

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <StatusBar ></StatusBar>
            <ImageBackground source={require('../../assets/img/FotoJet.png')} style={styles.imageBackground}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/img/logo.png')}
                />
                <Button style={styles.button}
                    title = 'Adicionar Curb'
                    color = '#e2c044'
                    onPress={() => { Actions.ScanScreen(); }}
                />
            </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: screenWidth * 0.9,
        height: 60
    },
    logo: {
        width: screenWidth * 0.9, 
        height: screenWidth * 0.6,
        marginTop: 40,
        marginLeft: 18,
        marginBottom: 120
    },
    imageBackground: {
        width: '100%', 
        height: '100%'
    }
})