import React, {useState} from 'react';
import {Menu, Button, message} from 'antd';
import styles from './index.module.scss';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import {get} from "../../common/http";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import IndexPage from '../index/index';

const {SubMenu} = Menu;

function MenuNav(props: any) {

    //切换
    const [collapsed, setCollapsed] = useState<any>(false)

    const toggleCollapsed = () => {
        if (collapsed) {
            setCollapsed(false)
        } else {
            setCollapsed(true)
        }
    };

    /**
     * 点击事件
     */
    const handleClick = () => {
        get('./mock/BAK.json').then(res => {
            if (res.code == '0') {
                console.log(res.data)
                props.history.push('/index')
            } else {
                message.error(res.message);
            }
        }).catch(res => {
            message.error(res.message);
        });
    }

    return (
        <div className={styles.menuNav}>
            <div className={styles.left}>
                <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined/>}>
                        Option 3
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
            <div className={styles.right}>
                <div className={'appCon'}>
                    <Button>嗯嗯嗯嗯额嗯嗯</Button>
                    <Button type="primary" onClick={handleClick}>嘿嘿嘿嘿嘿嘿嘿</Button>
                </div>

                {/*<Router>
                    <Switch>
                        <Route path='/index' component={IndexPage}></Route>
                    </Switch>
                </Router>*/}
            </div>
        </div>
    )

}

export default MenuNav