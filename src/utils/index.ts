// 编译环境
export const BUILD_ENV = process.env.REACT_APP_BUILD_ENV

// 是否为本地开发环境
export const isDev = BUILD_ENV === 'development' ? true : false

// 是否为测试环境
export const isTest = BUILD_ENV === 'test' ? true : false

// 是否为uat环境
export const isUat = BUILD_ENV === 'uat' ? true : false

// 是否为生产环境
export const isProd = BUILD_ENV === 'production' ? true : false
