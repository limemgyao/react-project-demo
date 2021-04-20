/**
 * 平台管理模块路由配置
 */
import Design from '../pages/design/design';     // crf表单管理
/*import CrfFormDetail from '../components/design/crfForm/detail/detail';     // crf表单详情
import Plan from '../components/design/plan/plan';     // 研究方案 列表
import PlanDetail from '../components/design/plan/detail/planDetail';     // 研究方案 详情
import PlanAdd from '../components/design/plan/add/planAdd';     // 研究方案 添加
import PlanEdit from '../components/design/plan/edit/planEdit';     // 研究方案 添加*/

const routes = [
    {'path': '/design', 'component': Design},
    /*{'path': '/design/crfForm/detail', 'component': CrfFormDetail},
    {'path': '/design/plan', 'component': Plan},
    {'path': '/design/plan/detail', 'component': PlanDetail},
    {'path': '/design/plan/add', 'component': PlanAdd},
    {'path': '/design/plan/edit', 'component': PlanEdit},*/
];

export default routes;
