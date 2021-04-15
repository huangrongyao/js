# promise-ts

@rollup/plugin-node-resolve 插件可以告诉 Rollup 如何查找外部模块。（原来叫 rollup-plugin-node-resolve）
rollup-plugin-typescript2 rollup 与 ts 关联
npx tsc --init 创建 ts 配置文件 tsconfig
新建个 rollup 配置文件 rollup.config.js

```javascript
    yarn add typescript rollup @rollup/plugin-node-resolve rollup-plugin-typescript2
    npx tsc --init
```

rollup 比 webpack 打包纯净,自带 tree shaking

ts-node 本地运行 ts 文件不需要打包成 js 文件 配合 vscode 插件 code Runner

```javascript
    npm install -g ts-node
```

## 高阶函数

1.如果函数的参数是函数,或者返回结果是函数,则此函数就是高阶函数
