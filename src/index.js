import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Material = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
)
ReactDOM.render(
    <Provider store={store}>
        <Material />
    </Provider>,
    document.getElementById('root'));
unregister();
