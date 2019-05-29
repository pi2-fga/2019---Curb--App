import React from 'react';
import { StyleSheet, 
  Text, 
  View
} from 'react-native';

export default class Tinta extends React.Component {
	constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.screenHalfFirst}>
                    <Text style={styles.firstText}>
                        Nivel Tinta: 42%
                    </Text>
                </View>
                <View style={styles.screenHalfSecond}>
                    <Text>VAMO CLÃ</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    screenHalfFirst: {
        flex: 2,
        height: 100,
        backgroundColor: 'cornflowerblue',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    firstText: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white',
    },
    screenHalfSecond: {
        flex: 3,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});