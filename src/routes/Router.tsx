import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import MenuNav from '../pages/nav/index';
import Header from '../pages/header/header';
import IndexPage from '../pages/index/index';
import PlatComponents from './PlatComponents';
import ProjectComponents from './ProjectComponents';
import ConfigComponents from './ConfigComponents';
import DesignComponents from './DesignComponents';
import DataComponents from './DataComponents';

function RootRouter(props: any, ref: any) {

    const route = [
        {'path': '/index', 'component': IndexPage},
        {'path': '/', 'component': IndexPage},
    ]
    const getComponents = () => {
        let components = [];
        components.push(...route, ...PlatComponents, ...ProjectComponents
            , ...ConfigComponents, ...DesignComponents, ...DataComponents);
        return components;
    }

    const routes = getComponents().map((item, index) => {
        return (
            <Route
                exact
                key={index}
                path={item.path}
                render={props =>
                    <item.component key={props.match.params.type}{...props}/>
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
