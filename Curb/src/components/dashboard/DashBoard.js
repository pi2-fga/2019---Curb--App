import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

const Page_Data = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Página de dados
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#bb0000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default Page_Data;