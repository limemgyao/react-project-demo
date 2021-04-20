/**
 * 平台管理模块路由配置
 */
import Plat from '../pages/plat/plat';     // index页
/*import AppAddNewProject from '../components/plat/addNewProject/addNewProject';     // 添加新项目
import NoConfigPage from '../components/plat/comm/noconfigpage/NoConfigPage';     // 未配置菜单项
import NoProjectPage from '../components/plat/comm/noprojectpage/NoProjectPage';     // 无项目菜单项
import EmptyPage from '../components/plat/comm/emptyPage/emptyPage';     // 空白页*/

const routes = [
    {'path': '/plat', 'component': Plat},
    /* {'path': '/addNewProject', 'component': AppAddNewProject},
     {'path': '/noConfigPage', 'component': NoConfigPage},
     {'path': '/noprojectpage', 'component': NoProjectPage},
     {'path': '/emptyPage', 'component': EmptyPage},*/
];

export default routes
