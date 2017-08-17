import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'

import MaterialDrawer from './MaterialDrawer'
import MaterialIconMenu from './MaterialIconMenu'
import FlatButton from 'material-ui/FlatButton';

import About from '../views/About';
import Home from '../views/Home';
import Projects from '../views/Projects';
import CV from '../views/CV';

import './MaterialAppBar.css'

export default class MaterialAppBar extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title={<div className="app-bar-title"><Link to="/"><FlatButton style={{color: 'white'}}>Ian
                        McDonald</FlatButton></Link></div>}
                    iconElementLeft={<MaterialDrawer/>}
                    iconElementRight={<MaterialIconMenu/>}
                    zDepth={0}
                />
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/cv" component={CV}/>
            </div>
        )
    }
}