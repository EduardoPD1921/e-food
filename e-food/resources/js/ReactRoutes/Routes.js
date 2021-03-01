import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

const Routes = props => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/register" exact component={RegisterPage} />
                <Route path="/login" exact component={LoginPage} />
            </Switch>
        </Router>
    )
}

export default Routes