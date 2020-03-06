import React from 'react';
import logo from './logo.svg';
import stats from './067-stats.png';
import lottery from './130-lottery.png';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/ArrowBack';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
      <div>
 
 <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          
        </Toolbar>
      </AppBar>
      

     
        <Switch>
          <Route exact path="/">
            <div className="App">
      <header className="App-header">
        <div className='item'>
<img src={lottery} className="App-logo" alt="logo" />
        <p>
          老化抽屉预测试
        </p>
        
        </div>
        <div className='item'>
<img src={stats} className="App-logo" alt="logo" />
        <p>
          老化测试
        </p>
       
        </div>
      </header>
    </div>
          </Route>
      <Route  path="/about">
            <div className="App">
     
        <Button variant="contained" color="primary">
          你好，世界
        </Button>
      
    </div>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
