import React, {Component} from 'react';
import Paper from 'material-ui/Paper'

const iStyle = {
    // background: 'pink',
    height: 200,
    width: 100,
    margin: 50,
    textAlign: 'center',
    display: 'inline-block',
    transform: 'rotate(-10deg)'
};

const dotStyle = {
    // background: 'cyan',
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export default class MaterialPaper extends Component {

    render() {
        return (
            <div>
                <div>
                    <Paper style={iStyle} zDepth={5}>Whatup dawg</Paper>
                </div>
                <div>
                    <Paper style={dotStyle} zDepth={5} circle={true}/>
                </div>
            </div>
        )
    }
}