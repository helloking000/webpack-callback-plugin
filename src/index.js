/**
 * See the webpack docs for more information about plugins:
 * https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture
 */

class WebpackCallbackPlugin {
    constructor(command) {
        this.command = command;
    }

    apply(compiler) {
        // compiler.hooks.afterEmit.tap(
        compiler.hooks.done.tap( // 参考 webpack dev server 在 done 时，通过 socket 给浏览器发信息
            'MyPlugin',
            (compilation) => {
                // tnpm run push-device && adb logcat | grep FliggyJsPageUtils
                exec(this.command, (error, stdout, stderr) => {
                    if (error) {
                      console.error(`执行的错误: ${error}`);
                      return;
                    }
                    console.log(`stdout: ${stdout}`);
                    console.error(`stderr: ${stderr}`);
                });
            }
        );
    }
}

module.exports = WebpackCallbackPlugin;
