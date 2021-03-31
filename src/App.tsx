import './App.less';
import 'antd/dist/antd.css';
import {Button} from "antd";
import './mock.js'
import {get} from './common/http';
import {message} from 'antd';
import React from 'react';

function App() {

    /**
     * 点击事件
     */
    const handleClick = () => {
        get('./mock/BAK.json').then(res => {
            if (res.code == '0') {
                console.log(res.data)
            } else {
                message.error(res.message);
            }
        }).catch(res => {
            message.error(res.message);
        });
    }

    return (
        <div className="App">
            哈哈哈哈哈哈哈哈哈哈哈
            <div className={'appCon'}>
                <Button>嗯嗯嗯嗯额嗯嗯</Button>
                <Button type="primary" onClick={handleClick}>嘿嘿嘿嘿嘿嘿嘿</Button>
            </div>
        </div>
    );
}

export default App;
