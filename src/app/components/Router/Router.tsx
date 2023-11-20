import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import {observer} from 'mobx-react-lite'
import routes from "../../lib/routes";
import Navbar from "../../../core/components/UI/Navbar/Navbar";
import Home from "../Home/Home";

export default observer(() => {
    return (
        <HashRouter basename={'/'}>
            <Navbar>
                <Switch>
                    <Route exact path={routes.HOME} component={Home}/>

                    <Redirect from="*" to={routes.HOME}/>
                </Switch>
            </Navbar>
        </HashRouter>
    )
})

