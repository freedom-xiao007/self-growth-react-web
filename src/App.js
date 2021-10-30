import React from 'react';
import './App.css';
import Login from "./component/Login";
import {Route, Router} from "react-router";
import Nav from "./component/Nav";
import history from './route/History'
import Home from "./component/Home";
import Task from "./component/task/Task";

const App = () => (
    <div className="App">
        <Router history={history}>
            <Nav/>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/task" component={Task} />
        </Router>
    </div>
);

export default App;
