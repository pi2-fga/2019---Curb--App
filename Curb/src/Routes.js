import React from 'react';
import { Router, Scene, root } from 'react-native-router-flux';
import ScanScreen from './components/ScanScreen';
import Dashboard from './components/Dashboard';

import Home from './components/Home';
import Page_Data from './components/Page_Data';
import {Actions} from 'react-native-router-flux';

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 24}}>
        <Scene key='root'>
        <Scene key='Home' component={Home} initial hideNavBar={true} title='Home'/>
        <Scene key='ScanScreen' component={ScanScreen} hideNavBar={true} title='Scan'/>
        <Scene key='Dashboard' component={Dashboard} hideNavBar={true} title='Dashboard'/>

        </Scene>
    </Router>
);

export default Rotas;