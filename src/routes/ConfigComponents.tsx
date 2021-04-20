/**
 * 配置中心模块路由配置
 */
import Config from '../pages/config/config';// 平台字典路由组件
/*import DictionaryDetail from '../components/config/dictionary/detail/dictionaryDetail';// 平台字典详情
import DictionaryAdd from '../components/config/dictionary/add/dictionaryAdd';// 平台字典添加
import DictionaryEdit from '../components/config/dictionary/edit/dictionaryEdit';// 平台字典编辑
import CodeSet from '../components/config/codeSet/codeSet';// 数据编码集组件
import CodeSetAdd from '../components/config/codeSet/add/codeSetAdd';// 数据元管理添加
import CodeSetEdit from '../components/config/codeSet/edit/codeSetEdit';// 数据编码集编辑
import CodeSetDetail from '../components/config/codeSet/detail/codeSetDetail';// 数据编码集详情
import MetaManagement from '../components/config/metaManagement/metaManagement';// 数据元管理组件
import MetaManagementEdit from '../components/config/metaManagement/edit/metaManagementEdit';// 数据元管理编辑
import MetaManagementAdd from '../components/config/metaManagement/add/metaManagementAdd';// 数据元管理添加
import MetaManagementDetail from '../components/config/metaManagement/detail/metaManagementDetail';// 数据元管理编辑
import MaskingRule from '../components/config/maskingRule/maskingRule';  //脱敏规则配置
import RuleDetail from '../components/config/maskingRule/ruleDetail/ruleDetail';  //规则详情（编辑）
import ReadRuleDetail from '../components/config/maskingRule/readRuleDetail/readRuleDetail';  //规则详情(只读)*/


const routes = [
    {'path': '/config', 'component': Config},
    /*{ 'path': '/config/dictionary/detail', 'component': DictionaryDetail },
    { 'path': '/config/dictionary/add', 'component': DictionaryAdd },
    { 'path': '/config/dictionary/edit', 'component': DictionaryEdit },
    { 'path': '/config/codeSet', 'component': CodeSet },
    { 'path': '/config/codeSet/edit', 'component': CodeSetEdit },
    { 'path': '/config/metaManagement', 'component': MetaManagement },
    { 'path': '/config/metaManagement/edit', 'component': MetaManagementEdit },
    { 'path': '/config/dictionary', 'component': Dictionary },
    { 'path': '/config/dictionary/detail', 'component': DictionaryDetail },
    { 'path': '/config/dictionary/add', 'component': DictionaryAdd },
    { 'path': '/config/dictionary/edit', 'component': DictionaryEdit },
    { 'path': '/config/codeSet', 'component': CodeSet },
    { 'path': '/config/codeSet/add', 'component': CodeSetAdd },
    { 'path': '/config/codeSet/edit', 'component': CodeSetEdit },
    { 'path': '/config/codeSet/detail', 'component': CodeSetDetail },
    { 'path': '/config/metaManagement', 'component': MetaManagement },
    { 'path': '/config/metaManagement/edit', 'component': MetaManagementEdit },
    { 'path': '/config/metaManagement/add', 'component': MetaManagementAdd },
    { 'path': '/config/metaManagement/detail', 'component': MetaManagementDetail },
    { 'path': '/config/maskingRule', 'component': MaskingRule },
    { 'path': '/config/maskingRule/ruleDetail/:id', 'component': RuleDetail },
    { 'path': '/config/maskingRule/readRuleDetail/:id/:version', 'component': ReadRuleDetail },*/
];

export default routes
