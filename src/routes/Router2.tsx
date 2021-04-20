import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import MenuNav from '../pages/nav/index';
import IndexPage from '../pages/index/index';
import Login from '../pages/login/login'
import PlatComponents from './PlatComponents';
import ProjectComponents from './ProjectComponents';
import ConfigComponents from './ConfigComponents';
import DesignComponents from './DesignComponents';
import DataComponents from './DataComponents';

function RootRouter(props: any, ref: any) {

    const route = [
        {'path': '/menu', 'component': MenuNav},
        {'path': '/index', 'component': IndexPage},
    ]
    const getComponents = () => {
        let components = [];
        components.push(...route, ...PlatComponents, ...ProjectComponents
            , ...ConfigComponents, ...DesignComponents, ...DataComponents);
        return components;
    }
    const isLogin = sessionStorage.getItem('token') || '';
    const routes = getComponents().map((item, index) => {
        return (
            <Route
                exact
                key={index}
                path={item.path}
                render={props =>
                    isLogin ?
                        <item.component key={props.match.params.type}{...props}/> :
                        <Redirect to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }}/>
                }
            />
        );
    });

    return (
        <Switch>
            {routes}
        </Switch>
    )
}

export default RootRouter
