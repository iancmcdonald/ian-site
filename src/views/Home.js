import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import HomeText from '../texts/HomeText';
import './views.css'

const paperStyle = {
    height: 'auto',
    width: 'auto',
    margin: 40,
    textAlign: 'center',
    display: 'inline-block',
};

export default class Home extends Component {
    render() {
        return (
            <div className="paper-centered-div">
                <Paper style={paperStyle} zDepth={2}>
                    <HomeText/>
                </Paper>
            </div>
        )
    }
}