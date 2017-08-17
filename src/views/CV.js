import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const paperStyle = {
        height: 'auto',
        width: 'auto',
        margin: 40,
        textAlign: 'center',
        display: 'inline-block',
    };

export default class CV extends Component {
    render() {
        return (
            <Paper style={paperStyle} zDepth={2}>
                <div className="cv-image">
                    <img src="https://i.imgur.com/r9MakPc.png" height="60%" width="60%"/>
                </div>
            </Paper>
        )
    }
}