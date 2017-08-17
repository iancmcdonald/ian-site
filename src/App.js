import React, {Component} from 'react';

import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './App.css';
import MaterialAppBar from './components/MaterialAppBar';
import MaterialToolbar from './components/MaterialToolbar';

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto'
});

injectTapEventPlugin();
class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <MuiThemeProvider muiTheme={muiTheme}>
                <MaterialToolbar/>
            </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
