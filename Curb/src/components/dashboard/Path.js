import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import axios from 'react-native-axios'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'
import { PermissionsAndroid } from 'react-native';

import Geocoder from 'react-native-geocoding';

const GOOGLE_MAPS_APIKEY = 'AIzaSyA3ujp1p1dsVh0E7RppUTJe1UcUkR2XJcg';
const { width } = Dimensions.get('window');

export default class MapScreen extends Component {

    componentDidMount() {
      this.fetchDataFromApi();
      this.handleButton();
    }

    state = {
        monitoring: [],
        origin: { latitude: -15.98930198, longitude: -48.0446291 },
        destination: { latitude: -15.99231874, longitude: -48.04943562 },
        originText: '',
        destinationText: '',
        inicial: {},
        final: {}
      };
    
      findLastMonitoring

      fetchDataFromApi = ()  => {
        const url = "http://gustavo2795.pythonanywhere.com/monitoramentos/";
    
        axios.get(url)
          .then(function(response){
            //console.log(response.data); // ex.: { user: 'Your User'}
            //console.log(response.status); // ex.: 200
            this.state = {
              monitoring: response.data,
            }
            
            const index = this.state.monitoring.length-1

            this.state = {
              inicial: {latitude: this.state.monitoring[index].latitudeInicial, 
                        longitude: this.state.monitoring[index].logitudeInicial},
              final: {latitude: this.state.monitoring[index].latitudeFinal, 
                      longitude: this.state.monitoring[index].logitudeFinal}
            }

          }); 
        
      };

      async requestLocationPermission() {
        try {
    
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'App Location Permission',
                    'message': 'O aplicativo CURB necessita que você ative ' +
                        'o GPS.'
                }
            );
    
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
                return true;
    
            } else {
                console.log("location permission denied");
                return false;
            }
    
        } catch (err) {
            console.warn(err)
        }
    
      }
    
      getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let newOrigin = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
    
            console.log('new origin');
            console.log(newOrigin);
    
            this.setState({
                origin: newOrigin
            });

        }, (err) => {
            console.log('error');
            console.log(err)
    
        }, {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000})
    
      };

      /*async componentDidMount() {
        let isGranted = await this.requestLocationPermission();

        if (isGranted) {
            this.getLocation();
        }

        this.getLocation();

      }*/

      handleButton = () => {

        if(this.state.originText != '') {

            Geocoder.init(GOOGLE_MAPS_APIKEY); 

            Geocoder.from(this.state.originText)
                .then(json => {
                    var location = json.results[0].geometry.location;
                    console.log(location);
                    this.setState({ origin: { latitude: location.lat, longitude: location.lng } });

            })
            .catch(error => console.warn(error));

        }

        else {

            alert("Digite a origem ! ")

        }

        if(this.state.destinationText != '') {

            Geocoder.init(GOOGLE_MAPS_APIKEY); 

            Geocoder.from(this.state.destinationText)
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location);
                this.setState({ destination: { latitude: location.lat, longitude: location.lng } });

            })
            .catch(error => console.warn(error));
        }

        else {

            alert("Digite o destino ! ")

        }
      }
    
      handleGetGoogleMapDirections = () => {
    
        const data = {
    
            source: this.state.origin,
            destination: this.state.destination,
            params: [
                {
                  key: "travelmode",
                  value: "driving"
                }
            ]
            
        };
    
        getDirections(data)
    
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
                <Text>O CURB está aqui</Text>
              </MapView.Callout>
            </MapView.Marker>

            <MapView.Marker
              coordinate={this.state.origin}
            >
            <MapView.Callout>
                <Text>Você está aqui</Text>
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