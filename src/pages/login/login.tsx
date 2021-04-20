/**
 * 登录
 * lechen
 */

import React from 'react';
import styles from './login.module.scss'
import {withRouter} from 'react-router-dom';
import {Form, Input, Button} from 'antd';
import PubSub from "pubsub-js";
/*import User from "../../../models/plat/User";
import {Account} from "../../../models/plat/Account";
import {DoLogin} from "../../../services/plat/UserService";*/

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function AppLogin(props: any, ref: any) {

    /**
     * 登录成功
     */
    const onFinish = (values: any) => {
        /*let account = new Account(values);
        let params = {
            userCode: account.userCode,
            passWord: account.passWord,
        }
        DoLogin(params).then((user: any) => {
            if (user) {
                const userData = new User(user);
                sessionStorage.setItem('token', JSON.stringify(userData));
                sessionStorage.setItem('userName', account.userCode);
                PubSub.publish('onLoginSuccess');
                props.history.push("/index");
            }
        })*/
    };

    /**
     * 注册事件
     */
    const registerEvent = () => {
        /*PubSub.publish('goRegister');*/
    }

    /**
     * 登录失败
     */
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={"login"}>
            <div className={"login_con"}>
                <h1 className={"title"}>惠每电子数据采集平台</h1>
                <div className={"title_tips"}>Huimei Health Electronic Data Capture Platform</div>
                <div className={"login_main"}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        requiredMark={false}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="账号"
                            name="userCode"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入账号！',
                                },
                            ]}
                            initialValue={sessionStorage.getItem('userName')}
                        >
                            <Input
                                placeholder="请输入账号"
                            />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="passWord"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="请输入密码"/>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <div className={'login_register'} onClick={registerEvent}>
                                注册账号
                            </div>
                            <Button className={"submit"} type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default AppLogin;


