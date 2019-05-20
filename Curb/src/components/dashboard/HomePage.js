import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  Dimensions,
  Animated, 
  TouchableOpacity,
} from 'react-native';
import { Ionicons} from '@expo/vector-icons';

var screenWidth = Dimensions.get('window').width;

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class HomePage extends React.Component {
	constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
				<Ionicons 
				name="ios-add-circle" size={42} color="blue"></Ionicons>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
		backgroundColor: '#FFFFFF'
    }
});