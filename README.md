## 简介

基于`Vue3`,`VitePress`,`typescript`, `Rollup`等主流技术开发的组件库模板

## 特性

- **最新技术栈**：使用 Vue3/vite2 等前端前沿技术开发
- **组件文档**：使用 VitePress 内置文档
- **支持**：支持 TypeScript，支持按需引入

## 准备

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) -项目开发环境
- [Vite](https://cn.vitejs.dev/) - 熟悉 vite 特性
- [Vue3](https://v3.cn.vuejs.org/) - 熟悉 Vue 基础语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [VitePress](https://vuepress.vuejs.org/) - 熟悉 VitePress 基本使用

## 安装使用

- 安装依赖

```bash
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
# 如果下载依赖慢可以使用淘宝镜像源安装依赖
npm install grace-ui --registry=https://registry.npm.taobao.org
```
### 引用组件库


- 全局引用

main.ts
```typescript
import {createApp} from 'vue'
import GraceUI from 'grace-ui'
createApp()
        .use(GraceUI)
        .mount('#app')
```
- 按需引用
main.js

```typescript
import {createApp} from "vue";
import {GrButton,GrInput,GrIcon} from 'grace-ui'
createApp()
        .use(GrIcon)
        .use(GrButton)
        .use(GrInput)
        .mount('#app')
```


## License

[MIT © 2022](./LICENSE)
