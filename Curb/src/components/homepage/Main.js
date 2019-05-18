import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import HomePage from '../dashboard/HomePage';
import LoginScreen from '../login/LoginScreen';
import NewCurb from '../curb/NewCurbHomePage';

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
					<Scene key="home_page"
	          component={HomePage}
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