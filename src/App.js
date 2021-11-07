import React from 'react';
import './App.css';
import Login from "./component/Login";
import {Route, Router} from "react-router";
import Nav from "./component/Nav";
import history from './route/History'
import Home from "./component/Home";
import Task from "./component/task/Task";
import {DayStatistics} from "./component/statistics/DayStatistics";
import {Activity} from "./component/activity/Activity";
import {Achievement} from "./component/game_text/Achievement";
import {HeroSelect} from "./component/game_text/HeroSelect";
import {HeroStrengthen} from "./component/game_text/HeroStengthen";
import {BattleLog} from "./component/game_text/BattleLog";

const App = () => (
    <div className="App">
        <Router history={history}>
            <Nav/>
            <Route exact path="/web" component={Login} />
            <Route exact path="/web/home" component={Home} />
            <Route exact path="/web/task" component={Task} />
            <Route exact path="/web/dayStatistics" component={DayStatistics} />
            <Route exact path="/web/activity" component={Activity} />
            <Route exact path="/web/game/text/achievement" component={Achievement} />
            <Route exact path="/web/game/text/heroRound" component={HeroSelect} />
            <Route exact path="/web/game/text/heroStrengthen" component={HeroStrengthen} />
            <Route exact path="/web/game/text/battleLog" component={BattleLog} />
        </Router>
    </div>
);

export default App;
