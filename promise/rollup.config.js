import  path from 'path';
import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input:'src/index.ts',
    output:{
        format:'cjs', // commonjs规范  umd esm, iife,
        file: path.resolve('dist/bundle.js'),  // 根目录不用加__dirname
    },
    plugins:[
        ts({tsconfig:path.resolve('tsconfig.json')}),  // 使用根目录下的ts配置文件
        nodeResolve({extensions:['.js,.ts']})
    ]
}