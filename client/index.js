import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'bootstrap-loader';
import './sass/rootStyle.scss';
import 'hamburgers/dist/hamburgers.min.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: 'rgb(0, 167, 245)',
    primary1Color: 'rgb(47, 47, 47)',
    primary2Color: 'rgb(0, 167, 245)',
    accent1Color: 'rgb(0, 167, 245)',
    pickerHeaderColor: 'rgb(0, 167, 245)',
  },
  appBar: {
    height: 72
  },
});

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      <Router/>
    </MuiThemeProvider>
  </Provider>, document.querySelector('#app'));
