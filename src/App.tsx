import React from 'react';
import './App.less';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import MenuNav from './pages/nav/index';
import IndexPage from './pages/index/index';

function App(prop: any) {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={MenuNav}></Route>
                    {/*<Route path='/serverError' component={ServerError}></Route>
                    <Route path='*' component={NotFound}></Route>
                    <Redirect to='/home'></Redirect>*/}
                    <Route exact path='/index' component={IndexPage}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
