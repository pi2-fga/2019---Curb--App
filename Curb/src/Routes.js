import React from 'react';
import Home from './components/Home';
import { Router, Scene, root } from 'react-native-router-flux';

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 25}}>
        <Scene key='root'>
            <Scene key='Home' component={Home} initial title='Home'/>
        </Scene>
    </Router>
);

export default Rotas;