import React from 'react';
import { Router, Scene, root } from 'react-native-router-flux';

import Home from './components/curb/Curb';
import Page_Data from './components/dashboard/DashBoard';

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 25}}>
        <Scene key='root'>
            <Scene key='home' component={Home} initial title='Home'></Scene>
            <Scene key='page_data' component={Page_Data} title='Page_Data'></Scene>
        </Scene>
    </Router>
);

export default Rotas;