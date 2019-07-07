import React from 'react';
import { Alert, StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;

export default class Bottons extends React.Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

  render() {

        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="Clica Aqui"
                />
                </View>
                <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="CLICA AQUI"
                    color="#841584"
                />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
});