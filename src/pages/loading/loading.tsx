import React from 'react';
import {Spin} from 'antd';
import styles from './loading.module.scss'

const Loading = () => {
    return (
        <div id={'edc-loading'} className={styles.lx_loading}>
            <div className={styles.bg}></div>
            <div className={styles.loading}>
                <Spin tip="正在加载中 ..." size="large" spinning={true}/>
            </div>
        </div>
    )
}

export default Loading;