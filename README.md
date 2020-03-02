# moviefront
基于Vue的大数据电影推荐系统前端页面，采用前后端分离架构

### 任务点
- [x] 开发环境搭建测试
- [x] 初步架构方案
- [x] Vue学习，开源项目学习
- [ ] 等待后端mock接口
- [x] 用户登录页面，退出
- [ ] 用户信息详情页，修改页
- [ ] 电影详情页
- [ ] 评论页
- [ ] 演员详情页
- [ ] 首页
- [ ] 部署方案

### Git
``` bash
# 创建本地分支并切换
git checkout -b dev
# 暂存代码
git add .
# 提交代码
git commit -m "本次提交说明"
# 推送到远程仓库
git push
```


### 开发部署

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```


### 技术栈
- [Vue.js](https://cn.vuejs.org/index.html)
- [Vuex](https://vuex.vuejs.org/zh/guide/)
- [element-ui](https://element.eleme.cn/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://github.com/eslint/eslint)
- [Postcss](https://github.com/postcss/postcss)

### 接口文档

### 工程结构

```
.
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.dev.conf.js  // webpack配置文件
├── config
│   ├── dev.env.js           // 配置文件
│   ├── index.js
├── index.html               // vue加载页
├── package.json
├── package-lock.json
├── README.md
├── server.js
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   ├── ele-custom-theme
│   │   ├── logo.png
│   │   ├── main.css
│   │   └── util
│   ├── components
│   │   ├── home.vue
│   │   ├── index.vue         // 首页
│   │   └── login.vue         // 登录页面
│   ├── http.js
│   ├── main.js
│   ├── router.js             // 路由
│   └── store                 // vuex store
│       ├── store.js
│       └── types.js          // 常量
├── static
└── yarn.lock
```
