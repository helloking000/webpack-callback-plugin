# 一、功能
在 webpack 编译完成后，可以执行 sh 命令。
当 webpack 运行在 watch 模式下，文件改变会触发重新编译，编译完了，就可以执行我们指定的操作。

# 二、用法示例

```
const WebpackCallbackPlugin = require('webpack-callback-plugin');

module.exports = {
    entry: 'index.js',
    output: {
        path: './build',
    },
    plugins: [
        new new WatchCallbackPlugin('echo hello world!') // 以字符串形式指定操作！！！
    ]
}
```
输出：
```
...
webpack 5.16.0 compiled with 1 warning in 3186 ms
stdout: hello world
```