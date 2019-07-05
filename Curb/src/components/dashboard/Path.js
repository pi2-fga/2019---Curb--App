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

const GOOGLE_MAPS_APIKEY = 'AIzaSyA3ujp1p1dsVh0E7RppUTJe1UcUkR2XJcg';
const { width } = Dimensions.get('window');

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = -15.988310;
const LONGITUDE = -48.044807;

export default class MapScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monitoring: [],
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
       latitude: LATITUDE,
       longitude: LONGITUDE
      }),
      inicial: {},
      final: {}
    };
  }

  componentDidMount() {
    const { coordinate } = this.state;

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };
        console.log({ newCoordinate });

 
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
     
        coordinate.timing(newCoordinate).start();

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );

    this.fetchDataFromApi();
  
  };

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  };

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

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

            /*this.state = {
              inicial: {latitude: this.state.monitoring[index].latitudeInicial, 
                        longitude: this.state.monitoring[index].logitudeInicial},
              final: {latitude: this.state.monitoring[index].latitudeFinal, 
                      longitude: this.state.monitoring[index].logitudeFinal}
            }*/

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
    
              region={
                this.getMapRegion()
              }
              showUserLocation
              followUserLocation
              loadingEnabled={true}
              toolbarEnabled={true}
              zoomControlEnabled={true}
              
            >
            
            <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
    
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