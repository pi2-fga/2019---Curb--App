import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Dimensions,
  Button
} from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

export default class HomePage extends React.Component {
	constructor() {
        super();
    }
    render() {
        return (
            <AppContainer></AppContainer>   
        );
    }
}

class WelcomeScreen extends React.Component {

    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Button title='Login' onPress={()=> this.props.navigation.navigate('Dashboard')}>
                </Button>
            </View>
        );
    }
}

class DashBoardScreen extends React.Component {
    render() {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>DashBoardScreen</Text>
            </View>
        );
    }
}

class Bateria extends React.Component {
    render() {
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>NivelBateria</Text>
            </View>
        );
    }
}

class Tinta extends React.Component {
    render() {
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Tinta</Text>
            </View>
        );
    }
}

class Usuario extends React.Component {
    render() {
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Usuario</Text>
            </View>
        );
    }
}

const DashBoardTabNavigator = createBottomTabNavigator({
    Bateria,
    Tinta,
    Usuario
},{
    navigationOptions:({navigation})=>{
        const {routeName} = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName
        }
    }
});

const DashBoardStackNavigator = createStackNavigator({
    DashBoardTabNavigator: DashBoardTabNavigator
},{
    defaultNavigationOptions:({navigation})=>{
        return{
            headerLeft:(
                <Icon style={{paddingLeft: 10}}
                onPress={()=>navigation.openDrawer()} 
                name='md-menu' size={30}/>
            )
        }
    }
});

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashBoardStackNavigator
    }
});

const AppSwitchNavigator = createSwitchNavigator({
    Welcome:{
        screen: WelcomeScreen
    },
    Dashboard:{
        screen: AppDrawerNavigator
    }
});

const AppContainer = createAppContainer(AppSwitchNavigator);