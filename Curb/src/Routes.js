import React from 'react';
import Home from './components/Home';
import { Router, Scene } from 'react-native-router-flux';

const Rotas = () => (
    <Router>
        <Scene key='Home' component={Home} initil title='Home' />
    </Router>
);

export default Rotas;