import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

var screenWidth = Dimensions.get('window').width;

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <Text>DASHBOARD</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d0cb',
        justifyContent: 'center',
        alignItems: 'center'
    }
})