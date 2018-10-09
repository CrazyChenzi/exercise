// rollup.config.js
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import rollup_Commonjs from 'rollup-plugin-commonjs'

export default {
  intro: '// blacklisten',
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    name: 'MyBundle'
  },
  plugins: [ resolve({
    // 将自定义选项传递给解析插件
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  }),
  json(), rollup_Commonjs()],
  // 指定应将哪些模块视为外部模块
  external: ['lodash']
};