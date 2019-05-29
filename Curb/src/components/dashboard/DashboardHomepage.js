import React from 'react';
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import IconFont from 'react-native-vector-icons/FontAwesome';

import Battery from './Battery';
import Tinta from './Tinta';
import Path from './Path';
import UserProfile from './UserProfile';

export default class DashboardHomePage extends React.Component {
    
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
    Battery: {
        screen: Battery,
        navigationOptions: {
            tabBarLabel:'BATERIA',
            tabBarIcon: ({tintColor}) => (
                <IconFont name='battery-4' color={tintColor} size={24}></IconFont>
            )
        }
    },
    Tinta: {
        screen: Tinta,
        navigationOptions: {
            tabBarLabel:'TINTA',
            tabBarIcon: ({tintColor}) => (
                <IconFont name='tint' color={tintColor} size={24}></IconFont>
            )
        }
    },
    Path: {
        screen: Path,
        navigationOptions: {
            tabBarLabel:'TRAJETO',
            tabBarIcon: ({tintColor}) => (
                <IconFont name='map-marker' color={tintColor} size={24}></IconFont>
            )
        }
    },
    UserProfile: {
        screen: UserProfile,
        navigationOptions: {
            tabBarLabel:'USUÁRIO',
            tabBarIcon: ({tintColor}) => (
                <IconFont name='user' color={tintColor} size={24}></IconFont>
            )
        }
    }, 
},{
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey'
    }
});

const AppContainer = createAppContainer(DashBoardTabNavigator);