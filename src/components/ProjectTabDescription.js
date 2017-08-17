import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';

import '../texts/texts.css';

export default class ProjectTabDescription extends Component {
    render() {
        return (
            <div>
                <div className="text-header">
                    <h1>
                        {this.props.projectName}
                        <IconButton iconClassName="fa fa-github" href={this.props.githubLink}/>
                    </h1>
                </div>
                <div className="text-paragraph">
                    <p>
                        {this.props.paragraphFirstText}
                    </p>
                    <p>
                        {this.props.paragraphSecondText}
                    </p>
                </div>
            </div>
        )
    }
}