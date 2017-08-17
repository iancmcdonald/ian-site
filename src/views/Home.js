import React, {Component} from 'react';

import HomeText from '../texts/HomeText';
import './views.css'

export default class Home extends Component {
    render() {
        return (
            <div className="main-view">
                <HomeText/>
            </div>
        )
    }
}