import axios from 'axios'
const fetch = axios.create({
    // baseURL:
    timeout:3000
})
// 请求拦截器
fetch.interceptors.request.use((config)=>{
    console.log('请求之前')
    return config
},(error)=>{
    console.log('请求失败')
    return Promise.reject(error)
})

// 响应拦截器
fetch.interceptors.response.use((res)=>{
    console.log('响应成功')
    if(res.data.status!=200){
        return Promise.reject(res)
    }else{
        return Promise.resolve(res)
    }
},(error)=>{
    console.log('响应出现错误')
    if(error.response.status){
        let status=error.response.status
        switch(status){
            case 404:
                console.log('你访问的页面不存在');
                break
            case 401:
                console.log('身份验证失败');
                break
            case 403:
                console.log('登录过期');
                break
            default:
                console.log(error.response.data.msg);
        }
        return Promise.reject(error)
    }
})
export default fetch