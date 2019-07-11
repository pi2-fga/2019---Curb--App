import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Dashboard from '../dashboard/DashboardHomepage';
import LoginScreen from '../login/LoginScreen';

export default class Main extends Component {

	render() {
	
		return (
	
			<Router>
				<Scene key="root">
					<Scene key="loginScreen"
						component={LoginScreen}
						animation='fade'
						hideNavBar={true}
						initial={true}
					/>
					<Scene key="dashboard"
						component={Dashboard}
						animation='fade'
						hideNavBar={true}
					/>
				</Scene>
			</Router>
	  	);
	}
}