import React, {Component} from 'react';

import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import MaterialToolbar from './components/MaterialToolbar';

injectTapEventPlugin();
class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <MuiThemeProvider>
                <MaterialToolbar/>
            </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
