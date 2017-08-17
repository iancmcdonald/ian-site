import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ExitToAppIcon from 'material-ui-icons/ExitToApp'

export default class MaterialIconMenu extends Component {
    render() {
        return(
            <div>
                <IconMenu
                    iconButtonElement={<IconButton iconStyle={{color: 'white'}} ><ExitToAppIcon/></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                >
                    <div>
                        <IconButton iconClassName="fa fa-github" href="https://github.com/iancmcdonald" />
                    </div>
                    <div>
                        <IconButton iconClassName="fa fa-bitbucket" href="https://bitbucket.org/ian-c-mcdonald/" />
                    </div>
                    <div>
                        <IconButton iconClassName="fa fa-linkedin-square" href="https://www.linkedin.com/in/iancmcdonald" />
                    </div>
                </IconMenu>
            </div>
        )
    }
}