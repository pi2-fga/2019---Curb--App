import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import Dashboard from '../dashboard/Dashboard';
import LoginScreen from '../login/LoginScreen';
import NewCurb from '../curb/NewCurbHomePage';
import ScanScreen from '../curb/ScanScreen';

export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={Dashboard}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
			<Scene key="scanScreen"
	          component={ScanScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
			<Scene key="dashboard"
	          component={Dashboard}
	          animation='fade'
	          hideNavBar={true}
	        />
	        <Scene key="new_curb"
	          component={NewCurb}
	          animation='fade'
	          hideNavBar={true}
	        />
	      </Scene>
	    </Router>
	  );
	}
}