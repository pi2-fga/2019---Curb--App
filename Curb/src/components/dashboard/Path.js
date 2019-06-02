import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';

import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'
import { PermissionsAndroid } from 'react-native';

import Geocoder from 'react-native-geocoding';

const GOOGLE_MAPS_APIKEY = 'AIzaSyA3ujp1p1dsVh0E7RppUTJe1UcUkR2XJcg';

const backgroundColor = '#007256';

const { height, width } = Dimensions.get('window');

export default class Path extends Component {

    state = {

        origin: { latitude: -15.98930198, longitude: -48.0446291 },
        destination: { latitude: -15.99231874, longitude: -48.04943562 },
        originText: '',
        destinationText: '',
    
     };

    render() {

        return(

            <View style={styles.container}>

            <MapView
    
              ref={map => this.mapView = map}
              style={styles.map}
    
              region={{
                latitude: (this.state.origin.latitude + this.state.destination.latitude) / 2,
                longitude: (this.state.origin.longitude + this.state.destination.longitude) / 2,
                latitudeDelta: Math.abs(this.state.origin.latitude - this.state.destination.latitude) + Math.abs(this.state.origin.latitude - this.state.destination.latitude) * .1,
                longitudeDelta: Math.abs(this.state.origin.longitude - this.state.destination.longitude) + Math.abs(this.state.origin.longitude - this.state.destination.longitude) * .1,
              }}
    
              loadingEnabled={true}
              toolbarEnabled={true}
              zoomControlEnabled={true}
              
            >
    
            <MapView.Marker
              coordinate={this.state.destination}
            >
              <MapView.Callout onPress={this.handleGetGoogleMapDirections}>
                <Text>Press to Get Direction</Text>
              </MapView.Callout>
            </MapView.Marker>

            <MapView.Marker
              coordinate={this.state.origin}
            >
            <MapView.Callout>
                <Text>This is where you are</Text>
            </MapView.Callout>
            </MapView.Marker>

            <MapViewDirections
              origin={this.state.origin}
              destination={this.state.destination}
              apikey={GOOGLE_MAPS_APIKEY}
            />
    
            </MapView>

            

          </View>

        );

    }

}

const styles = StyleSheet.create({

    container: {
  
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    
      },
    
      map: {
    
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    
      },

      button: {

        width: width - 100,
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        marginBottom: 15,
        marginHorizontal: 20,

      },

      buttonText: {

        color: '#000',
        fontWeight: 'bold',

      },

      inputContainer: {

        width: '100%',
        maxHeight: 200,
  
      },

      input: {

        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 20,
  
      },

});