import {HashRouter, Route, Switch} from 'react-router-dom';
import Project from './Project';
import User from './User';
import Role from './Role';
import Permission from './Permission';
import Loading from './Loading';
import Login from './Login';
import React from "react";


export default class ErdRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route key={"project"} exact={true} path="/project" component={Project}></Route>
                    <Route key={"user"} path="/user" component={User}></Route>
                    <Route key={"role"} path="/role" component={Role}></Route>
                    <Route key={"permission"} path="/permission" component={Permission}></Route>
                    <Route key={"loading"} path="/loading" component={Loading}></Route>
                    <Route key={"login"} path="/login" component={Login}></Route>
                    <Route key={"home"} path="/" component={Login}></Route>
                </Switch>
            </HashRouter>
        );
    }
}
