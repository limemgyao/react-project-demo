let env = process.env.REACT_APP_ENV;
console.log('env', env)
console.log('process.env', process.env)
let baseUrl = '';

//开发环境
if (env === 'development') {
    /*baseUrl = window.location.href*/
    console.log(window.location.href)
    baseUrl = 'http://localhost:3001'
    /*baseUrl = 'http://localhost:3001'*/
    // baseUrl = 'http://172.20.10.4:9090/'
    /*baseUrl = 'http://192.168.1.38:8004/'*/
}
//测试环境
else if (env === 'test') {
    /* baseUrl = 'http://106.14.197.93:6060/'*/
    baseUrl = 'https://edc-saas-test.huimeimt.com/server/'
}
//生产环境（未定）
else if (env === 'production') {
    baseUrl = 'https://edc-saas.huimeihealth.com.cn/server/'
}


export const BASE_URL = baseUrl;