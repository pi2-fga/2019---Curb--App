import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Battery from './Battery';
import Tinta from './Tinta';
import Path from './Path';
import UserProfile from './UserProfile';
import Power from './Power';

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
    
    Power: {
        screen: Power,
        navigationOptions: {
            tabBarLabel: 'Power',
            tabBarIcon: ({tintColor}) => (
                <Icon name='power-off' color={tintColor} size={24}></Icon>
            ),
        }
    },
    Battery: {
        screen: Battery,
        navigationOptions: {
            tabBarLabel:'Bateria',
            tabBarIcon: ({tintColor}) => (
                <Icon name='battery-4' color={tintColor} size={24}></Icon>
            )
        }
    },
    Tinta: {
        screen: Tinta,
        navigationOptions: {
            tabBarLabel:'Tinta',
            tabBarIcon: ({tintColor}) => (
                <Icon name='tint' color={tintColor} size={24}></Icon>
            )
        }
    },
    Path: {
        screen: Path,
        navigationOptions: {
            tabBarLabel:'Trajeto',
            tabBarIcon: ({tintColor}) => (
                <Icon name='map-marker' color={tintColor} size={24}></Icon>
            ),
        }
    },
    UserProfile: {
        screen: UserProfile,
        navigationOptions: {
            tabBarLabel:'Usuário',
            tabBarIcon: ({tintColor}) => (
                <Icon name='user' color={tintColor} size={24}></Icon>
            )
        }
    }, 
},{
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: 'cornflowerblue',
        inactiveTintColor: 'grey'
    }
});

const AppContainer = createAppContainer(DashBoardTabNavigator);