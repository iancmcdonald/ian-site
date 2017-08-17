import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import './components.css'

export default class ExternalSiteButtons extends Component {
    render() {
        return(
            <div className="external-site-buttons">
                <IconButton iconClassName="fa fa-github" href="https://github.com/iancmcdonald" />
                <IconButton iconClassName="fa fa-bitbucket" href="https://bitbucket.org/ian-c-mcdonald/" />
                <IconButton iconClassName="fa fa-linkedin-square" href="https://www.linkedin.com/in/iancmcdonald" />
            </div>
        )
    }
}