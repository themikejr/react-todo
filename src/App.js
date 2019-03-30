import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Venkman's Todo List
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper>
          <Typography variant="h5" component="h3">
            Everyone wants to get things done.
          </Typography>
          <Typography component="p">
            The first step to getting things done is to wrote down everything you think might need doing.  
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default App;
