import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions,
  Animated, 
  TouchableOpacity 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import spinner from '../../../assets/img/loading.gif';

var screenWidth = Dimensions.get('window').width;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
  }

  render() {
    
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Aqui vai ficar o dashboard
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