import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo'

export default class Path extends Component {
	constructor() {
        super();
    }
    state = {
        mapRegion: { latitude: -15.98930198, longitude: -48.0446291, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
      };

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={{ alignSelf: 'stretch', height: 550 }}
                    region={this.state.mapRegion}
                    provider={MapView.PROVIDER_GOOGLE}
                    onRegionChange={this._handleMapRegionChange}
                />
                <MapView.Marker cordinate= {this.state.mapRegion}/>
            </View>  
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 13,
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });