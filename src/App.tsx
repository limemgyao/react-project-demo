import React, {useEffect, useState} from 'react';
import './App.less';
import 'antd/dist/antd.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Loading from './pages/loading/loading'
import {Layout, Menu} from 'antd';

import Login from './pages/login/login'
import RootRouter from './routes/Router'
import MenuNav from "./pages/nav";
/*import Header from "./pages/header/header";*/
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const {Header, Sider, Content} = Layout;

function App(prop: any) {

    // 登陆状态判断
    const [loginFlag, setLoginFlag] = useState<boolean>(false);
    const isLogin = sessionStorage.getItem('token') || '';
    const [collapsed, setCollapsed] = useState<any>(false)

    useEffect(() => {
        if (isLogin) {
            setLoginFlag(true)
        } else {
            setLoginFlag(true)
        }
    }, [])

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <div className="App">
            <Router>
                <Loading/>
                {
                    loginFlag ?
                        <Layout>
                            <Sider trigger={null} collapsible collapsed={collapsed}>
                                <div className="logo"/>
                                <MenuNav/>
                            </Sider>
                            <Layout className="site-layout">
                                <Header className="site-layout-background" style={{padding: 0}}>
                                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                        className: 'trigger',
                                        onClick: toggle,
                                    })}
                                </Header>
                                <Content
                                    className="site-layout-background"
                                    style={{
                                        margin: '24px 16px',
                                        padding: 24,
                                        minHeight: 280,
                                    }}
                                >
                                    <RootRouter/>
                                </Content>
                            </Layout>
                        </Layout>
                        :
                        <Route exact path='*' component={Login}></Route>
                }
                {
                    /*loginFlag ?
                        <div className={'lx_body'}>
                            <MenuNav/>
                            <div className={'lx_con'}>
                                <Header/>
                                <div className={'lx_con_con'}>
                                    <RootRouter/>
                                </div>
                            </div>
                        </div>*/
                    /*<Switch>
                        {/!*<Route exact path='/' component={MenuNav}></Route>
                        <Route path='/serverError' component={ServerError}></Route>
                        <Route path='*' component={NotFound}></Route>
                        <Redirect to='/home'></Redirect>
                        <Route exact path='/index' component={IndexPage}></Route>*!/}
                    </Switch>*/
                    /*:
                    <Route exact path='*' component={Login}></Route>*/
                }
            </Router>
        </div>
    );
}

export default App;
