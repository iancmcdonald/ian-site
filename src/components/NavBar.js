import React, {Component} from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';

import About from '../views/About';
import Home from '../views/Home';
import Projects from '../views/Projects';
import CV from '../views/CV';

export default class NavBar extends Component {
    state = {activeItem: 'home'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});


    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Menu color="teal" borderless stackable>
                    <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'}
                               onClick={this.handleItemClick}>
                        <Icon size="large" name="home"/>
                    </Menu.Item>

                    <Menu.Item as={Link} to="/about" name='about' active={activeItem === 'about'}
                               onClick={this.handleItemClick}/>

                    <Menu.Item as={Link} to="/projects" name='projects' active={activeItem === 'projects'}
                               onClick={this.handleItemClick}/>

                    <Menu.Item as={Link} to="/cv" name='CV' active={activeItem === 'CV'}
                               onClick={this.handleItemClick}/>
                </Menu>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/cv" component={CV}/>
            </div>
        )
    }
}