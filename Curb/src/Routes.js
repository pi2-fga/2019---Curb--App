import React from 'react';
import Home from './components/Home';
import { Router, Scene, root } from 'react-native-router-flux';
import ScanScreen from './components/ScanScreen';
import Dashboard from './components/Dashboard';

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