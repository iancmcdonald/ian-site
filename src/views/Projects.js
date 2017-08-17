import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import ProjectTabDescription from '../components/ProjectTabDescription';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                    tabItemContainerStyle={{background: 'white'}}
                >
                    <Tab label="BiaSearch" value={0} style={{color: 'grey'}}>
                    </Tab>
                    <Tab label="CalFinder" value={1} style={{color: 'grey'}}/>
                    <Tab label="AMSAF" value={2} style={{color: 'grey'}}/>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <ProjectTabDescription
                        projectName="BiaSearch"
                        githubLink="https://github.com/iancmcdonald/BiaSearchApi"
                        paragraphFirstText="Explore news articles outside of your personal biases."
                    />
                    <ProjectTabDescription
                        projectName="CalFinder"
                        githubLink="https://github.com/ddreyer/mealfinder"
                        paragraphFirstText="Get fit by finding your optimal meals from nearby fast food restaurants."
                    />
                    <ProjectTabDescription
                        projectName="Automated MRI Segmentation and Registration Framework"
                        githubLink="https://github.com/iancmcdonald/AMSAF"
                        paragraphFirstText="Optimize image segmentation to speed up your image processing research by months."
                    />
                </SwipeableViews>
            </div>
        );
    }
}