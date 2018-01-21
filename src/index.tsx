import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Header } from './components/header';
import { Main } from './components/content';

const App = ():JSX.Element => (
  <MuiThemeProvider>
    <div>
      <Header />
      <Main />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);