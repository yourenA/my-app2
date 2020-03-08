import React, {PureComponent, Fragment} from 'react';
import logo from './logo.svg';
import stats from './067-stats.png';
import lottery from './130-lottery.png';
import './App.css';
import Home from './Home.js';
import Pre from './Pre.js';

import { Route, Switch, Redirect } from 'react-router-dom';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        console.log('componentDidMount in app')
    }
    render() {
        return (
        
                <div>
        
                    <Switch>
                        <Route exact   path="/home"  component={Home} />
                       
                        <Route path="/pre"  component={Pre} />
                        <Redirect path="/" to={{ pathname: '/Home' }} />
                    </Switch>
                </div>
           

        );
    }
}

export default App;
