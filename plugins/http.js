/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-14 14:44:32
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 14:44:37
 * @FilePath: \blogBackstage\plugins\http.js
 */

export default function({
    store,
    redirect,
    req,
    router,
    app: {
        $axios
    }
}) {
    $axios.defaults.baseURL = "http://127.0.0.1:7001";
    /**响应拦截器 */
    $axios.interceptors.request.use(
        config => {
            // console.log(config.url)
            // if(config.url=="/postFileImg"){
            //     config.headers['Content-Type'] = 'multipart/form-data';
            // }
            let token = $cookies.get("token");
            if (token) {
              config.headers['Authorization'] = `${token}`;
            }
            return config
        },
        error => {
            return Promise.reject(error)
        }
    );

    $axios.interceptors.response.use(
        response => {
            return response
        },
        error => {
            if (error && error.response) {
                console.log(error.response.status);
                switch (error.response.status) {
                    case 400:
                        error.message = '请求错误'
                        break
                    case 401:
                        error.message = '未授权，请登录'
                        break
                    case 403:
                        error.message = '拒绝访问'
                        break
                    case 404:
                        error.message = `请求地址出错: ${error.response.config.url}`
                        break
                    case 408:
                        error.message = '请求超时'
                        break
                    case 500:
                        error.message = '服务器内部错误'
                        break
                    case 501:
                        error.message = '服务未实现'
                        break
                    case 502:
                        error.message = '网关错误'
                        break
                    case 503:
                        error.message = '服务不可用'
                        break
                    case 504:
                        error.message = '网关超时'
                        break
                    case 505:
                        error.message = 'HTTP版本不受支持'
                        break
                    default:
                        break
                }
            }
            return Promise.reject(error)
        }
    )
}