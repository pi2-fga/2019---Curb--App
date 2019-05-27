import React from 'react';
import { Text
} from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

import Battery from '../dashboard/Battery';
import Path from './Path';
import UserProfile from './UserProfile';
import Tinta from './Tinta';
import IconFont from 'react-native-vector-icons/FontAwesome';

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

const DashBoardTabNavigator = createBottomTabNavigator({
    Bateria: {
        screen: Battery,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) => (
                <Text style={{textAlign: 'center'}}>
                    Bateria
                </Text>
            ),
            tabBarIcon: ({ center, tintColor }) => (
                <IconFont name="battery-4" size={30} color="black"></IconFont>
            ),
        }
    },
    Tinta: {
        screen: Tinta,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) => (
                <Text style={{textAlign: 'center'}}>
                    Tinta
                </Text>
            ),
            tabBarIcon: ({ center, tintColor }) =>
            <IconFont name="tint" size={30} color="black"></IconFont>
        }
    },
    Trajeto: {
        screen: Path,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) => (
                <Text style={{textAlign: 'center'}}>
                    Trajeto
                </Text>
            ),
            tabBarIcon: ({ center, tintColor }) =>
            <IconFont name="map-marker" size={30} color="black"></IconFont>
        }
    },
    Usuário: {
        screen: UserProfile,
        navigationOptions: {
            tabBarLabel: ({ tintColor }) => (
                <Text style={{textAlign: 'center'}}>
                    Usuário
                </Text>
            ),
            tabBarIcon: ({ center, tintColor }) =>
            <IconFont name="user" size={30} color="black"></IconFont>
        }
    }
},{
    navigationOptions:({navigation})=>{
        const {routeName} = navigation.state.routes[navigation.state.index]
        return {
            headerTitle: routeName
        }
    }
});

const DashBoardStackNavigator = createStackNavigator({
    DashBoardTabNavigator: DashBoardTabNavigator,
});

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashBoardStackNavigator
    }
});

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard:{
        screen: AppDrawerNavigator
    }
});

const AppContainer = createAppContainer(AppSwitchNavigator);