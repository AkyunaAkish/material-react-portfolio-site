import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import 'bootstrap-loader';
import './sass/style.scss';
import Router from './Router';

const muiTheme = getMuiTheme({
  palette: {
    textColor: 'rgb(0, 167, 245)',
    primary1Color: 'rgb(47, 47, 47)',
    primary2Color: 'rgb(0, 167, 245)',
    accent1Color: 'rgb(0, 167, 245)',
    pickerHeaderColor: 'rgb(0, 167, 245)',
  },
  appBar: {
    height: 72,
    textColor: 'rgb(0, 167, 245)'
  },
});


ReactDOM.render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Router/>
  </MuiThemeProvider>, document.querySelector('#app'));
