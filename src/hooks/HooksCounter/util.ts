import axios from 'axios'

enum IHttpMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put',
}

const methods = ['get', 'post', 'delete', 'put']

interface IHttpFn {
  <T = any>(url: string, config?: any): Promise<T>
}

type IHttp = Record<IHttpMethods, IHttpFn>

// 这个httpMethods的 key = IHttpMethods， value = Promise
const httpMethods: IHttp = methods.reduce((map: any, method: string) => {
  map[method] = (url: string, options: any = {}) => {
    const { data, ...config } = options
    return (axios as any)[method](url, data, config).then((res: any) => {
      if (res.data.errCode) {
        // do somethins
      } else {
        // do somethins
      }
    })
  }
  return map
}, {})

export default httpMethods
