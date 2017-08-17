import React, { Component } from 'react';
import './texts.css'

export default class HomeText extends Component {
    render() {
        return(
            <div>
                <h1 className="text-header">Hey There, Sport!</h1>
                <p className="text-paragraph">
                    I am a software engineer and undergrad at UC Berkeley.
                </p>
            </div>
        )
    }
}