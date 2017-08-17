import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import { Link } from 'react-router-dom';
import '../App.css'

export default class MaterialDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <IconButton onClick={this.handleToggle} className="App-logo" >
                    <NavigationMenu color="#FF4081" />
                </IconButton>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onClick={this.handleClose} containerElement={<Link to="/" />}>Home</MenuItem>
                    <MenuItem onClick={this.handleClose} containerElement={<Link to="/projects" />} >Projects</MenuItem>
                    <MenuItem onClick={this.handleClose} containerElement={<Link to="/cv" />} >CV</MenuItem>
                </Drawer>
            </div>
        );
    }
}