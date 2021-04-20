import React, {forwardRef, useEffect, useImperativeHandle, useState, useRef} from 'react';
import styles from './config.module.scss';
/*import {connect} from 'react-redux';
import {actionCreator} from '../store';*/
import {Form, Row, Col, Input, Button, Select, Table, Popconfirm} from 'antd';
/*import {GetStatusPlanList, GetPlanList} from "../../../services/design/DesignService";*/
/*import localStorageUtil from "../../../comm/localStorage";*/
import PubSub from "pubsub-js";
import {createFromIconfontCN} from "@ant-design/icons";

const FormItem = Form.Item;
const {Option} = Select;
const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_2343612_7unhssk7d2o.js',
    ],
});

function Confing(props: any, ref: any) {

    // 方案列表配置
    const [tableColumns, setTableColumns] = useState<any>([]);
    // 研究草案数据集合
    const [planList, setPlanList] = useState<any>([]); // 研究草案数据集合
    // 当前页码数
    const [page, setPage] = useState<any>('1');
    // pageSize
    const [pageSize, setPageSize] = useState<any>('10');
    // totalNum
    const [totalNum, setTotalNum] = useState<number>(0);
    // 研究草案 状态 默认值
    const [state, setState] = useState<any>('USE');
    // 状态下拉集合
    const [statusList, setStatusList] = useState<any>([]);
    // 类型下拉集合
    const [typeList, setTypeList] = useState<any>([])
    // 表格 loading
    const [tableLoading, setTableLoading] = useState<any>(false)
    //表单组件
    const formRef = useRef<any>(null);

    useEffect(() => {
        initData()
    }, [])

    const initData = () => {
        let columns = [
            {
                align: 'center',
                title: '方案名称',
                key: 'name',
                width: 120,
                dataIndex: 'name'
            },
            {
                align: 'center',
                title: '方案编码',
                key: 'code',
                width: 120,
                dataIndex: 'code'
            },
            {
                align: 'center',
                title: '最新版本',
                key: 'version',
                width: 120,
                dataIndex: 'version'
            },
            {
                align: 'center',
                title: '方案类型',
                key: 'typeName',
                width: 120,
                dataIndex: 'typeName',
            },
            {
                align: 'center',
                title: '应用项目数',
                key: 'applyProjectCount',
                width: 120,
                dataIndex: 'applyProjectCount'
            },
            {
                align: 'center',
                title: '应用患者数',
                key: 'applyPatientCount',
                width: 120,
                dataIndex: 'applyPatientCount'
            },
            {
                align: 'center',
                title: '状态',
                key: 'stateName',
                width: 120,
                dataIndex: 'stateName'
            },
            {
                align: 'center',
                title: '创建时间',
                key: 'createTime',
                width: 180,
                dataIndex: 'createTime'
            },
            {
                align: 'center',
                title: '创建人',
                key: 'createUser',
                width: 120,
                dataIndex: 'createUser',
                render: (text: any, item: any) => {
                    return <div>
                        ({item.createUser}) {item.createUserName}
                    </div>
                }
            },
            {
                align: 'center',
                title: '操作',
                width: 140,
                fixed: 'right',
                render: (text: any, item: any) => {
                    return (
                        <div className={'tableBtns'}>
                            <div onClick={() => {
                                handleItemDetail(item)
                            }}>
                                {formatIcon('iconchakan')}
                                查看
                            </div>
                            <div onClick={() => {
                                handleItemEdit(item)
                            }}>
                                {formatIcon('iconbianji')}
                                编辑
                            </div>
                            <Popconfirm
                                title="确认停用吗?"
                                okText='确认'
                                cancelText='取消'
                                onConfirm={() => handleStopUsing(item)}
                            >
                                <div style={{color: '#f04864'}} className={styles.actionBtn}>
                                    <IconFont type="iconstop_warning"></IconFont>
                                    停用
                                </div>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ];
        setTableColumns(columns)
        getStateTypeList()
        getList(null, null)
    }

    /**
     * 查询提交方法
     * @param searchParam
     */
    const handleFinish = (searchParam: any) => {
        getList(page, searchParam);
    }

    /**
     * 查询 方法
     * @param searchParam
     */
    const getList = (currentPage: any, searchParam: any) => {
        setTableLoading(true)
        let param: any = {};
        if (searchParam) {
            param = {
                ...searchParam,
                page: currentPage ? currentPage : page,
                pageSize: pageSize,
            }
        } else {
            let {planState, planType, name} = formRef.current.getFieldsValue(['planState', 'planType', 'name'])
            param = {
                planState: planState,
                planType: planType,
                name: name,
                page: currentPage ? currentPage : page,
                pageSize: pageSize,
            }
        }
        /*GetPlanList(param).then((res) => {
            if (res) {
                setTableLoading(false)
                setPlanList(res.rows)
                setPage(res.page);
                setTotalNum(res.total)
            } else {
                setTableLoading(false)
            }
        })*/
    }

    /**
     * 查询 状态 and 类型下拉集合
     * @param fieldsValue
     */
    const getStateTypeList = () => {
        /*GetStatusPlanList().then((res) => {
            if (res) {
                setStatusList(res.stateEnumList);
                setTypeList(res.typeEnumList)
                props.handlePlanSelectList(res.stateEnumList, res.typeEnumList)
            }
        })*/
    }

    /**
     * icon 图标
     */
    const formatIcon = (iconName: string) => {
        return iconName ? (<IconFont type={iconName}/>) : undefined;
    }

    /**
     * table 列表 编辑方法
     */
    const handleItemEdit = (item: any) => {
        /*let menuModule: any = localStorageUtil.get('menuModule', true);
        menuModule.levelThreeTitle = '方案修改';
        menuModule.levelTwoUrl = '/design/plan';
        localStorageUtil.set('menuModule', menuModule, true);
        PubSub.publish('onMenuModuleChange', menuModule);
        props.history.push({pathname: "/design/plan/edit", state: {...item}});*/
    }

    /**
     * 列表 详情方法
     */
    const handleItemDetail = (item: any) => {
        /*let menuModule: any = localStorageUtil.get('menuModule', true);
        menuModule.levelThreeTitle = '方案详情';
        menuModule.levelTwoUrl = '/design/plan';
        localStorageUtil.set('menuModule', menuModule, true);
        PubSub.publish('onMenuModuleChange', menuModule);
        props.history.push({pathname: "/design/plan/detail", state: {...item}});*/
    }

    /**
     * 方案 添加
     */
    const handleAddForm = () => {
        /* let menuModule: any = localStorageUtil.get('menuModule', true);
         menuModule.levelThreeTitle = '方案添加';
         localStorageUtil.set('menuModule', menuModule, true);
         PubSub.publish('onMenuModuleChange', menuModule);
         props.history.push('/design/plan/add');*/
    }

    /**
     * 方案 停用
     */
    const handleStopUsing = (item: any) => {
        /*let menuModule: any = localStorageUtil.get('menuModule', true);
        menuModule.levelThreeTitle = '方案修改';
        menuModule.levelTwoUrl = '/design/plan';
        localStorageUtil.set('menuModule', menuModule, true);
        PubSub.publish('onMenuModuleChange', menuModule);
        props.history.push({pathname: "/design/plan/edit", state: {...item}});*/
    }

    return (
        <div className={styles.plan}>
            <div className={styles.planForm}>
                <Form
                    layout="inline"
                    className={styles.planSearchItem}
                    autoComplete="off"
                    onFinish={handleFinish}
                    ref={formRef}
                >
                    <FormItem
                        name="name"
                        label="名称"
                    >
                        <Input
                            placeholder="请输入名称"
                            style={{borderColor: '#EEEFF7'}}
                        />
                    </FormItem>
                    <FormItem
                        name=""
                        label="应用项目"
                    >
                        <Input
                            placeholder="请输入应用项目"
                            style={{borderColor: '#EEEFF7'}}
                        />
                    </FormItem>
                    <FormItem
                        name="planType"
                        label="方案类型"
                    >
                        <Select
                            allowClear
                            placeholder="请选择方案类型"
                        >
                            {
                                typeList && typeList.length != 0 ?
                                    typeList.map((i: any) => (
                                        <Option
                                            value={i.code}
                                            key={i.code}>{i.name}</Option>
                                    )) : ''
                            }
                        </Select>
                    </FormItem>
                    <FormItem
                        name="planState"
                        label="状态"
                        style={{paddingRight: 0}}
                        initialValue={state}
                    >
                        <Select
                            allowClear
                            placeholder="请选择状态"
                        >
                            {
                                statusList && statusList.length != 0 ?
                                    statusList.map((i: any) => (
                                        <Option
                                            value={i.code}
                                            key={i.code}>{i.name}</Option>
                                    )) : ''
                            }
                        </Select>
                    </FormItem>
                    <FormItem
                        style={{width: '100%', textAlign: 'right', marginBottom: 0, paddingRight: 0}}
                        wrapperCol={{span: 24}}
                    >
                        <Button
                            className={'searchBtn'}
                            htmlType="submit"
                            style={{borderRadius: '2px', height: 36, marginRight: 16}}
                        >
                            查询
                        </Button>
                        <Button
                            type="primary"
                            onClick={handleAddForm}
                            style={{borderRadius: '2px', height: 36}}
                        >
                            添加
                        </Button>
                    </FormItem>
                </Form>
            </div>
            <Table
                locale={{emptyText: "暂无数据"}}
                className={styles.tableList}
                bordered
                columns={tableColumns}
                dataSource={planList}
                pagination={{
                    onChange: (pageNo) => {
                        // @ts-ignore
                        getList(pageNo);
                    },
                    current: 1,
                    pageSize: 10,
                    total: totalNum,
                    showSizeChanger: false,
                }}
                rowKey={'id'}
                scroll={{x: 1700}}
                loading={tableLoading}
            />
        </div>
    )
}

/*const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: any) => ({
    handlePlanSelectList(stateSelect: any, typeSelect: any) {
        const action = actionCreator.selectsListsAction(stateSelect, typeSelect);
        dispatch(action)
    }
})*/

/*export default connect(mapStateToProps, mapDispatchToProps)(Plan);*/
export default Confing;