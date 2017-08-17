import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import MaterialDrawer from './MaterialDrawer'
import ExternalSiteButtons from './ExternalSiteButtons'

import Home from '../views/Home';
import Projects from '../views/Projects';
import CV from '../views/CV';


export default class MaterialToolbar extends Component {
    render() {
        return(
            <div>
                <Toolbar style={{background: 'white', zDepth: 2}} >
                    <ToolbarGroup firstChild={true}>
                        <MaterialDrawer/>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Ian McDonald" />
                        <ToolbarSeparator/>
                        <ExternalSiteButtons/>
                    </ToolbarGroup>
                </Toolbar>
                <Route path="/" exact component={Home}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/cv" component={CV}/>
            </div>

        )
    }
}