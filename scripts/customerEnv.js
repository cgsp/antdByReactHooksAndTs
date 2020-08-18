module.exports = {
  development: {
    BABEL_ENV: 'development',
    NODE_ENV: 'development',
    REACT_APP_BUILD_ENV: 'development',
    PUBLIC_URL: './',
  },
  test: {
    BABEL_ENV: 'test',
    NODE_ENV: 'production',
    REACT_APP_BUILD_ENV: 'test',
    PUBLIC_URL: 'http://www.baidu.test.com',
  },
  uat: {
    // 不能用uat
    // 所以app代码里面，直接用BUILD_ENV来判断环境变量
    BABEL_ENV: 'test',
    NODE_ENV: 'production',
    REACT_APP_BUILD_ENV: 'uat',
    PUBLIC_URL: 'http://www.baidu.uat.com',
  },
  production: {
    BABEL_ENV: 'production',
    NODE_ENV: 'production',
    REACT_APP_BUILD_ENV: 'production',
    PUBLIC_URL: 'http://www.baidu.prod.com',
  },
}
