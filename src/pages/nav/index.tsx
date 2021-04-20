import React, {useEffect, useState} from 'react';
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
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import IndexPage from '../index/index';
import {createFromIconfontCN} from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_2343612_j0y88cz0dcs.js',
    ],
});

const {SubMenu} = Menu;

function MenuNav(props: any) {

    //切换
    const [collapsed, setCollapsed] = useState<any>(false)
    const [menusData, setMenusData] = useState<any>()

    const toggleCollapsed = () => {
        if (collapsed) {
            setCollapsed(false)
        } else {
            setCollapsed(true)
        }
    };

    /**
     * icon 图标
     */
    const formatIcon = (iconName: any) => {
        return iconName ? (<IconFont type={iconName}/>) : undefined;
    }

    useEffect(() => {
        getMenu()
    }, [])

    /**
     * 点击事件
     */
    const getMenu = () => {
        get('./mock/getMenus.json').then(res => {
            if (res.code == '0') {
                console.log(res)
                setMenusData(res.rows)
                props.history.push('/index')
            } else {
                message.error(res.message);
            }
        }).catch(res => {
            message.error(res.message);
        });
    }

    /**
     * 点击事件
     */
    const handleMenuItemClick = (data: any) => {
        console.log(data)
        if (data) {
            props.history.push(data.url)
        }
    }

    return (
        <div className={styles.menuNav}>
            {/*<Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>*/}
            {/*<Menu
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
            </Menu>*/}
            <Menu
                /*openKeys={[_this.state.menuIsOpen]}*/
                mode="inline"
                theme="dark"
                /*inlineCollapsed={this.state.collapsed}
                selectedKeys={[this.state.selectMenuKey]}*/
            >
                {
                    menusData && menusData.map((item: any, index: number) => {
                        if (item.children && item.children.length > 0) {
                            return (
                                <SubMenu
                                    key={item.code}
                                    icon={formatIcon(item.iconName)}
                                    title={item.name}
                                    /*onTitleClick={handleSelectMenuTitle}*/
                                >
                                    {
                                        item.children.map((u: any) => (
                                            <Menu.Item
                                                key={u.code}
                                                /*icon={formatIcon(item.iconName)}*/
                                                /*url={item.url}*/
                                                /*type={item.type}*/
                                                /*selectedKeys={[this.state.selectMenuKey]}*/
                                                onClick={() => handleMenuItemClick(u)}
                                            >
                                                {u.name}
                                            </Menu.Item>
                                        ))
                                    }
                                </SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item
                                    key={item.code}
                                    /*icon={formatIcon(item.iconName)}*/
                                    /*url={item.url}*/
                                    /*type={item.type}*/
                                    /*selectedKeys={[this.state.selectMenuKey]}*/
                                    onClick={() => handleMenuItemClick(item)}
                                >
                                    {item.name}
                                </Menu.Item>)
                        }
                    })
                }
            </Menu>
        </div>
    )

}

export default withRouter(MenuNav)