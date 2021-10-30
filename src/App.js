import React from 'react';
import './App.css';
import Login from "./component/Login";
import {Route, Router} from "react-router";
import Nav from "./component/Nav";
import history from './route/History'
import {Task} from "./component/task/Task";
import {Home} from "./component/Home";

const App = () => (
    <div className="App">
        <Nav/>
        <Router history={history}>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/task" component={Task} />
        </Router>
    </div>
);

export default App;
