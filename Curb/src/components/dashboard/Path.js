import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import axios from 'react-native-axios'
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions'
import { PermissionsAndroid } from 'react-native';
import haversine from "haversine";
import Geocoder from 'react-native-geocoding';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDnG35z7wiaggXmYy_s6P3ouH-nfw0Iy2g';
const { width } = Dimensions.get('window');


export default class MapScreen extends Component {

  constructor(props) {
    super(props);
    this.fetchDataFromApi = this.fetchDataFromApi.bind(this);
    this.state = {
      monitoring: [],
      origin: { latitude: -15.990410711590629, longitude: -48.04717183113099 },
      destination: { latitude: -15.990369456730598, longitude: -48.04712891578675},
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      
      inicial: {},
      final: {}
    };
  }

  componentDidMount() {

    this.fetchDataFromApi();

  };

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  };

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  fetchDataFromApi = () => {
    const url = "http://gustavo2795.pythonanywhere.com/monitoramentos/";

    axios.get(url)
      .then((response) => {
        //console.log(response.data); // ex.: { user: 'Your User'}
        //console.log(response.status); // ex.: 200
        this.setState({
          monitoring: response.data[response.data.length - 1],
          destination: {
            latitude: Number.parseFloat(response.data[response.data.length - 1].latitudeFinal),
            longitude: Number.parseFloat(response.data[response.data.length - 1].logitudeFinal)
          }
        });

      });
      console.log(this.state.destination);
    setTimeout(() => {
      this.fetchDataFromApi()
    }, 30000)
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

  };

  getLocation() {
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

    }, { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 })

  };

  /*async componentDidMount() {
    let isGranted = await this.requestLocationPermission();

    if (isGranted) {
        this.getLocation();
    }

    this.getLocation();

  }*/

  handleButton = () => {

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

    return (

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